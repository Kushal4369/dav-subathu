import fs from "fs";
import path from "path";
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const dataFilePath = path.join(rootDir, "data", "happenings.json");

// Default directory for all latest event uploads
const defaultLatestDir = path.join(rootDir, "public", "latest");

// Ensure public/latest directory exists
if (!fs.existsSync(defaultLatestDir)) {
  fs.mkdirSync(defaultLatestDir, { recursive: true });
}

// Allowed image file extensions
const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".svg",
  ".JPG",
  ".JPEG",
  ".PNG",
]);

// Color themes based on category
const CATEGORY_TAG_COLORS = {
  "Cultural Fest": "bg-amber-100 text-amber-800 border-amber-200",
  "Heritage & Field Trip": "bg-indigo-100 text-indigo-800 border-indigo-200",
  "Heritage & Culture": "bg-purple-100 text-purple-800 border-purple-200",
  "Sports & Athletics": "bg-blue-100 text-blue-800 border-blue-200",
  "Arts & Craft": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Science & Innovation": "bg-cyan-100 text-cyan-800 border-cyan-200",
  Celebrations: "bg-rose-100 text-rose-800 border-rose-200",
  "Campus Life": "bg-blue-100 text-blue-800 border-blue-200",
};

// Generate clean URL slug from string
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

// Find all image files in a directory
function findImagesInDir(dirPath, webPrefix) {
  if (!fs.existsSync(dirPath)) return [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const images = [];
  for (const entry of entries) {
    if (entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name))) {
      images.push(`${webPrefix}/${entry.name}`);
    }
  }
  return images;
}

// Read current happenings
function readHappenings() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const raw = fs.readFileSync(dataFilePath, "utf8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("Error reading happenings.json:", err);
  }
  return [];
}

// Save happenings
function saveHappenings(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");
}

// Auto-scan mode: finds any subfolder in public/latest not yet in happenings.json
async function runAutoScan() {
  console.log("\n🔍 Scanning for new event folders in public/latest/...");
  const existingHappenings = readHappenings();
  const existingIds = new Set(existingHappenings.map((h) => h.id));

  const candidateDirs = [];

  // Check subfolders inside public/latest/
  if (fs.existsSync(defaultLatestDir)) {
    const subdirs = fs.readdirSync(defaultLatestDir, { withFileTypes: true });
    for (const d of subdirs) {
      if (d.isDirectory()) {
        candidateDirs.push({
          folderName: d.name,
          fullPath: path.join(defaultLatestDir, d.name),
          webPrefix: `/latest/${d.name}`,
        });
      }
    }
  }

  let addedCount = 0;
  for (const candidate of candidateDirs) {
    const id = slugify(candidate.folderName);
    if (!existingIds.has(id)) {
      const images = findImagesInDir(candidate.fullPath, candidate.webPrefix);
      if (images.length === 0) continue;

      const formattedTitle = candidate.folderName
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

      const newEvent = {
        id,
        title: formattedTitle,
        category: "Campus Life",
        date: "Latest Activity",
        location: "DAV Subathu Campus",
        coverImage: images[0],
        images,
        summary: `Highlights and moments from ${formattedTitle} celebrated at D.A.V. Subathu.`,
        description: `Students and faculty participated enthusiastically in ${formattedTitle}, showcasing teamwork, dedication, and campus spirit.`,
        highlights: [
          `Active student participation`,
          `Memorable moments and campus achievements`,
          `Commended by teachers and principal`,
        ],
        tagColor: "bg-blue-100 text-blue-800 border-blue-200",
      };

      existingHappenings.unshift(newEvent);
      existingIds.add(id);
      addedCount++;
      console.log(`✅ Added new event: "${formattedTitle}" (${images.length} photos found)`);
    }
  }

  if (addedCount > 0) {
    saveHappenings(existingHappenings);
    console.log(`\n🎉 Successfully added ${addedCount} new event(s) to data/happenings.json!`);
    console.log(`Next.js will automatically hot-reload the home page.`);
  } else {
    console.log("ℹ️ No new unindexed folders found in public/latest/. All events are up-to-date!");
  }
}

// Interactive wizard mode
async function runInteractiveWizard() {
  const rl = readline.createInterface({ input, output });

  console.log("\n=======================================================");
  console.log("   🌟 DAV Subathu — Add Latest Happening Wizard 🌟    ");
  console.log("   Default Upload Destination: public/latest/          ");
  console.log("=======================================================\n");

  try {
    // 1. Event Title
    const titleInput = await rl.question("1. Event Title (e.g. Annual Sports Meet 2026): ");
    const title = titleInput.trim();
    if (!title) {
      console.log("❌ Title is required. Exiting.");
      rl.close();
      return;
    }
    const id = slugify(title);

    // 2. Category selection
    console.log("\n2. Select a Category:");
    const categories = [
      "Cultural Fest",
      "Heritage & Field Trip",
      "Sports & Athletics",
      "Arts & Craft",
      "Science & Innovation",
      "Celebrations",
      "Academic Excellence",
    ];
    categories.forEach((cat, idx) => console.log(`   [${idx + 1}] ${cat}`));
    console.log("   [0] Type custom category");

    const catChoice = await rl.question("Choose (1-7 or 0): ");
    let category = "Campus Life";
    const choiceNum = parseInt(catChoice.trim(), 10);
    if (choiceNum >= 1 && choiceNum <= categories.length) {
      category = categories[choiceNum - 1];
    } else if (choiceNum === 0 || catChoice.trim() !== "") {
      const customCat = await rl.question("Enter custom category: ");
      category = customCat.trim() || "Campus Life";
    }

    // 3. Date
    const now = new Date();
    const defaultDate = now.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    const dateInput = await rl.question(`\n3. Event Date [default: "${defaultDate}"]: `);
    const date = dateInput.trim() || defaultDate;

    // 4. Location
    const defaultLocation = "DAV Subathu Campus";
    const locInput = await rl.question(`\n4. Campus Location [default: "${defaultLocation}"]: `);
    const location = locInput.trim() || defaultLocation;

    // 5. Photos Folder in public/latest/
    console.log("\n5. Photos Location (in public/latest/):");
    
    // Check available subfolders in public/latest
    const availableFolders = [];
    if (fs.existsSync(defaultLatestDir)) {
      // Check root files in public/latest
      const rootImages = findImagesInDir(defaultLatestDir, "/latest");
      if (rootImages.length > 0) {
        availableFolders.push({ name: "latest (root files)", path: defaultLatestDir, prefix: "/latest" });
      }
      const subdirs = fs.readdirSync(defaultLatestDir, { withFileTypes: true });
      for (const d of subdirs) {
        if (d.isDirectory()) {
          availableFolders.push({ name: `latest/${d.name}`, path: path.join(defaultLatestDir, d.name), prefix: `/latest/${d.name}` });
        }
      }
    }

    let selectedFolder = null;
    console.log(`   [Default: N] Create new folder: public/latest/${id}/`);
    if (availableFolders.length > 0) {
      console.log("   Or select an existing photo folder:");
      availableFolders.forEach((f, idx) => console.log(`   [${idx + 1}] public/${f.name}`));
    }
    const folderChoice = await rl.question("Choose option (press Enter for [N], or enter number): ");
    const folderNum = parseInt(folderChoice.trim(), 10);
    if (folderNum >= 1 && folderNum <= availableFolders.length) {
      selectedFolder = availableFolders[folderNum - 1];
    }

    let images = [];
    if (selectedFolder) {
      images = findImagesInDir(selectedFolder.path, selectedFolder.prefix);
      console.log(`   Found ${images.length} photo(s) in public/${selectedFolder.name}`);
    } else {
      // Create new folder in public/latest/[id]
      const newFolderPath = path.join(defaultLatestDir, id);
      if (!fs.existsSync(newFolderPath)) {
        fs.mkdirSync(newFolderPath, { recursive: true });
      }
      console.log(`\n   📁 Created new event folder: ${newFolderPath}`);
      console.log(`   👉 Please drop your event photos into: public/latest/${id}/`);
      await rl.question("   Press Enter once you have copied your photos into the folder...");
      
      images = findImagesInDir(newFolderPath, `/latest/${id}`);
      if (images.length === 0) {
        console.log("   ⚠️ No images found in folder yet! Using campus photo as fallback cover.");
        images = ["/DAV_School.jpg"];
      } else {
        console.log(`   ✅ Successfully detected ${images.length} photo(s)!`);
      }
    }

    // 6. Summary
    const defaultSummary = `A celebration of student excellence and vibrant campus life during ${title} at D.A.V. Subathu.`;
    const summaryInput = await rl.question(`\n6. Short Summary (1-2 sentences for card preview) [press Enter for default]: `);
    const summary = summaryInput.trim() || defaultSummary;

    // 7. Full Description
    const defaultDesc = `Students, faculty, and school community came together for ${title}. The event fostered enthusiasm, creativity, and values-based learning, highlighting the unique talents of D.A.V. Subathu students.`;
    const descInput = await rl.question(`\n7. Detailed Description (for expanded modal) [press Enter for default]: `);
    const description = descInput.trim() || defaultDesc;

    // 8. Key Highlights
    console.log(`\n8. Key Highlights (enter 2-4 points, separated by semicolons or commas)`);
    console.log(`   Example: Enthusiastic participation; Inter-house trophy awarded; Inspiring student performances`);
    const highlightsInput = await rl.question(`   Enter highlights [press Enter for smart defaults]: `);
    let highlights = [];
    if (highlightsInput.trim()) {
      highlights = highlightsInput
        .split(/[;,]/)
        .map((h) => h.trim())
        .filter(Boolean);
    }
    if (highlights.length === 0) {
      highlights = [
        "Enthusiastic student participation across grades",
        "Celebration of talent, discipline, and campus ethos",
        "Special recognition for outstanding performers",
      ];
    }

    // Tag color
    const tagColor = CATEGORY_TAG_COLORS[category] || "bg-blue-100 text-blue-800 border-blue-200";

    const newHappening = {
      id,
      title,
      category,
      date,
      location,
      coverImage: images[0],
      images,
      summary,
      description,
      highlights,
      tagColor,
    };

    // Prepend to happenings.json
    const happenings = readHappenings();
    // Filter out if duplicate ID exists
    const updated = [newHappening, ...happenings.filter((h) => h.id !== id)];
    saveHappenings(updated);

    console.log("\n=======================================================");
    console.log(`🎉 SUCCESS! New happening added: "${title}"`);
    console.log(`📸 Photos attached: ${images.length}`);
    console.log(`📁 Folder: public/latest/${id}/`);
    console.log(`📁 Data updated: data/happenings.json`);
    console.log(`🌐 Live on home page: http://localhost:3000`);
    console.log("=======================================================\n");
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    rl.close();
  }
}

// Run based on CLI arguments
const isScanMode = process.argv.includes("--scan");
if (isScanMode) {
  runAutoScan();
} else {
  runInteractiveWizard();
}

# 📸 Guide: How to Add & Manage Latest Happenings Events

This guide explains how developers and administrators can easily add, update, reorder, and remove school events in the **Latest Happenings** interactive carousel on the home page.

---

## 🗂️ Overview of Files & Folders

| File / Folder | Purpose |
|---|---|
| `public/latest/` | **Default folder for all event photos**. Each event has its own subfolder here (e.g. `public/latest/sports-meet-2026/`). |
| `data/happenings.json` | Centralized JSON file containing all event metadata, descriptions, highlights, and photo paths. |
| `pages/components/LatestHappenings.jsx` | The React component that renders the carousel and expanding modal with swipable photos. |
| `scripts/add-event.mjs` | Developer CLI tool for interactive event creation and auto-scanning. |

---

## 🚀 How to Add a New Event (3 Easy Methods)

### Method 1: Interactive Wizard (Recommended)
This method guides you through adding an event step-by-step directly from the terminal.

1. Open your terminal in the project folder and run:
   ```bash
   npm run add-event
   ```

2. Follow the interactive prompts:
   - **Event Title**: e.g., `Annual Sports Meet 2026` or `Science & Robotics Exhibition`
   - **Category**: Select a preset (Cultural, Sports, Arts, Science, Heritage, Celebrations) or type a custom one.
   - **Date**: Defaults to current Month & Year (e.g., `October 2026`), or type a custom date.
   - **Location**: Defaults to `DAV Subathu Campus`.
   - **Photos Folder**:
     - By default, it creates a new folder: `public/latest/<event-slug>/`.
     - Drop your photos (`.jpg`, `.jpeg`, `.png`, etc.) into that folder.
     - Press **Enter** once copied. The script automatically detects all images!
   - **Summary**: 1-2 sentence preview for the carousel card (press Enter for a smart default).
   - **Description**: Detailed paragraph for the expanded modal (press Enter for a smart default).
   - **Key Highlights**: 2 to 4 bullet points separated by semicolons or commas.

3. **Done!** The event is automatically prepended to `data/happenings.json`. Next.js immediately updates the live website at `http://localhost:3000`.

---

### Method 2: Drop-and-Auto-Scan (Zero Typing)
If you just want to drop a bunch of photos and have the event created automatically:

1. Create a new folder inside `public/latest/` with a descriptive name:
   ```
   public/latest/republic-day-2026/
   ```
2. Copy your event photos into that folder:
   ```
   public/latest/republic-day-2026/photo1.jpg
   public/latest/republic-day-2026/photo2.jpg
   public/latest/republic-day-2026/photo3.jpg
   ```
3. Run the scan script in your terminal:
   ```bash
   npm run scan-events
   ```
4. The script automatically detects the new folder, reads all the photos, formats the title (e.g. *"Republic Day 2026"*), and publishes it to `data/happenings.json`.

---

### Method 3: Direct JSON Editing
You can also directly edit `data/happenings.json` in VS Code or your preferred text editor anytime.

Add a new event object at the top of the array:

```json
{
  "id": "republic-day-2026",
  "title": "Republic Day Celebration 2026",
  "category": "Celebrations",
  "date": "January 2026",
  "location": "DAV Subathu Assembly Ground",
  "coverImage": "/latest/republic-day-2026/photo1.jpg",
  "images": [
    "/latest/republic-day-2026/photo1.jpg",
    "/latest/republic-day-2026/photo2.jpg",
    "/latest/republic-day-2026/photo3.jpg"
  ],
  "summary": "Students and faculty celebrated the 77th Republic Day with patriotic fervour and flag hoisting.",
  "description": "The celebration commenced with the unfurling of the National Flag followed by the National Anthem. Students performed patriotic songs, parades, and cultural dances highlighting India's rich heritage.",
  "highlights": [
    "Ceremonial flag hoisting and march past",
    "Patriotic choir and cultural dance routines",
    "Inspiring address on civic responsibility by the Principal"
  ],
  "tagColor": "bg-rose-100 text-rose-800 border-rose-200"
}
```

---

## 🎨 Category Tag Colors

You can use any of these predefined Tailwind color classes for `"tagColor"`:

| Category | Recommended `"tagColor"` |
|---|---|
| **Cultural Fest** | `"bg-amber-100 text-amber-800 border-amber-200"` |
| **Heritage & Field Trip** | `"bg-indigo-100 text-indigo-800 border-indigo-200"` |
| **Sports & Athletics** | `"bg-blue-100 text-blue-800 border-blue-200"` |
| **Arts & Craft** | `"bg-emerald-100 text-emerald-800 border-emerald-200"` |
| **Science & Innovation** | `"bg-cyan-100 text-cyan-800 border-cyan-200"` |
| **Celebrations** | `"bg-rose-100 text-rose-800 border-rose-200"` |
| **Heritage & Culture** | `"bg-purple-100 text-purple-800 border-purple-200"` |

---

## 🔄 How to Reorder or Delete Events

Open `data/happenings.json`:

- **To Reorder**: Cut and paste the `{ ... }` event blocks. The first event in the list will be the first card shown in the carousel.
- **To Delete an Event**: Remove the `{ ... }` block for that event from `data/happenings.json`. (Optionally delete its photo folder from `public/latest/<event-slug>/` to free disk space).
- **To Edit Text or Photos**: Simply modify the fields in `data/happenings.json` and save. The website hot-reloads instantly!

---

## 💡 Best Practices for Photos

1. **Formats**: Use standard image formats: `.jpg`, `.jpeg`, `.png`, or `.webp`.
2. **Orientation**: Horizontal (landscape) photos look best for both the carousel cards and modal gallery.
3. **Cover Photo**: The first photo in the `"images"` array or the `"coverImage"` property will be shown as the cover photo on the carousel card.
4. **Number of Photos**: 3 to 8 photos per event provides a smooth swipable gallery experience for visitors.

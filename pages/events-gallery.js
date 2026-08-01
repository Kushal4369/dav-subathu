import SocialMenu from "./components/Social Media Menu";
import  Timeline  from "./components/Timeline";

import YouTube from "react-youtube";
const timelineData = [
  {
    title: "First Day of School 2026",
    content: (
     <YouTube videoId="yHEjtJmKQoI" />
      
    ),
  },
    {
    title: "Annual Function 2025",
    content: (
     <YouTube videoId="i7TeVTcpma0" />
      
    ),
  },
  {
    title: "Dussehra Activity",
    content: (
     <YouTube videoId="UBx7wxwadas" />
      
    ),
  },
    {
    title: "Sports Day ",
    content: (
     <YouTube videoId="zW8hM8IlVw4" />
      
    ),
  },
  {
    title: "Annual Function",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {["Photo 1.JPG", "Photo 2.JPG", "Photo 3.JPG", "Photo 4.JPG", "Photo 5.JPG", "Photo 6.JPG"].map((key) => (
          <div key={key} className="p-1 bg-gray-100 border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={`/annual-function/${key}`}
              alt="Annual Function"
              className="rounded-lg"
              height={500}
              width={500}
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Pot Decoration Activity",
    content: (
      <img src="/recent-activities/pot decoration.jpg" alt="Pot Decoration" className="rounded-lg mx-auto" />
      
    ),
  },
  {
    title: "Rangoli Activity",
    content: (
      <img src="/recent-activities/rangoli.jpg" alt="Rangoli" className="rounded-lg mx-auto" />
    ),
  },
  
];

const EventsGallery = () => (
  <div>
    <section className="relative overflow-hidden">
      <img
        src="/assets/events-gallery-header.jpg"
        alt="Events Gallery Header"
        className="w-full h-[420px] md:h-[560px] object-contain brightness-75"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/20">
        <h1 className="text-4xl md:text-6xl font-semibold text-white drop-shadow-lg">
          Events Gallery
        </h1>
        <p className="mt-3 text-base md:text-lg text-white max-w-2xl drop-shadow">
          Discover our latest school events, celebrations, and student life highlights.
        </p>
      </div>
    </section>

    <div className="px-4 py-10 md:px-8">
      <Timeline data={timelineData} />
    </div>
  </div>
);

export default EventsGallery;

import SocialMenu from "./components/Social Media Menu";
import  Timeline  from "./components/Timeline";

import YouTube from "react-youtube";
const timelineData = [
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
   
    <Timeline data={timelineData} />
    
  </div>
);

export default EventsGallery;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Announcements = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 2000,
    // cssEase: "linear"
  };

  const announcements = [
    "Welcome to our school!",
    "Admissions for 2026 are now open!",
    ,
  ];

  return (
    <Slider {...settings} className="mt-4">
      {announcements.map((announcement, index) => (
        <div key={index} className="bg-blue-100 p-4 rounded-md text-center">
          <p>{announcement}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Announcements;

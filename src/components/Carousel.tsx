import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Card from "./Card";

interface CarouselItem {
  title: string;
  text: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="w-300">
      {items.map((item, index) => (
        <div key={index} className="p-4 flex justify-center">
          <Card title={item.title} text={item.text} />
        </div>
      ))}
    </Slider>
  );
}

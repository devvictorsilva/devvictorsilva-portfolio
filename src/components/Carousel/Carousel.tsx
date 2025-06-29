import { Icon } from "@iconify/react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselItem from "./CarouselItem";

interface CarouselItem {
  title: string;
  text: string;
  icon: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    className: "",
    centerMode: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
    ],
    prevArrow: <Icon icon="material-symbols:keyboard-arrow-left" width="96" height="96"  color="#3B82F6" />,
    afterChange: (index: number) => {
      const centerIndex = Math.floor(index + settings.slidesToShow / 4) % items.length;
      setCurrentIndex(centerIndex);
    },
  };

  return (
    <Slider {...settings} className="w-full h-170 desktop:w-400 desktop:h-115">
      {items.map((item, index) => (
        <div
          key={index}
          className="p-4 h-125 desktop:h-115 flex justify-center transition-transform duration-300"
        >
          <CarouselItem
            title={item.title}
            text={item.text}
            icon={item.icon ?? null}
            isSelected={index === currentIndex}
          />
        </div>
      ))}
    </Slider>
  );
}

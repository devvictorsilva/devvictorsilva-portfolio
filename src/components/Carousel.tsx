import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card";

interface CarouselItem {
  title: string;
  text: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const prevItem = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextItem = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const childWidth = track.children[0]?.clientWidth || 0;
    const gap = 16;
    const offset = (childWidth + gap) * currentIndex;

    track.style.transform = `translateX(-${offset}px)`;
    track.style.transition = "transform 0.5s ease-in-out";
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-[600px] mx-auto flex items-center">
      {/* Botão Esquerda */}
      <button
        onClick={prevItem}
        className="absolute left-0 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full"
      >
        <FaChevronLeft className="text-white" />
      </button>

      {/* Viewport */}
      <div className="overflow-hidden w-full px-10">
        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-4"
          style={{ willChange: "transform" }}
        >
          {items.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                className={`
                  shrink-0 transition-all duration-300 transform
                  ${isActive ? "scale-110 opacity-100 z-20" : "scale-90 opacity-40 z-10"}
                `}
                style={{ width: "260px" }}
              >
                <Card title={item.title} text={item.text} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Botão Direita */}
      <button
        onClick={nextItem}
        className="absolute right-0 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full"
      >
        <FaChevronRight className="text-white" />
      </button>
    </div>
  );
}

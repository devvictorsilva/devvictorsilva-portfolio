import { useEffect, useState } from "react";

interface CardProps {
  banner?: string;
  title: string;
  text: string;
  isColoredType?: boolean;
}

export default function Card({ banner, title, text, isColoredType = false }: CardProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportWidth = window.innerWidth;

      if (viewportWidth < 1024 && scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`reveal w-full h-full text-white flex flex-col gap-4
        pt-6 pb-10 px-4 rounded-lg cursor-default 
        border border-border transition-all duration-600 ease-in-out
        ${isScrolled ? "shadow-lg shadow-primary-accent/40 -translate-y-4 scale-[1.04] bg-gradient-to-br from-secondary to-gray-800" : ""}
        ${isColoredType ? "bg-primary-accent" : "bg-secondary"}
        hover:shadow-lg hover:shadow-primary-accent/40 hover:-translate-y-4 hover:scale-[1.04] hover:bg-gradient-to-br from-secondary to-gray-800
      `}
    >
      {banner && (
        <div className="flex h-[150px] justify-center items-center select-none">
          <img
            src={banner}
            alt={`Logo do projeto ${title}`}
            width={150}
            height={150}
            className="select-none"
            draggable={false}
            loading="lazy"
          />
        </div>
      )}
      <h2 className="text-white font-semibold text-2xl leading-relaxed text-center">{title}</h2>
      <p className="text-white text-xs desktop:text-sm indent-8 text-justify px-4">{text}</p>
    </div>
  );
}

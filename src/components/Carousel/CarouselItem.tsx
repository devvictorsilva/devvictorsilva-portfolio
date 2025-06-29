interface CarouselItemProps {
  icon?: React.ReactNode;
  title: string;
  text: string;
  isSelected?: boolean;
}

export default function CarouselItem({ icon, title, text, isSelected }: CarouselItemProps) {
  return (
    <div
      className={`
        reveal w-full h-full text-white flex flex-col gap-4
        pt-6 pb-5 desktop:pb-10 px-2 desktop:px-8 cursor-pointer 
        border transition-all duration-400 ease-in-out
        ${isSelected ? "radiant shadow-glow" : "grounded-radiants"}
      `}
    >
      <div className="flex flex-col desktop:flex-row items-center gap-4 mb-2">
        {icon && <div className="text-accent">{icon}</div>}
        <h2 className="text-white font-semibold text-center desktop:text-justify text-2xl leading-relaxed">{title}</h2>
      </div>
      <p className="text-white text-justify text-base px-4">{text}</p>
    </div>
  );
}

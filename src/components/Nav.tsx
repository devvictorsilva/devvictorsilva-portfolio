import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "contact", label: "Contato" },
  { id: "servicos", label: "Serviços" },
  { id: "trabalhos", label: "Trabalhos" },
];

export default function SideNav() {
  const sideNavRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(true);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const showNav = () => setVisible(true);
    const hideNav = () => !hovering && setVisible(false);

    const handleScroll = () => {
      showNav();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(hideNav, 1500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hovering]);

  useEffect(() => {
    const setActiveLink = (activeId: string) => {
      sections.forEach(({ id }) => {
        const link = document.getElementById(`link-${id}`);
        const span = link?.querySelector("span");
        if (!link || !span) return;

        if (id === activeId) {
          link.setAttribute("aria-current", "page");
          span.classList.remove("w-3", "h-3", "bg-gray-500");
          span.classList.add("w-5", "h-5", "bg-[#2F81F7]");
        } else {
          link.removeAttribute("aria-current");
          span.classList.remove("w-5", "h-5", "bg-[#2F81F7]");
          span.classList.add("w-3", "h-3", "bg-gray-500");
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((e) => e.isIntersecting);
        if (visibleSections.length === 0) return;

        visibleSections.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const topSection = visibleSections[0];
        setActiveLink(topSection.target.id);
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: [0, 0.5, 1],
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      ref={sideNavRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`fixed top-1/2 right-6 -translate-y-1/2 flex flex-col items-center gap-4
        bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg z-50
        transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 invisible'}`}
    >
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="relative flex items-center justify-center group"
          id={`link-${id}`}
          aria-current="false"
        >
          <span
            className="w-3 h-3 rounded-full bg-gray-500 transition-all duration-300 group-hover:bg-[#2F81F7]"
          />
          <span
            className="absolute right-full mr-3 px-2 py-1 bg-[#0D1117] text-white text-sm rounded opacity-0
              group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
          >
            {label}
          </span>
        </a>
      ))}
    </aside>
  );
}
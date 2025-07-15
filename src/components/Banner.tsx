import { useEffect, useRef } from "react";

export const Banner: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const leftElement = entry.target.querySelector(".fade-in-left");
            const rightElement = entry.target.querySelector(".fade-in-right");

            leftElement?.classList.add("fade-in-left");
            rightElement?.classList.add("fade-in-right");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center w-full justify-between relative h-[55dvh] md:h-[30dvh] lg:h-[70dvh] mt-20 md:mt-24 overflow-hidden"
    >
      <div className="hidden md:block absolute w-full bg-gradient-to-b z-10 md:bg-gradient-to-r from-[#fffffffb] from-50% lg:from-0% to-35%  to-transparent h-full"></div>

      <div className="max-w-6xl pt-8 md:pt-0 h-full mx-auto w-full">
        <div className="opacity-0 transition-all duration-1000 px-8 lg:px-0 md:h-full ease-out grid items-center z-10 fade-in-left absolute">
          <div className="grid gap-4">
            <h1 className="font-apple-garamond text-2xl lg:text-4xl">
              Pra viver bem, é bom ter com quem contar.
            </h1>
            <h3 className="text-base lg:text-xl font-inter leading-relaxed space-y-6 font-light">
              Com a gente, a vida acontece com mais cuidado.
            </h3>
            <div>
              <a
                href="#sobre-nos"
                className="shadow-md font-inter hover:shadow-lg px-8 py-2 rounded-lg transition-all duration-300 hover:opacity-95 text-white font-light text-base bg-[#1F3B2D]"
              >
                Sobre a FFH
              </a>
            </div>
          </div>
        </div>
        <div className="opacity-0 transition-all duration-1000 ease-out w-full absolute right-0 md:w-3/4 h-full fade-in-right">
          <div className="relative w-full h-full">
            <img
              className="hidden lg:block w-full h-full object-cover object-left"
              src="/images/sections/FFH-desktop.png"
              alt=""
            />
            <img
              className="lg:hidden block w-full h-full object-contain md:object-cover object-bottom md:object-center  pb-8"
              src="/images/sections/FFH-mobile.png"
              alt=""
            />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-transparent to-[#ffffff]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

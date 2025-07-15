import { useEffect, useRef } from "react";

export const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const title = entry.target.querySelector('.about-title');
          const paragraphs = entry.target.querySelectorAll('.about-paragraph');
          
          title?.classList.add('fade-in-left');
          
          paragraphs.forEach((paragraph, index) => {
            setTimeout(() => {
              paragraph.classList.add('fade-in-right');
            }, index * 400);
          });
        }
      });
    }, { threshold: 0.1 });

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
      id="sobre-nos"
      className="bg-[#F7F4EF] text-neutral-800 px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full text-center space-y-12">
        <h1 className="about-title opacity-0 transition-all duration-700 ease-out text-4xl md:text-5xl font-apple-garamond font-semibold tracking-wide">
          Sobre a FFH
        </h1>

        <div className="space-y-6 text-lg leading-relaxed font-light font-sans">
          <p className="about-paragraph opacity-0 translate-y-5 transition-all duration-700 ease-out">
            Somos a <strong>FFH – For Family Holding</strong>, uma holding que
            nasceu com o propósito de cuidar de pessoas em diferentes momentos
            da vida.
          </p>
          <p className="about-paragraph opacity-0 translate-y-5 transition-all duration-700 ease-out">
            Integramos negócios nas áreas da saúde, educação, desenvolvimento
            humano e seguros, sempre guiados por um mesmo princípio: promover
            bem-estar e impacto positivo.
          </p>
          <p className="about-paragraph opacity-0 translate-y-5 transition-all duration-700 ease-out">
            Acreditamos que, com empatia, integridade e responsabilidade, é
            possível transformar o cuidado em valor.
          </p>
        </div>
      </div>
    </section>
  );
};
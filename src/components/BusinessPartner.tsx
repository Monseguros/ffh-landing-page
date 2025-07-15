import type React from "react";
import { useEffect, useRef } from "react";
import type { Business } from "../types/business";

const businessData: Business[] | null = [
  {
    id: 1,
    logoUrl: "/images/business/evvolue_logo.png",
    nome: "evvolue",
    siteUrl: "https://evvolue.com.br/",
  },
  {
    id: 2,
    logoUrl: "/images/business/monseguros_logo.png",
    nome: "MonSeguros",
    siteUrl: "https://monseguros.com.br/",
  },
  {
    id: 3,
    logoUrl: "/images/business/benemed_logo.png",
    nome: "benemed",
    siteUrl: "https://benemedsaude.com.br/",
  },
  {
    id: 4,
    logoUrl: "/images/business/educare_logo.png",
    nome: "Educare",
    siteUrl: "https://eduprimebrasil.com.br/",
  },
];

export const BusinessPartner: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const textElements =
              entry.target.querySelectorAll(".business-text");
            const logoElements =
              entry.target.querySelectorAll(".business-logo");

            textElements.forEach((el) => el.classList.add("fade-in-left"));
            logoElements.forEach((el) => el.classList.add("fade-in-right"));
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
      className="bg-white w-full px-8 py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="business-text opacity-0  transition-all duration-700 ease-out text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-normal tracking-wide text-neutral-900">
            Empresas do Grupo
          </h1>
          <p className="max-w-2xl text-lg font-light text-neutral-600">
            Conheça as marcas que compõem o ecossistema FFH, atuando em áreas
            essenciais como saúde, seguros e bem-estar.
          </p>
        </div>

        <div className="business-logo opacity-0 translate-x-[20px] transition-all duration-700 ease-out grid grid-cols-2 sm:grid-cols-2 gap-8 items-center justify-center">
          {businessData.map((data) => (
            <a
              key={data.id}
              href={data.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center opacity-40  hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={data.logoUrl}
                alt={`Logo da empresa ${data.nome}`}
                className="max-h-30 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

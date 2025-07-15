import type React from "react";

export const Values: React.FC = () => {
  return (
    <section className="bg-[url(/images/sections/family.png)] bg-fixed bg-cover bg-center bg-no-repeat relative bg-blend-overlay bg-[#1f3b2d93] text-white min-h-[80vh] flex items-center justify-center px-6 py-16">
      <div className="relative z-10 max-w-6xl text-center space-y-12">
        <h1 className="text-4xl md:text-5xl font-apple-garamond font-semibold">
          Missão, Visão e Valores
        </h1>

        <div className="space-y-8 max-w-6xl  text-base md:text-lg font-sans">
          <div>
            <h2 className="text-2xl font-apple-garamond mb-2">Missão</h2>
            <p className="mx-auto">
              Cuidar de pessoas promovendo bem-estar em diferentes fases da
              vida, por meio de negócios comprometidos com impacto positivo e
              responsabilidade social.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-apple-garamond mb-2">Visão</h2>
            <p className="mx-auto ">
              Ser referência em soluções integradas de cuidado, contribuindo
              para uma sociedade mais humana e conectada.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-apple-garamond mb-4">Valores</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm md:text-base">
              <li>Empatia</li>
              <li>Integridade</li>
              <li>Proximidade</li>
              <li>Inovação de Propósito</li>
              <li>Sustentabilidade</li>
              <li>Responsabilidade com o outro</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

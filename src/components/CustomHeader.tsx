import React, { useEffect, useState } from "react";

export const CustomHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center p-8 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/30 "
          : "bg-gradient-to-b from-white to-transparent"
      }`}
    >
      <div className="flex justify-between max-w-6xl w-full mx-auto">
        <div>
          <img src="/images/logo/green.png" alt="" className="w-30" />
        </div>
        <div>
          {/* <a
          className="shadow-md hover:shadow-lg px-8 py-2 rounded-lg transition-all duration-300 hover:bg-green-500 text-white font-light text-base font-inter bg-green-950"
          href="https://portalparceiro.monseguros.com.br/sign-in"
          target="_blank"
        >
          Trabalhe conosco
        </a> */}
        </div>
      </div>
    </header>
  );
};

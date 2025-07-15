import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MailboxIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import type React from "react";

export const CustomFooter: React.FC = () => {
  return (
    <footer className="bg-[#1F3B2D] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-white/20 pb-10">
        {/* Coluna 1 - Identidade */}
        <div className="space-y-4">
          <img src="/images/logo/white.png" alt="" className="w-1/2" />
          {/* <h1 className="text-4xl font-apple-garamond font-semibold tracking-wide">
            FFH
          </h1> */}
          <p className="text-sm text-white/70">
            For Family Holding. Um ecossistema de cuidado para todas as fases
            da vida.
          </p>
        </div>

        {/* Coluna 2 - Contatos */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contatos</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href="https://web.whatsapp.com"
                target="_blank"
                className="flex w-fit items-center gap-2 hover:text-white/80 transition-colors"
              >
                <WhatsappLogoIcon size={20} weight="fill" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="flex w-fit items-center gap-2 hover:text-white/80 transition-colors"
              >
                <InstagramLogoIcon size={20} weight="fill" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="flex w-fit items-center gap-2 hover:text-white/80 transition-colors"
              >
                <LinkedinLogoIcon size={20} weight="fill" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@ffh.com.br"
                className="flex w-fit items-center gap-2 hover:text-white/80 transition-colors"
              >
                <MailboxIcon size={20} weight="fill" /> E-mail
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Rodapé */}
      <div className="mt-8 text-center text-xs text-white/60">
        <p>© {new Date().getFullYear()} FFH – For Family Holding.</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';

interface TopBannerProps {
  onClaimDiscount: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onClaimDiscount }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      aria-label="Aviso de plazas limitadas"
      className={`sticky top-0 z-40 bg-[#030712] border-b border-slate-900 text-center transition-all duration-300 ${
        isSticky ? 'py-2 px-3' : 'py-2.5 px-4'
      }`}
    >
      {isSticky ? (
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-2 sm:gap-2.5 text-center flex-wrap sm:flex-nowrap">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00a651] shrink-0 shadow-[0_0_8px_#00a651] animate-pulse" />
            <span className="text-[#00a651] font-semibold">Quedan 3 plazas disponibles hoy.</span>
          </span>
          <button
            onClick={onClaimDiscount}
            className="text-xs sm:text-sm font-semibold text-white underline underline-offset-4 hover:text-[#00a651] transition-colors cursor-pointer inline-flex items-center gap-1"
          >
            Reservar plaza →
          </button>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-1.5">
          <p className="text-xs sm:text-sm text-slate-100 leading-snug">
            <span className="inline-flex items-center gap-1.5 align-middle mr-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00a651] shrink-0 shadow-[0_0_8px_#00a651] animate-pulse" />
              <strong className="font-bold text-white">Límite por ciudad:</strong>
            </span>
            <span className="text-white">Para garantizar siempre los primeros puestos.</span>{' '}
            <span className="text-[#00a651] font-semibold">Quedan 3 plazas disponibles hoy.</span>
          </p>
          <button
            onClick={onClaimDiscount}
            className="text-xs sm:text-sm font-semibold text-white underline underline-offset-4 hover:text-[#00a651] transition-colors cursor-pointer inline-flex items-center gap-1"
          >
            Reservar plaza →
          </button>
        </div>
      )}
    </aside>
  );
};


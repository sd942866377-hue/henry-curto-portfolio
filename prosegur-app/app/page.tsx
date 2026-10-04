import CoverflowCarousel from "@/components/ui/coverflow-carousel";
import type { CoverflowCarouselItem } from "@/components/ui/coverflow-carousel";

const services: CoverflowCarouselItem[] = [
  {
    id: "vigilancia",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Videovigilancia con cámaras IP de alta resolución",
  },
  {
    id: "accesos",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
    alt: "Control de accesos biométrico en edificio corporativo",
  },
  {
    id: "alarmas",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
    alt: "Centro de monitoreo de alarmas 24 horas",
  },
  {
    id: "efectivo",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80",
    alt: "Transporte blindado de valores",
  },
  {
    id: "cyber",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    alt: "Centro de operaciones de ciberseguridad",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[var(--background)]/90 backdrop-blur border-b border-[var(--border)]">
        <span className="text-2xl font-black tracking-widest">
          PRO<span className="text-[var(--primary)]">SEGUR</span>
        </span>
        <div className="hidden md:flex gap-8 text-sm text-[var(--muted-foreground)]">
          <a href="#carousel" className="hover:text-white transition-colors">Soluciones</a>
          <a href="#" className="hover:text-white transition-colors">Tecnología</a>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </div>
        <a
          href="#carousel"
          className="bg-[var(--primary)] text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded hover:bg-red-700 transition-colors"
        >
          Demo
        </a>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-8 text-center">
        <span className="inline-block text-[var(--primary)] text-xs font-bold tracking-[4px] uppercase border border-[var(--primary)]/40 bg-[var(--primary)]/10 px-4 py-1.5 rounded mb-8">
          Tecnología de Seguridad Avanzada
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
          PROTEGEMOS LO QUE<br />
          <span className="text-[var(--primary)] drop-shadow-[0_0_40px_rgba(227,6,19,0.5)]">
            MÁS IMPORTA
          </span>
        </h1>
        <p className="text-[var(--muted-foreground)] text-lg max-w-xl mx-auto leading-relaxed">
          Soluciones integrales de seguridad con monitoreo 24/7, tecnología de vanguardia
          y respuesta inmediata para empresas en todo el mundo.
        </p>
      </section>

      {/* CAROUSEL */}
      <section id="carousel" className="py-16 px-4">
        <div className="text-center mb-12">
          <p className="text-[var(--primary)] text-xs font-bold tracking-[4px] uppercase mb-3">
            Nuestras Soluciones
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            SEGURIDAD TOTAL, SIN COMPROMISOS
          </h2>
        </div>

        <CoverflowCarousel
          items={services}
          loop
          autoplay
          autoplayDelay={3500}
          className="max-w-4xl mx-auto"
        />

        <p className="text-center text-[var(--muted-foreground)] text-xs mt-8">
          Arrastra o usa las flechas del teclado para navegar
        </p>
      </section>

      {/* STATS */}
      <section className="py-16 px-8 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "180+", l: "Países con presencia" },
            { n: "160K", l: "Empleados globales" },
            { n: "40+",  l: "Años de experiencia" },
            { n: "99%",  l: "Satisfacción del cliente" },
          ].map(({ n, l }) => (
            <div key={l}>
              <div className="text-4xl font-black text-[var(--primary)] tabular-nums">{n}</div>
              <div className="text-[var(--muted-foreground)] text-sm mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--primary)] py-20 px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(0,0,0,0.3) 20px,rgba(0,0,0,0.3) 21px)",
          }}
        />
        <h2 className="relative text-3xl md:text-5xl font-black tracking-tight mb-4">
          ¿LISTO PARA PROTEGER TU EMPRESA?
        </h2>
        <p className="relative text-white/70 mb-8">
          Habla con un experto hoy y recibe una evaluación gratuita.
        </p>
        <a
          href="#"
          className="relative inline-block bg-white text-[var(--primary)] font-black text-sm tracking-widest uppercase px-10 py-4 rounded hover:scale-105 transition-transform"
        >
          Solicitar Demo Gratuita
        </a>
      </section>

      <footer className="py-8 px-8 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
        <span className="text-xl font-black tracking-widest">
          PRO<span className="text-[var(--primary)]">SEGUR</span>
        </span>
        <span className="text-[var(--muted-foreground)] text-xs">
          © 2026 Prosegur · Madrid · Buenos Aires · São Paulo · CDMX
        </span>
      </footer>
    </main>
  );
}

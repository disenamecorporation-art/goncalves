import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import { 
  Search, 
  Menu,
  X,
  ShieldCheck, 
  Sparkles, 
  Hotel, 
  Utensils, 
  GlassWater, 
  Cake, 
  Users, 
  Music, 
  Car, 
  Heart, 
  Plane,
  Mail,
  Phone,
  ChevronRight,
  ChevronLeft,
  Gem,
  Crown,
  Star
} from "lucide-react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=2000",
  "https://i.postimg.cc/L5P9h3Jr/MG-2128.jpg"
];

const InputField = ({ label, name, type = "text", placeholder }: { label: string, name: string, type?: string, placeholder?: string }) => (
  <div className="space-y-3 group">
    <label className="text-[10px] uppercase tracking-[0.3em] text-dark/40 group-focus-within:text-gold transition-colors block font-bold">
      {label}
    </label>
    <input 
      name={name}
      type={type}
      placeholder={placeholder}
      required
      className="w-full bg-transparent border-b border-gold/20 py-4 font-serif text-xl focus:outline-none focus:border-gold transition-all duration-500 placeholder:text-dark/10"
    />
  </div>
);

const FloatingSparkle = ({ i, springScroll }: any) => {
  const y = useTransform(springScroll, [0, 1], [i * 100, -i * 100]);
  const z = useTransform(springScroll, [0, 1], [i * 50, -i * 50]);
  const opacity = useTransform(springScroll, [0, 0.5, 1], [0, 0.4, 0]);

  return (
    <motion.div
      style={{ y, z, opacity }}
      className="absolute text-gold/30 selection:bg-transparent"
      initial={{ 
        left: `${(i * 17) % 100}%`, 
        top: `${(i * 23) % 100}%` 
      }}
    >
      <Sparkles size={24 + i * 8} />
    </motion.div>
  );
};

const HeroDecoration = ({ springScroll }: any) => {
  const opacity = useTransform(springScroll, [0.3, 0.5], [0, 1]);
  const scaleX = useTransform(springScroll, [0.4, 0.6], [0, 1]);

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-4">
       <motion.span 
         style={{ opacity }}
         className="text-gold text-[10px] uppercase tracking-[0.8em] font-bold block"
       >
         El Vestido de tus Sueños
       </motion.span>
       <motion.div 
         style={{ scaleX }}
         className="w-24 h-px bg-gold mx-auto" 
       />
    </div>
  );
};

const ThreeDScrollSection = ({ containerRef, springScroll, rotateX, rotateY, zPosition, opacity, scale, navigateTo }: any) => {
  const sectionOpacity = useTransform(springScroll, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const sectionY = useTransform(springScroll, [0, 1], [30, -30]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[160vh] lg:h-[140vh] bg-white overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6 md:px-20">
        <div className="max-w-[1700px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Side A: Scrolling Text */}
          <div className="order-2 lg:order-1 relative flex flex-col justify-center text-center lg:text-left">
             <motion.div
               style={{ 
                 opacity: sectionOpacity,
                 y: sectionY
               }}
               className="space-y-4 lg:space-y-12"
             >
                <div className="space-y-1 lg:space-y-4">
                  <span className="text-gold text-[9px] lg:text-[12px] uppercase tracking-[0.6em] font-bold block">Excelencia Nupcial</span>
                  <h2 className="text-3xl md:text-6xl lg:text-8xl font-serif text-dark leading-[0.9] italic">
                    Planificación <br />
                    <span className="text-gold">Magistral</span>
                  </h2>
                </div>
                <div className="w-12 lg:w-24 h-[1px] bg-gold mx-auto lg:mx-0" />
                <p className="text-sm lg:text-2xl font-serif text-dark/70 italic leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Transformamos visiones en realidades etéreas. Con más de 40 años curando los eventos más prestigiosos del país.
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-6 text-gold group cursor-pointer" onClick={() => navigateTo('contact')}>
                   <span className="text-[9px] lg:text-[11px] uppercase tracking-[0.4em] font-bold border-b border-gold/30 pb-2 group-hover:pr-4 transition-all duration-500">Inicia tu proyecto</span>
                   <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform duration-500" />
                </div>
             </motion.div>
          </div>

          {/* Side B: 3D Image */}
          <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
            <motion.div
              style={{ 
                perspective: "1500px",
              }}
              className="relative w-full aspect-[4/5] lg:aspect-[3/4] max-w-[280px] md:max-w-[450px] lg:max-w-[550px]"
            >
              {/* Floating Petals/Sparkles for depth */}
              {[...Array(6)].map((_, i) => (
                <FloatingSparkle key={i} i={i} springScroll={springScroll} />
              ))}

              <motion.div
                style={{ 
                  rotateX,
                  rotateY,
                  z: zPosition,
                  opacity,
                  scale,
                  transformStyle: "preserve-3d"
                }}
                className="relative w-full h-full rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-gold-glow-lg border border-gold/10"
              >
                <img 
                  src="https://www.mivestidoblanco.com/wp-content/uploads/2022/08/vestidos-de-novia-corte-princesa.jpg" 
                  alt="Escultura nupcial"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gold/30 via-transparent to-transparent" />
              </motion.div>

              <HeroDecoration springScroll={springScroll} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Light decorative elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
    </section>
  );
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [view, setView] = useState('home');
  const [gallerySlide, setGallerySlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const rotateX = useTransform(springScroll, [0, 1], [45, -45]);
  const rotateY = useTransform(springScroll, [0, 1], [-30, 30]);
  const zPosition = useTransform(springScroll, [0, 0.5, 1], [-500, 0, -500]);
  const opacity = useTransform(springScroll, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(springScroll, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const GALLERY_PHOTOS = [
    {
      url: "https://i.postimg.cc/tJ6q7Nsm/20190902-211720.jpg",
      title: "Festín Imperial",
      desc: "Un buffet diseñado con estructuras doradas y detalles florales para una recepción inolvidable."
    },
    {
      url: "https://i.postimg.cc/7hzHbn5s/20200529-070038.jpg",
      title: "Arquitectura en Azúcar",
      desc: "Nuestras tortas de múltiples niveles son el centro de atención y el símbolo de la dulzura eterna."
    },
    {
      url: "https://i.postimg.cc/prjWyJmq/20201015-184042.jpg",
      title: "El Brillo de la Novia",
      desc: "Capturando la esencia de la elegancia en cada rincón del salón."
    },
    {
      url: "https://i.postimg.cc/L5P9h3Jr/MG-2128.jpg",
      title: "Escenario de Gala",
      desc: "Ambientación musical y técnica de primer nivel para una noche de celebración sin fin."
    },
    {
      url: "https://i.postimg.cc/BbFStBjV/Whats-App-Image-2026-04-14-at-14-19-35.jpg",
      title: "Bosque de Cristal",
      desc: "Diseño floral inmersivo que transporta a los invitados a un mundo de fantasía."
    },
    {
      url: "https://i.postimg.cc/8cvpsm73/Whats-App-Image-2026-04-14-at-15-00-22.jpg",
      title: "Catering de Alta Gama",
      desc: "Servicio impecable en espacios majestuosos, cuidando cada detalle de la experiencia gastronómica."
    },
    {
      url: "https://i.postimg.cc/rs4VzND7/Whats-App-Image-2026-04-14-at-15-00-24.jpg",
      title: "Preparación Real",
      desc: "Momentos de serenidad y belleza antes del 'sí, acepto' en suites de lujo."
    },
    {
      url: "https://i.postimg.cc/MHB6Xmck/Whats-App-Image-2026-04-14-at-15-50-01.jpg",
      title: "Diseño Vanguardista",
      desc: "Combinamos colores y texturas para crear ambientes únicos y memorables."
    },
    {
      url: "https://i.postimg.cc/3xq8n0qL/image.png",
      title: "Destellos de Amor",
      desc: "Cada detalle es una expresión de la belleza y la emoción que rodea el gran día."
    },
    {
      url: "https://i.postimg.cc/RhtSqL35/Whats-App-Image-2026-04-14-at-16-04-13.jpg",
      title: "Esculturas de Hielo",
      desc: "Acentos artísticos que elevan el nivel de sofisticación en la mesa de postres."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (view === 'home') {
        setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
      } else {
        setGallerySlide((prev) => (prev + 1) % GALLERY_PHOTOS.length);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [view]);

  const menuItems = ["INICIO", "GALERÍA", "CONTACTO"];

  const services = [
    {
      title: "Detalles que Hacen la Boda",
      items: [
        { name: "Protocolo", desc: "Organización impecable de la iglesia y el salón.", icon: ShieldCheck },
        { name: "Decoraciones", desc: "Diseños exclusivos y personalizados con alma.", icon: Sparkles },
        { name: "Espacios Premium", desc: "Salones históricos y hoteles boutique de lujo.", icon: Hotel },
        { name: "Catering & Bebidas", desc: "Banquetes sofisticados y mixología de autor.", icon: Utensils },
      ]
    },
    {
      title: "Estilo y Ambientación",
      items: [
        { name: "Mobiliario", desc: "Mesas de espejo, luces escénicas y cubertería de gala.", icon: GlassWater },
        { name: "Dulces", desc: "Tortas arquitectónicas y mesas de postres gourmet.", icon: Cake },
        { name: "Cortejo", desc: "Etiqueta impecable para novios y vestidos de alta costura.", icon: Users },
      ]
    },
    {
      title: "Experiencia Completa",
      items: [
        { name: "Entretenimiento", desc: "Espectáculos inmersivos, samba y música selecta.", icon: Music },
        { name: "Transporte", desc: "Limosinas clásicas y carrozas reales a caballo.", icon: Car },
        { name: "Novia Perfecta", desc: "Diseño de imagen, tiaras y maquillaje profesional.", icon: Heart },
        { name: "Luna de Miel", desc: "Destinos exóticos curados para el primer viaje.", icon: Plane },
      ]
    }
  ];

  const navigateTo = (newView: string) => {
    setView(newView);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleWhatsAppSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nombre = formData.get('nombre')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const fecha = formData.get('fecha')?.toString() || '';
    const ubicacion = formData.get('ubicacion')?.toString() || '';
    const mensaje = formData.get('mensaje')?.toString() || '';
    
    const text = `Hola Decio Goncalves, me gustaría solicitar información sobre sus servicios premium.\n\n*Nombre:* ${nombre}\n*Email:* ${email}\n*Fecha estimada:* ${fecha}\n*Ubicación:* ${ubicacion}\n*Mensaje:* ${mensaje}`;
    const encodedText = encodeURIComponent(text);
    window.location.href = `https://wa.me/584125994286?text=${encodedText}`;
  };

  return (
    <div className="min-h-screen bg-white selection:bg-gold/30">
      {/* --- PREMIUM HEADER --- */}
      <header className="fixed top-0 inset-x-0 z-[100] transition-all duration-500 bg-white/80 backdrop-blur-xl border-b border-gold/10">
        <nav className="max-w-[1800px] mx-auto px-8 h-28 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            <img 
              src="https://iili.io/BS041TP.png" 
              alt="Decio Goncalves Premium" 
              className="h-16 md:h-28 lg:h-32 w-auto object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </motion.div>

          <ul className="hidden xl:flex items-center space-x-12">
            {menuItems.map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <button 
                  onClick={() => {
                    if (item === "GALERÍA") navigateTo('gallery');
                    else if (item === "CONTACTO") navigateTo('contact');
                    else navigateTo('home');
                  }}
                  className={`relative group text-[11px] font-sans font-bold uppercase tracking-[0.4em] transition-colors duration-300 ${
                    (view === 'gallery' && item === "GALERÍA") || 
                    (view === 'contact' && item === "CONTACTO") ||
                    (view === 'home' && item === "INICIO")
                    ? 'text-gold' : 'text-dark hover:text-gold'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-2 left-0 h-[1px] bg-gold transition-all duration-500 ${
                    (view === 'gallery' && item === "GALERÍA") || 
                    (view === 'contact' && item === "CONTACTO") ||
                    (view === 'home' && item === "INICIO")
                    ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <motion.button whileHover={{ scale: 1.1 }} className="hidden md:block p-2 text-gold">
              <Search className="w-5 h-5 cursor-pointer" />
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.9 }} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 text-gold"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white border-b border-gold/10 overflow-hidden"
            >
              <ul className="px-8 py-12 space-y-8">
                {menuItems.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <button
                      onClick={() => {
                        if (item === "GALERÍA") navigateTo('gallery');
                        else if (item === "CONTACTO") navigateTo('contact');
                        else navigateTo('home');
                      }}
                      className={`text-2xl font-serif tracking-[0.2em] uppercase transition-colors ${
                        (view === 'gallery' && item === "GALERÍA") || 
                        (view === 'contact' && item === "CONTACTO") ||
                        (view === 'home' && item === "INICIO")
                        ? 'text-gold' : 'text-dark'
                      }`}
                    >
                      {item}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <main>
              {/* --- HERO CAROUSEL --- */}
              <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                  >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img 
                      src={HERO_IMAGES[currentSlide]} 
                      alt="Luxury Wedding" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="relative z-20 text-center px-6 max-w-6xl">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <span className="block text-white text-luxury text-sm mb-6 tracking-[0.5em] font-light">EST. 1981 • PRESTIGIO</span>
                    <h1 className="text-6xl md:text-9xl font-serif font-light text-white leading-[0.9] mb-8">
                      DECIO <br />
                      <span className="gold-gradient-text italic font-medium">GONCALVES</span>
                    </h1>
                    <div className="w-32 h-[1px] bg-gold/50 mx-auto mb-8" />
                    <p className="text-xl md:text-2xl font-serif text-white/90 italic tracking-wide max-w-2xl mx-auto">
                      "Donde el lujo se encuentra con la perfección. Planificamos sueños, supervisamos realidades."
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-16"
                  >
                    <button 
                      onClick={() => navigateTo('contact')}
                      className="shine-effect px-12 py-5 bg-gold text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-gold-dark transition-all duration-500 shadow-2xl"
                    >
                      Descubre la Experiencia
                    </button>
                  </motion.div>
                </div>

                {/* Simple controls */}
                <div className="absolute bottom-12 right-12 z-30 flex items-center space-x-4">
                  <button 
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
                    className="p-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)}
                    className="p-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
            </section>

            <ThreeDScrollSection 
              containerRef={containerRef}
              springScroll={springScroll}
              rotateX={rotateX}
              rotateY={rotateY}
              zPosition={zPosition}
              opacity={opacity}
              scale={scale}
              navigateTo={navigateTo}
            />

              {/* --- GOLDEN STATEMENT BANNER --- */}
              <section className="relative py-20 lg:py-32 overflow-hidden bg-cream">
                 <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                   {[...Array(20)].map((_, i) => (
                      <div key={i} className="absolute h-[1px] bg-gold" style={{ 
                        top: `${i * 10}%`, 
                        left: 0, 
                        width: '100%',
                        transform: 'rotate(-5deg)'
                      }} />
                   ))}
                 </div>

                <div className="max-w-7xl mx-auto px-8 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      <h2 className="text-4xl md:text-6xl font-serif text-gold-dark leading-tight mb-8">
                        Elegancia <span className="italic">sin Límites</span> para tu Gran Día.
                      </h2>
                      <div className="h-1 w-24 bg-gold mb-8" />
                      <p className="text-lg text-dark/70 font-sans leading-relaxed mb-12">
                        No solo organizamos bodas; creamos legados visuales. Desde la entrada triunfal en la iglesia hasta el eco del último baile, cada segundo está curado bajo la mirada experta de Decio Goncalves.
                      </p>
                      <div className="flex items-center space-x-8">
                         <div className="text-center">
                           <span className="block text-4xl font-serif text-gold mb-2">40+</span>
                           <span className="text-[10px] uppercase tracking-widest text-dark/50 font-bold">Años de Trayectoria</span>
                         </div>
                         <div className="h-12 w-[1px] bg-gold/20" />
                         <div className="text-center">
                           <span className="block text-4xl font-serif text-gold mb-2">100%</span>
                           <span className="text-[10px] uppercase tracking-widest text-dark/50 font-bold">Personalizable</span>
                         </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="relative"
                    >
                      <div className="absolute -inset-4 border border-gold/30 rounded-2xl" />
                      <img 
                        src="https://i.postimg.cc/BbFStBjV/Whats-App-Image-2026-04-14-at-14-19-35.jpg" 
                        alt="Detail" 
                        className="rounded-xl shadow-2xl transition-all duration-1000"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* --- SERVICES GRID --- */}
              <section className="py-32 px-8 bg-white">
                <div className="max-w-[1700px] mx-auto">
                  <div className="text-center mb-24">
                     <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-gold text-[12px] uppercase tracking-[0.5em] font-bold"
                     >
                       Nuestra Expertise
                     </motion.span>
                     <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-5xl md:text-7xl font-serif text-dark mt-6 italic"
                     >
                       Arte y Ejecución
                     </motion.h2>
                  </div>

                  <div className="space-y-32">
                    {services.map((section, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex items-center space-x-8 mb-16">
                           <span className="text-gold font-serif text-3xl">0{sIdx + 1}</span>
                           <h3 className="text-2xl font-sans font-medium uppercase tracking-[0.2em] text-gold-dark">{section.title}</h3>
                           <div className="flex-grow h-[1px] bg-gold/10" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                          {section.items.map((item, iIdx) => (
                            <motion.div 
                              key={iIdx}
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: iIdx * 0.1, duration: 0.8 }}
                              whileHover={{ y: -15 }}
                              className="group relative p-10 bg-cream/30 hover:bg-white border border-transparent hover:border-gold/20 transition-all duration-500 rounded-2xl"
                            >
                               <div className="p-4 bg-gold/5 rounded-full inline-block mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500 text-gold text-gold">
                                <item.icon className="w-8 h-8" />
                               </div>
                              <h4 className="text-xl font-serif font-bold text-dark mb-4 group-hover:text-gold transition-colors duration-500">
                                {item.name}
                              </h4>
                              <p className="text-dark/60 font-sans text-sm leading-relaxed">
                                {item.desc}
                               </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* --- NEW LUXE CTA BANNER --- */}
              <section className="py-24 px-8 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto">
                   <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative gold-gradient-bg p-[2px] rounded-[50px] overflow-hidden group shadow-2xl"
                   >
                      <div className="bg-white rounded-[48px] py-16 px-12 flex flex-col items-center text-center relative overflow-hidden">
                        {/* 3D-Like Floating Icons */}
                        <motion.div 
                          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-10 left-10 md:left-20 text-gold opacity-20 hidden md:block"
                        >
                          <Sparkles className="w-16 h-16 drop-shadow-[0_15px_15px_rgba(177,150,95,0.4)]" />
                        </motion.div>
                        <motion.div 
                          animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute bottom-10 right-10 md:right-20 text-gold opacity-20 hidden md:block"
                        >
                          <Heart className="w-16 h-16 drop-shadow-[0_15px_15px_rgba(177,150,95,0.4)]" />
                        </motion.div>
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                          transition={{ duration: 6, repeat: Infinity }}
                          className="absolute -bottom-20 -left-20 text-gold hidden md:block"
                        >
                          <Sparkles className="w-48 h-48 drop-shadow-3xl" />
                        </motion.div>

                        <div className="relative z-10">
                           <span className="text-gold text-[10px] uppercase tracking-[0.6em] font-bold block mb-6">Tu momento es ahora</span>
                           <h2 className="text-4xl md:text-7xl font-serif text-dark leading-tight italic mb-10">
                             Hagamos que tu visión <br /> <span className="text-gold">cobre vida</span>
                           </h2>
                           <div className="w-20 h-[1px] bg-gold/30 mx-auto mb-12" />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateTo('contact')}
                className="bg-dark text-white text-[12px] font-bold uppercase tracking-[0.4em] px-16 py-7 rounded-full shadow-2xl hover:bg-gold transition-all duration-700"
              >
                              Contáctanos ahora
                           </motion.button>
                        </div>
                      </div>
                   </motion.div>
                </div>
              </section>

              {/* --- LA PROMESA BOLD BANNER --- */}
              <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                 <img 
                  src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=2000" 
                  alt="Gold Wedding"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px] opacity-20"
                  referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent" />

                 <div className="relative z-10 max-w-5xl mx-auto text-center px-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="gold-gradient-bg p-[1px] rounded-[40px] shadow-2xl overflow-hidden"
                    >
                      <div className="bg-white rounded-[39px] px-12 py-20 md:px-24 md:py-32">
                         <Sparkles className="w-12 h-12 text-gold mx-auto mb-10" />
                         <h2 className="text-4xl md:text-6xl font-serif font-medium text-dark leading-tight mb-10">
                          "Desde la entrada a la iglesia hasta el eco del último baile."
                         </h2>
                         <div className="w-24 h-[1px] bg-gold mx-auto mb-10" />
                         <p className="text-xl text-dark/60 font-serif italic tracking-wide max-w-2xl mx-auto">
                          Disfruta de una experiencia relajada y sin stress, con la garantía de supervisión constante de cada detalle. Tu felicidad es nuestra obra maestra.
                         </p>
                      </div>
                    </motion.div>
                 </div>
              </section>
            </main>
          </motion.div>
        ) : view === 'gallery' ? (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="pt-28 min-h-screen bg-cream"
          >
            <section className="max-w-[1800px] mx-auto px-8 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative h-[600px] md:h-[800px] overflow-hidden rounded-[60px] shadow-3xl bg-dark">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={gallerySlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0"
                    >
                       <img 
                        src={GALLERY_PHOTOS[gallerySlide].url} 
                        alt="Gallery" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="absolute bottom-16 left-16 right-16 z-10">
                    <motion.div
                      key={gallerySlide}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <h2 className="text-4xl md:text-6xl font-serif text-white italic">{GALLERY_PHOTOS[gallerySlide].title}</h2>
                      <p className="text-lg text-white/70 font-serif max-w-md">{GALLERY_PHOTOS[gallerySlide].desc}</p>
                    </motion.div>
                  </div>

                  {/* Carousel Nav */}
                  <div className="absolute bottom-16 right-16 flex space-x-4 z-20">
                    <button 
                      onClick={() => setGallerySlide((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)}
                      className="p-4 border border-white/20 rounded-full text-white hover:bg-gold transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={() => setGallerySlide((prev) => (prev + 1) % GALLERY_PHOTOS.length)}
                      className="p-4 border border-white/20 rounded-full text-white hover:bg-gold transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="space-y-12 lg:px-12">
                   <div>
                     <span className="text-gold text-[12px] uppercase tracking-[0.5em] font-bold block mb-6">Exclusividad Visual</span>
                     <h2 className="text-5xl md:text-8xl font-serif text-dark leading-[0.9] mb-10">El Arte de <br /><span className="text-gold italic">Celebrar</span></h2>
                     <div className="w-24 h-[1px] bg-gold mb-10" />
                     <p className="text-xl text-dark/70 font-sans leading-relaxed">
                       Bienvenido a nuestra curaduría de bodas reales. En esta pestaña aparte, exploramos los momentos más íntimos y majestuosos que hemos tenido el honor de planificar. Cada fotografía es un testimonio de nuestra promesa: **perfección absoluta**.
                     </p>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-8 ring-1 ring-gold/10 p-10 rounded-[40px] bg-white shadow-xl">
                      <div className="space-y-2">
                        <span className="text-3xl font-serif text-gold">1.2k+</span>
                        <p className="text-[10px] uppercase tracking-widest text-dark/50 font-bold">Bodas Realizadas</p>
                      </div>
                      <div className="space-y-2">
                        <span className="text-3xl font-serif text-gold">85%</span>
                        <p className="text-[10px] uppercase tracking-widest text-dark/50 font-bold">Clientes Internacionales</p>
                      </div>
                   </div>

                   <button 
                    onClick={() => navigateTo('home')}
                    className="flex items-center space-x-4 text-dark hover:text-gold transition-colors font-sans font-bold uppercase tracking-[0.2em] text-[11px]"
                   >
                     <span>Volver al Inicio</span>
                     <ChevronRight className="w-4 h-4" />
                   </button>
                </div>
              </div>

              {/* Grid de miniaturas abajo */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-6">
                 {GALLERY_PHOTOS.map((photo, idx) => (
                   <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setGallerySlide(idx)}
                    className={`relative cursor-pointer h-40 overflow-hidden rounded-3xl border-2 transition-all duration-500 ${gallerySlide === idx ? 'border-gold' : 'border-transparent'}`}
                   >
                     <img src={photo.url} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className={`absolute inset-0 bg-gold/20 transition-opacity ${gallerySlide === idx ? 'opacity-100' : 'opacity-0'}`} />
                   </motion.div>
                 ))}
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="contact"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="pt-28 min-h-screen bg-white"
          >
            <section className="max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row gap-24 items-start">
               {/* Left Side: Info */}
               <div className="lg:w-1/3 space-y-12">
                  <header>
                    <span className="text-gold text-[12px] uppercase tracking-[0.5em] font-bold block mb-6">Comencemos el Viaje</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-dark leading-tight italic">Tu Sueño, <br /><span className="text-gold">Nuestra Firma</span></h2>
                  </header>
                  
                  <div className="space-y-8">
                     <div className="flex items-start space-x-6">
                        <div className="p-4 bg-gold/5 rounded-full text-gold"><Mail className="w-6 h-6" /></div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-dark/40 font-bold mb-1">Escríbenos</p>
                          <p className="font-serif text-lg text-dark">deciodeascensao81@gmail.com</p>
                        </div>
                     </div>
                     <div className="flex items-start space-x-6">
                        <div className="p-4 bg-gold/5 rounded-full text-gold"><Phone className="w-6 h-6" /></div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-dark/40 font-bold mb-1">Llámanos</p>
                          <p className="font-serif text-lg text-dark">0412 599 4286</p>
                          <p className="font-serif text-lg text-dark">0414 900 0309</p>
                        </div>
                     </div>
                  </div>

                  <div className="p-10 bg-cream/50 rounded-[40px] border border-gold/10">
                     <p className="text-dark/60 font-serif italic text-lg leading-relaxed">
                       "La planificación de una boda es una coreografía de emociones. Permítenos ser tus directores de orquesta."
                     </p>
                  </div>
               </div>

               {/* Right Side: Luxurious Form */}
               <div className="lg:w-2/3 w-full bg-white relative">
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
                  <div className="relative z-10 glass-gold p-12 md:p-20 rounded-[60px] shadow-3xl ring-1 ring-gold/10">
                     <form className="space-y-12" onSubmit={handleWhatsAppSend}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                           <InputField name="nombre" label="Nombre Completo" placeholder="Escribe tu nombre..." />
                           <InputField name="email" label="Dirección de Correo" type="email" placeholder="example@luxury.com" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                           <InputField name="fecha" label="Fecha del Evento" placeholder="DD / MM / AA" />
                           <InputField name="ubicacion" label="Ubicación Sugerida" placeholder="Caracas, Madrid, Roma..." />
                        </div>
                        <div className="space-y-3 group">
                           <label className="text-[10px] uppercase tracking-[0.3em] text-dark/40 group-focus-within:text-gold transition-colors block font-bold">
                             Mensaje Personal
                           </label>
                           <textarea 
                             name="mensaje"
                             rows={4}
                             required
                             placeholder="Cuéntanos tu visión..."
                             className="w-full bg-transparent border-b border-gold/20 py-4 font-serif text-xl focus:outline-none focus:border-gold transition-all duration-500 placeholder:text-dark/10 resize-none"
                           />
                        </div>
                        
                        <div className="pt-8">
                           <button type="submit" className="shine-effect w-full py-6 bg-gold text-white text-xs font-bold uppercase tracking-[0.5em] rounded-full shadow-gold-glow-lg transition-all duration-700 hover:scale-[1.02] active:scale-95">
                             Enviar Solicitud vía WhatsApp
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FOOTER --- */}
      <footer className="pt-32 pb-16 bg-white border-t border-gold/10 px-8 lg:px-24">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-24">
            <div className="lg:col-span-2">
              <img 
                src="https://iili.io/BS041TP.png" 
                alt="Logo Footer Decio" 
                className="h-28 md:h-32 w-auto mb-10 object-contain"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-3xl font-serif text-dark mb-6">Creamos experiencias inolvidables.</h3>
              <p className="text-dark/40 font-sans text-sm max-w-md">Estableciendo el estándar de oro en la planificación de eventos de lujo desde 1981 en todo el territorio nacional e internacional.</p>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Contacto Privado</h4>
              <div className="space-y-6">
                 <a href="mailto:deciodeascensao81@gmail.com" className="group flex items-center space-x-4 text-dark hover:text-gold transition-colors duration-300">
                   <div className="p-3 bg-gold/5 rounded-full group-hover:bg-gold group-hover:text-white transition-colors duration-500"><Mail className="w-5 h-5" /></div>
                   <span className="text-sm font-sans tracking-wide">deciodeascensao81@gmail.com</span>
                 </a>
                 <div className="group flex items-center space-x-4 text-dark">
                   <div className="p-3 bg-gold/5 rounded-full"><Phone className="w-5 h-5" /></div>
                   <div className="flex flex-col">
                     <span className="text-sm font-sans tracking-wide">0412 599 4286</span>
                     <span className="text-sm font-sans tracking-wide">0414 900 0309</span>
                   </div>
                 </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Enlaces</h4>
              <ul className="space-y-4">
                 {["Protocolo", "Decoración", "Servicios", "Inspiración"].map((item) => (
                   <li key={item}><a href="#" className="text-sm font-sans text-dark/70 hover:text-gold transition-colors duration-300">{item}</a></li>
                 ))}
              </ul>
            </div>
          </div>

          <div className="pt-16 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 text-center md:text-left">
            <p className="text-[10px] text-gold uppercase tracking-[0.3em] font-bold">
              &copy; 2024 • DECIO GONCALVES • <a href="https://instagram.com/legaint.ve" target="_blank" rel="noopener noreferrer" className="hover:underline">PAGINA WEB DESARROLLADA Y DISEÑADA POR LEGAINT CORPORATION</a>
            </p>
            <div className="flex space-x-8 text-[10px] text-dark/40 uppercase tracking-widest font-bold">
               <a href="#" className="hover:text-gold transition-colors duration-500">Legal</a>
               <a href="#" className="hover:text-gold transition-colors duration-500">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}



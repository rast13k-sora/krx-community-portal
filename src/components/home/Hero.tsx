
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroImages = [
  "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620064916958-605375619af8?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1920&auto=format&fit=crop"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    setIsLoaded(true);

    // Rotate hero images every 8 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Hero background images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={image}
            alt="3D Модели"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
      ))}

      {/* Hero content */}
      <div className="container relative h-full flex flex-col justify-center">
        <div className="max-w-2xl space-y-4 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white">
            Сообщество 3D-моделлеров России
          </h1>
          <p className="text-lg text-white/90">
            Публикуйте свои работы, изучайте гайды и курсы, находите вакансии и общайтесь с единомышленниками.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link to="/register">Присоединиться</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur hover:bg-white/20">
              <Link to="/gallery">Смотреть работы</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentImageIndex 
                ? "bg-primary w-6" 
                : "bg-white/60 hover:bg-white"
            )}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

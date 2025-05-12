
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard, { ProjectProps } from "./ProjectCard";

interface FeaturedProjectsProps {
  title: string;
  projects: ProjectProps[];
}

const FeaturedProjects = ({ title, projects }: FeaturedProjectsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" 
        ? -current.offsetWidth / 2 
        : current.offsetWidth / 2;
      
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-montserrat font-semibold">{title}</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Прокрутить влево</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Прокрутить вправо</span>
          </Button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent snap-x"
        style={{ scrollbarWidth: 'thin' }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            className="min-w-[280px] snap-start"
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;

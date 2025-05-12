
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageSquare, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface ProjectProps {
  id: string;
  title: string;
  image: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  likes: number;
  comments: number;
  views: number;
  className?: string;
}

const ProjectCard = ({
  id,
  title,
  image,
  author,
  likes,
  comments,
  views,
  className,
}: ProjectProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  const avatarFallback = author.name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <Card 
      className={cn("group overflow-hidden border-0 rounded-lg shadow-sm transition-all hover:shadow-md", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/projects/${id}`}>
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className={cn(
              "h-full w-full object-cover transition-transform duration-300",
              hovered && "scale-105"
            )}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center text-white">
            <h3 className="font-montserrat font-medium text-sm line-clamp-1">
              {title}
            </h3>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleLike}
                className="flex items-center gap-1"
              >
                <Heart 
                  className={cn(
                    "h-4 w-4", 
                    isLiked ? "fill-red-500 text-red-500" : "fill-none"
                  )} 
                />
                <span className="text-xs">{isLiked ? likes + 1 : likes}</span>
              </button>
              
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span className="text-xs">{comments}</span>
              </div>
              
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span className="text-xs">{views}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      
      <CardContent className="p-3">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="bg-primary/10 text-primary text-xs">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <Link 
            to={`/profile/${author.id}`}
            className="text-xs font-medium hover:text-primary transition-colors"
          >
            {author.name}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

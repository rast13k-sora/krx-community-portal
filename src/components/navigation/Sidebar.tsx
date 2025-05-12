
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import {
  Paintbrush,
  Lightbulb,
  BookOpen,
  Briefcase,
  Users,
  Trophy,
  Heart,
  Clock,
  Tag
} from "lucide-react";

const categories = [
  { href: "/gallery", icon: "Paintbrush", label: "Галерея работ" },
  { href: "/guides", icon: "Lightbulb", label: "Гайды" },
  { href: "/courses", icon: "BookOpen", label: "Курсы" },
  { href: "/jobs", icon: "Briefcase", label: "Вакансии" },
  { href: "/community", icon: "Users", label: "Сообщество" },
  { href: "/challenges", icon: "Trophy", label: "Челленджи" },
]

const tags = [
  "3D-модели",
  "Анимация",
  "Персонажи",
  "Окружение",
  "Концепт-арт",
  "Рендеринг",
  "Риггинг",
  "Текстурирование"
];

const Sidebar = () => {
  return (
    <div className="sticky top-[73px] w-full md:w-64 h-[calc(100vh-73px)] flex-shrink-0 overflow-y-auto border-r bg-sidebar-background py-4 px-3 md:block">
      <nav className="space-y-6">
        <div>
          <h3 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Категории
          </h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <Link
                key={category.href}
                to={category.href}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Icon name={category.icon} className="h-5 w-5" />
                {category.label}
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Коллекции
          </h3>
          <div className="space-y-1">
            <Link
              to="/favorites"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Heart className="h-5 w-5" />
              Избранное
            </Link>
            <Link
              to="/history"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Clock className="h-5 w-5" />
              История просмотров
            </Link>
          </div>
        </div>
        
        <div>
          <h3 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Популярные теги
          </h3>
          <div className="flex flex-wrap gap-2 px-3 py-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                to={`/tags/${tag}`}
                className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

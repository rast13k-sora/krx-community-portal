
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface CategoryListProps {
  title: string;
  categories: Category[];
  className?: string;
}

const CategoryList = ({ title, categories, className }: CategoryListProps) => {
  return (
    <section className={cn("py-6", className)}>
      <h2 className="text-xl font-montserrat font-semibold mb-4">{title}</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="group flex items-center justify-between rounded-lg border bg-card p-3 text-card-foreground shadow-sm transition-colors hover:bg-primary/5"
          >
            <span className="font-medium group-hover:text-primary transition-colors">
              {category.name}
            </span>
            <span className="text-xs text-muted-foreground">
              {category.count}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;

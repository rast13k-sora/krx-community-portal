
import { Link } from "react-router-dom";
import { Mail, GitHub, Twitter, Instagram } from "lucide-react";
import Logo from "../ui/logo";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-8">
      <div className="container flex flex-col items-center gap-4 md:gap-6">
        <div className="flex flex-col items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="font-montserrat font-bold text-lg">KRX Community</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground max-w-md">
            Сообщество 3D-моделлеров России. Публикуйте работы, делитесь знаниями, находите заказы и единомышленников.
          </p>
        </div>
        
        <div className="flex gap-6 text-muted-foreground">
          <Link to="#" className="hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Почта</span>
          </Link>
          <Link to="#" className="hover:text-primary transition-colors">
            <GitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link to="#" className="hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link to="#" className="hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            О проекте
          </Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Условия использования
          </Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Конфиденциальность
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Контакты
          </Link>
        </div>
        
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} KRX Community. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

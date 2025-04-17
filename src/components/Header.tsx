
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2" onClick={() => navigate("/")} role="button">
          <Globe className="h-6 w-6" />
          <h1 className="text-xl font-bold cursor-pointer">Атлас финно-угорских народов</h1>
        </div>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Десктопное меню */}
        <div className="hidden md:flex gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
          >
            Главная
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => navigate("/timeline")}
          >
            Лента времени
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => navigate("/about")}
          >
            О проекте
          </Button>
        </div>
      </div>

      {/* Мобильное меню - выпадающее */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-primary z-50 shadow-lg">
          <div className="container mx-auto py-4 flex flex-col gap-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start" 
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
            >
              Главная
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start" 
              onClick={() => {
                navigate("/timeline");
                setIsMenuOpen(false);
              }}
            >
              Лента времени
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start" 
              onClick={() => {
                navigate("/about");
                setIsMenuOpen(false);
              }}
            >
              О проекте
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import NationCard from "@/components/NationCard";
import { finnoUgricNations } from "@/lib/data/finno-ugric-data";
import { Globe, Clock, Info } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Баннер */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl font-bold mb-4">Интерактивный атлас финно-угорских народов</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Исследуйте богатую культуру, историю и традиции финно-угорских народов 
              через интерактивный атлас с описаниями, картами расселения и мультимедийными материалами.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate("/timeline")}
                className="gap-2"
              >
                <Clock className="h-5 w-5" />
                Показать ленту времени
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => navigate("/about")}
                className="gap-2"
              >
                <Info className="h-5 w-5" />
                О проекте
              </Button>
            </div>
          </div>
        </section>

        {/* Карточки народов */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Финно-угорские народы</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {finnoUgricNations.map((nation) => (
                <NationCard key={nation.id} nation={nation} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Интерактивный атлас финно-угорских народов</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

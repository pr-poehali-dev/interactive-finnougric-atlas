
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { finnoUgricNations } from "@/lib/data/finno-ugric-data";
import Header from "@/components/Header";
import NationMap from "@/components/NationMap";
import MediaGallery from "@/components/MediaGallery";
import { ArrowLeft, Clock, Users, Globe2, Languages } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const NationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const nation = finnoUgricNations.find(nation => nation.id === id);
  
  if (!nation) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center flex-col gap-4">
          <h1 className="text-2xl font-bold">Народ не найден</h1>
          <Button onClick={() => navigate("/")}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Назад
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{nation.name}</h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Численность</p>
                    <p className="font-medium">{nation.population}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Globe2 className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Расположение</p>
                    <p className="font-medium">{nation.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Languages className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Язык</p>
                    <p className="font-medium">{nation.language}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed">{nation.description}</p>
            </div>
            
            <Separator />
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">Исторические события</h2>
              </div>
              
              <div className="space-y-4">
                {nation.timeline.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-primary/10 px-3 py-1 rounded-md text-primary font-medium whitespace-nowrap">
                      {event.year} г.
                    </div>
                    <p>{event.event}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Медиагалерея</h2>
              <MediaGallery 
                images={nation.media.images}
                audio={nation.media.audio}
                video={nation.media.video}
                nationName={nation.name}
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Территория расселения</h2>
              <NationMap 
                coordinates={nation.settlement.coordinates}
                territory={nation.settlement.territory}
                nationName={nation.name}
              />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Интерактивный атлас финно-угорских народов</p>
        </div>
      </footer>
    </div>
  );
};

export default NationDetail;

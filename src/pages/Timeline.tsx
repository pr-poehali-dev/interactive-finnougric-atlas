
import { useState } from "react";
import Header from "@/components/Header";
import TimelineEvent from "@/components/TimelineEvent";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { timelineEvents } from "@/lib/data/finno-ugric-data";
import { Clock, FilterX } from "lucide-react";

const Timeline = () => {
  const [yearRange, setYearRange] = useState<[number, number]>([400, 2000]);
  const [filteredNations, setFilteredNations] = useState<string[]>([]);
  
  const allNations = Array.from(
    new Set(timelineEvents.flatMap(event => event.nations))
  );
  
  const filteredEvents = timelineEvents.filter(event => {
    // Фильтр по годам
    const isInYearRange = event.year >= yearRange[0] && event.year <= yearRange[1];
    
    // Фильтр по народам
    const isNationSelected = filteredNations.length === 0 || 
      event.nations.some(nation => filteredNations.includes(nation));
    
    return isInYearRange && isNationSelected;
  }).sort((a, b) => a.year - b.year);
  
  const toggleNationFilter = (nation: string) => {
    if (filteredNations.includes(nation)) {
      setFilteredNations(filteredNations.filter(n => n !== nation));
    } else {
      setFilteredNations([...filteredNations, nation]);
    }
  };
  
  const resetFilters = () => {
    setYearRange([400, 2000]);
    setFilteredNations([]);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Лента времени расселения финно-угорских народов</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Фильтры</h2>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Период (годы)</h3>
                <div className="px-2">
                  <Slider 
                    value={yearRange} 
                    min={400} 
                    max={2000} 
                    step={10}
                    onValueChange={(value) => setYearRange(value as [number, number])}
                  />
                  <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                    <span>{yearRange[0]} г.</span>
                    <span>{yearRange[1]} г.</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Народы</h3>
                <div className="space-y-2">
                  {allNations.map((nation) => (
                    <Button
                      key={nation}
                      variant={filteredNations.includes(nation) ? "default" : "outline"}
                      size="sm"
                      className="mr-2 mb-2"
                      onClick={() => toggleNationFilter(nation)}
                    >
                      {nation}
                    </Button>
                  ))}
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                className="gap-2" 
                onClick={resetFilters}
              >
                <FilterX className="h-4 w-4" />
                Сбросить фильтры
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            {filteredEvents.length > 0 ? (
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted z-0"></div>
                
                {filteredEvents.map((event, index) => (
                  <TimelineEvent 
                    key={`${event.year}-${index}`}
                    year={event.year}
                    event={event.event}
                    nations={event.nations}
                    isLeft={index % 2 === 0}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/20 rounded-lg">
                <p className="text-muted-foreground">Нет событий, соответствующих выбранным фильтрам</p>
              </div>
            )}
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

export default Timeline;

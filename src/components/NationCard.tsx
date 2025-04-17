
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FinnoUgricNation } from "@/lib/data/finno-ugric-data";

interface NationCardProps {
  nation: FinnoUgricNation;
}

const NationCard = ({ nation }: NationCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{nation.name}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="h-4 w-4" /> {nation.location}
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          <Users className="h-4 w-4" /> {nation.population}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video rounded-md overflow-hidden">
          <img 
            src={nation.media.images.landscape} 
            alt={`Территория проживания ${nation.name}`} 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm line-clamp-3">{nation.description}</p>
        <Button 
          className="w-full"
          onClick={() => navigate(`/nation/${nation.id}`)}
        >
          <Info className="mr-2 h-4 w-4" /> Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};

export default NationCard;

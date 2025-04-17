
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

interface NationMapProps {
  coordinates: [number, number];
  territory: string;
  nationName: string;
}

const NationMap = ({ coordinates, territory, nationName }: NationMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Здесь будет инициализация карты
    // В реальном проекте нужно использовать библиотеку для карт, например Leaflet или Google Maps
    
    // Пример заглушки:
    if (mapRef.current) {
      const mapContainer = mapRef.current;
      mapContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full">
          <div class="text-primary text-lg font-semibold">Карта расселения: ${nationName}</div>
          <div class="text-muted-foreground">Координаты: ${coordinates[0]}, ${coordinates[1]}</div>
          <div class="text-muted-foreground">Территория: ${territory}</div>
          <div class="mt-4 text-sm text-center text-muted-foreground">
            В реальном проекте здесь будет интерактивная карта с выделенной территорией проживания
          </div>
        </div>
      `;
    }
  }, [coordinates, territory, nationName]);

  return (
    <Card className="overflow-hidden">
      <div ref={mapRef} className="h-[300px] w-full bg-muted/20 flex items-center justify-center">
        Загрузка карты...
      </div>
    </Card>
  );
};

export default NationMap;

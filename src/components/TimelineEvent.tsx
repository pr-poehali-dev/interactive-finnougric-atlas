
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineEventProps {
  year: number;
  event: string;
  nations: string[];
  isLeft?: boolean;
}

const TimelineEvent = ({ year, event, nations, isLeft = false }: TimelineEventProps) => {
  return (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} w-full mb-8 relative`}>
      <div className={`absolute z-10 top-5 ${isLeft ? 'right-[calc(50%-10px)]' : 'left-[calc(50%-10px)]'} h-4 w-4 rounded-full bg-primary`} />
      <div className={`w-[45%] ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <Card className={`border-l-4 ${isLeft ? 'border-l-primary' : 'border-r-primary border-r-4'}`}>
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between items-center">
              <span className="text-lg">{year} г.</span>
              <div className="flex flex-wrap gap-1 justify-end">
                {nations.map((nation, index) => (
                  <Badge key={index} variant="outline">{nation}</Badge>
                ))}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{event}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TimelineEvent;

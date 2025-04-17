
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play, Volume2 } from "lucide-react";

interface MediaGalleryProps {
  images: {
    costume: string;
    people: string;
    landscape: string;
  };
  audio?: string;
  video?: string;
  nationName: string;
}

const MediaGallery = ({ images, audio, video, nationName }: MediaGalleryProps) => {
  return (
    <Tabs defaultValue="images" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="images">Изображения</TabsTrigger>
        <TabsTrigger value="audio" disabled={!audio}>Аудио</TabsTrigger>
        <TabsTrigger value="video" disabled={!video}>Видео</TabsTrigger>
      </TabsList>
      
      <TabsContent value="images">
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <AspectRatio ratio={3/4} className="bg-muted rounded-md overflow-hidden">
                  <img 
                    src={images.costume} 
                    alt={`Национальный костюм ${nationName}`} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-sm text-center text-muted-foreground">Национальный костюм</p>
              </div>
              
              <div className="space-y-2">
                <AspectRatio ratio={4/3} className="bg-muted rounded-md overflow-hidden">
                  <img 
                    src={images.people} 
                    alt={`Представители народа ${nationName}`} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-sm text-center text-muted-foreground">Представители народа</p>
              </div>
              
              <div className="space-y-2">
                <AspectRatio ratio={16/9} className="bg-muted rounded-md overflow-hidden">
                  <img 
                    src={images.landscape} 
                    alt={`Ландшафт территории проживания ${nationName}`} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-sm text-center text-muted-foreground">Ландшафт местности</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="audio">
        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
            {audio ? (
              <>
                <Volume2 className="h-12 w-12 text-primary" />
                <div className="text-center">
                  <p className="font-medium">Традиционная музыка народа {nationName}</p>
                  <p className="text-sm text-muted-foreground mt-1">Фольклорное аудио</p>
                </div>
                <audio controls className="w-full max-w-md">
                  <source src={audio} type="audio/mpeg" />
                  Ваш браузер не поддерживает воспроизведение аудио.
                </audio>
              </>
            ) : (
              <p className="text-muted-foreground">Аудиоматериалы отсутствуют</p>
            )}
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="video">
        <Card>
          <CardContent className="p-6">
            {video ? (
              <div className="space-y-4">
                <AspectRatio ratio={16/9} className="bg-muted rounded-md overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <Play className="h-16 w-16 text-primary opacity-70" />
                  </div>
                </AspectRatio>
                <div className="text-center">
                  <p className="font-medium">Видеоматериалы о культуре народа {nationName}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    В реальном проекте здесь будет видеоплеер
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">Видеоматериалы отсутствуют</p>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default MediaGallery;

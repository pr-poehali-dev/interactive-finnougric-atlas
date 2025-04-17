
import Header from "@/components/Header";
import { Info, Book, Map } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Info className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">О проекте</h1>
        </div>
        
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p>
            <strong>Интерактивный атлас финно-угорских народов</strong> — это образовательный проект, 
            направленный на сохранение и популяризацию культурного наследия финно-угорских народов.
          </p>
          
          <div className="flex items-start gap-4 my-8 not-prose">
            <Book className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold mb-2">Цели проекта</h2>
              <ul className="space-y-1 list-disc ml-5">
                <li>Сохранение культурного и исторического наследия финно-угорских народов</li>
                <li>Популяризация знаний о финно-угорских народах и их традициях</li>
                <li>Создание доступного образовательного ресурса</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start gap-4 my-8 not-prose">
            <Map className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold mb-2">Возможности атласа</h2>
              <ul className="space-y-1 list-disc ml-5">
                <li>Подробные описания каждого народа, включая его историю, язык и культурные особенности</li>
                <li>Интерактивные карты расселения с историческими данными</li>
                <li>Галерея национальных костюмов и других визуальных материалов</li>
                <li>Аудио- и видеоматериалы, демонстрирующие культурные традиции</li>
                <li>Хронологическая лента основных исторических событий</li>
              </ul>
            </div>
          </div>
          
          <p>
            Проект находится в постоянном развитии. Мы планируем расширять базу данных, 
            добавлять новые материалы и улучшать функциональность интерактивного атласа.
          </p>
          
          <p>
            Если у вас есть предложения по улучшению проекта или вы хотите поделиться 
            материалами о финно-угорских народах, пожалуйста, свяжитесь с нами.
          </p>
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

export default About;

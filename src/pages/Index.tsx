import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">П.Н. Кулешов</h1>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-accent transition-colors">Главная</button>
              <button onClick={() => scrollToSection('biography')} className="text-sm hover:text-accent transition-colors">Биография</button>
              <button onClick={() => scrollToSection('works')} className="text-sm hover:text-accent transition-colors">Научные труды</button>
              <button onClick={() => scrollToSection('achievements')} className="text-sm hover:text-accent transition-colors">Достижения</button>
              <button onClick={() => scrollToSection('bibliography')} className="text-sm hover:text-accent transition-colors">Библиография</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="space-y-6">
              <Badge className="bg-accent text-accent-foreground">1854 — 1936</Badge>
              <h2 className="text-5xl font-bold leading-tight">Павел Николаевич Кулешов</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Выдающийся русский и советский учёный-зоотехник, основоположник отечественной зоотехнии, 
                создатель научной школы животноводства
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="GraduationCap" className="text-accent" size={24} />
                  <span className="text-sm">Профессор</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-accent" size={24} />
                  <span className="text-sm">Академик</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="BookOpen" className="text-accent" size={24} />
                  <span className="text-sm">Основатель школы</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/e38bf5f4-0258-419c-9f70-d9dd6acf71b9/files/03d3d2c4-c0c3-4e72-b924-0065586ef584.jpg" 
                alt="Портрет П.Н. Кулешова"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="biography" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Биография</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Calendar" className="text-accent" size={24} />
                  1854 — Рождение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Павел Николаевич Кулешов родился в селе Мушковатово Кирсановского уезда Тамбовской губернии 
                  в семье помещика. С детства проявлял интерес к сельскому хозяйству и животноводству.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="GraduationCap" className="text-accent" size={24} />
                  1873 — Образование
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Окончил Петровскую земледельческую и лесную академию (ныне РГАУ-МСХА имени К.А. Тимирязева). 
                  Получил фундаментальное образование в области агрономии и животноводства.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Microscope" className="text-accent" size={24} />
                  1878 — Начало научной деятельности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Начал преподавательскую и научную деятельность в Петровской академии. 
                  Заложил основы научного подхода к разведению сельскохозяйственных животных.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Users" className="text-accent" size={24} />
                  1894 — Профессор
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Получил звание профессора. Создал научную школу зоотехнии, воспитал множество 
                  выдающихся учеников, которые продолжили его дело по всей стране.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Award" className="text-accent" size={24} />
                  1920-е — Признание
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  В советское время его научные достижения получили государственное признание. 
                  Продолжал активную научную и педагогическую деятельность до конца жизни.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Heart" className="text-accent" size={24} />
                  1936 — Кончина
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Павел Николаевич Кулешов скончался в возрасте 82 лет, оставив после себя 
                  огромное научное наследие и целую плеяду учеников-последователей.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      <section id="works" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Научные труды</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Учение об экстерьере</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Разработал научные основы оценки животных по внешнему виду (экстерьеру). 
                  Создал методику определения продуктивных качеств по телосложению.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Теория подбора пар</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Обосновал принципы селекционной работы при разведении животных. 
                  Разработал методы подбора производителей для улучшения породных качеств.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Племенное дело</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Создал научные основы племенной работы в животноводстве. 
                  Разработал методики ведения племенных книг и оценки племенных качеств.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Кормление скота</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Исследовал влияние кормления на развитие и продуктивность животных. 
                  Обосновал рациональные системы откорма крупного рогатого скота.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Конституция животных</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Разработал учение о конституциональных типах сельскохозяйственных животных. 
                  Установил связь между конституцией и продуктивными качествами.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Породное улучшение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Создал методы совершенствования местных пород животных. 
                  Обосновал принципы создания новых высокопродуктивных пород.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Достижения и вклад</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Trophy" className="text-accent" size={32} />
                    <CardTitle>Основатель школы</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Создал первую в России научную школу зоотехнии. Его ученики стали ведущими 
                    специалистами страны в области животноводства и распространили его методы по всему СССР.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="BookMarked" className="text-accent" size={32} />
                    <CardTitle>Учебники и пособия</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Написал фундаментальные учебники по зоотехнии, которые использовались в 
                    сельскохозяйственных учебных заведениях на протяжении десятилетий.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="TrendingUp" className="text-accent" size={32} />
                    <CardTitle>Развитие животноводства</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Его методы позволили значительно повысить продуктивность сельскохозяйственных 
                    животных и улучшить породные качества отечественного скота.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Lightbulb" className="text-accent" size={32} />
                    <CardTitle>Научные методы</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Впервые применил строго научный подход к разведению животных, основанный на 
                    объективных измерениях и статистическом анализе данных.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <blockquote className="text-lg italic text-center leading-relaxed">
                  "Зоотехния должна быть наукой, основанной на точных наблюдениях и измерениях, 
                  а не на случайных впечатлениях и догадках"
                </blockquote>
                <p className="text-center mt-4 text-sm opacity-90">— П.Н. Кулешов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      <section id="bibliography" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Библиография</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Icon name="Book" className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Учение об экстерьере сельскохозяйственных животных</h3>
                    <p className="text-sm text-muted-foreground">
                      Фундаментальный труд, заложивший основы научного подхода к оценке внешнего вида 
                      и телосложения животных. Многократно переиздавался.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Icon name="Book" className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Теоретические работы по племенному животноводству</h3>
                    <p className="text-sm text-muted-foreground">
                      Сборник научных статей и исследований по вопросам селекции и разведения 
                      сельскохозяйственных животных.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Icon name="Book" className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Крупный рогатый скот: породы и их улучшение</h3>
                    <p className="text-sm text-muted-foreground">
                      Практическое руководство по разведению и совершенствованию пород крупного 
                      рогатого скота в российских условиях.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Icon name="Book" className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Курс скотоводства</h3>
                    <p className="text-sm text-muted-foreground">
                      Учебное пособие для сельскохозяйственных учебных заведений, систематизирующее 
                      знания в области разведения и содержания крупного рогатого скота.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Icon name="Book" className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Овцеводство</h3>
                    <p className="text-sm text-muted-foreground">
                      Работа, посвящённая вопросам разведения овец, улучшения шёрстных качеств 
                      и развития овцеводства в различных регионах России.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Icon name="FileText" className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Статьи в научных журналах</h3>
                    <p className="text-sm text-muted-foreground">
                      Более 100 научных статей, опубликованных в ведущих сельскохозяйственных 
                      журналах России и за рубежом на протяжении 50 лет научной деятельности.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Павел Николаевич Кулешов</h3>
            <p className="text-sm opacity-90">1854 — 1936</p>
            <Separator className="my-6 bg-primary-foreground/20" />
            <p className="text-sm opacity-75 max-w-2xl mx-auto">
              Основоположник научной зоотехнии в России, создатель школы животноводства, 
              чьи труды до сих пор являются фундаментом отечественной зоотехнической науки
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

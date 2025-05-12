import MainLayout from "@/components/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import FeaturedProjects, {
  ProjectCard,
} from "@/components/gallery/FeaturedProjects";
import CategoryList from "@/components/gallery/CategoryList";
import {
  featuredProjects,
  latestProjects,
  categories,
  guides,
  latestJobs,
} from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, BookOpen, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      <Hero />

      <div className="container py-8">
        <FeaturedProjects
          title="Популярные работы"
          projects={featuredProjects}
        />

        <Tabs defaultValue="latest" className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-montserrat font-semibold">
              Последние добавления
            </h2>
            <TabsList>
              <TabsTrigger value="latest">Работы</TabsTrigger>
              <TabsTrigger value="guides">Гайды</TabsTrigger>
              <TabsTrigger value="jobs">Вакансии</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="latest" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestProjects.map((project) => (
                <div key={project.id} className="animate-fade-in">
                  <ProjectCard {...project} className="w-full" />
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button asChild variant="outline">
                <Link to="/gallery" className="flex items-center gap-1">
                  Смотреть все работы
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="guides" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <Card
                  key={guide.id}
                  className="animate-fade-in overflow-hidden"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="line-clamp-2 text-lg">
                      {guide.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>Гайд</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={guide.author.avatar}
                        alt={guide.author.name}
                        className="h-6 w-6 rounded-full"
                      />
                      <span className="text-sm">{guide.author.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {guide.views} просмотров
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button asChild variant="outline">
                <Link to="/guides" className="flex items-center gap-1">
                  Все гайды и туториалы
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestJobs.map((job) => (
                <Card key={job.id} className="animate-fade-in">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="line-clamp-1 text-lg">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-1">
                          {job.company}
                        </CardDescription>
                      </div>
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Локация:</span>
                        <span className="font-medium">{job.location}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Тип:</span>
                        <span className="font-medium">{job.type}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Оплата:</span>
                        <span className="font-medium">{job.salary}</span>
                      </div>
                      <div className="pt-2">
                        <Button className="w-full">Откликнуться</Button>
                      </div>
                      <div className="text-xs text-right text-muted-foreground">
                        Опубликовано: {job.posted}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button asChild variant="outline">
                <Link to="/jobs" className="flex items-center gap-1">
                  Все вакансии
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <CategoryList
          title="Категории"
          categories={categories}
          className="mt-8"
        />
      </div>
    </MainLayout>
  );
};

export default Index;


// Типы и данные для вакансий
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
}

// Последние добавленные вакансии
export const latestJobs: Job[] = [
  {
    id: "job1",
    title: "3D модельер в игровую студию",
    company: "GameDev Studios",
    location: "Москва",
    type: "Полная занятость",
    salary: "от 150 000 ₽",
    posted: "2 дня назад"
  },
  {
    id: "job2",
    title: "Художник по текстурам",
    company: "AnimeVFX",
    location: "Удалённо",
    type: "Проектная работа",
    salary: "Договорная",
    posted: "5 дней назад"
  },
  {
    id: "job3",
    title: "Технический художник",
    company: "RenderForce",
    location: "Санкт-Петербург",
    type: "Полная занятость",
    salary: "от 180 000 ₽",
    posted: "Вчера"
  }
];

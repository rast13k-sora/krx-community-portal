
// Типы и данные для категорий
export interface Category {
  id: string;
  name: string;
  count: number;
}

// Категории для фильтрации проектов
export const categories: Category[] = [
  { id: "characters", name: "Персонажи", count: 1243 },
  { id: "environments", name: "Окружение", count: 865 },
  { id: "props", name: "Предметы", count: 1124 },
  { id: "vehicles", name: "Транспорт", count: 578 },
  { id: "architecture", name: "Архитектура", count: 742 },
  { id: "creatures", name: "Существа", count: 634 },
  { id: "concepts", name: "Концепт-арт", count: 956 },
  { id: "animations", name: "Анимации", count: 485 }
];

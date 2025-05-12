
// Типы и данные для руководств и гайдов
export interface Guide {
  id: string;
  title: string;
  image: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  likes: number;
  comments: number;
  views: number;
}

// Популярные гайды
export const guides: Guide[] = [
  {
    id: "guide1",
    title: "Основы моделирования в Blender для начинающих",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user1",
      name: "Алексей Петров",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=80&auto=format&fit=crop"
    },
    likes: 342,
    comments: 56,
    views: 2453
  },
  {
    id: "guide2",
    title: "Текстурирование в Substance Painter",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user2",
      name: "Екатерина Иванова",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80&auto=format&fit=crop"
    },
    likes: 198,
    comments: 32,
    views: 1576
  },
  {
    id: "guide3",
    title: "Риггинг персонажей в Maya",
    image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user3",
      name: "Дмитрий Соколов",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=80&auto=format&fit=crop"
    },
    likes: 256,
    comments: 41,
    views: 1932
  }
];

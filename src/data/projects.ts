
// Типы и данные для проектов
import { ProjectProps } from "@/components/gallery/ProjectCard";

// Данные избранных проектов
export const featuredProjects: ProjectProps[] = [
  {
    id: "1",
    title: "Футуристический персонаж",
    image: "https://images.unsplash.com/photo-1608501078713-8e445a709b39?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user1",
      name: "Алексей Петров",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=80&auto=format&fit=crop"
    },
    likes: 243,
    comments: 18,
    views: 1205
  },
  {
    id: "2",
    title: "Реалистичная сцена гостиной",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user2",
      name: "Екатерина Иванова",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80&auto=format&fit=crop"
    },
    likes: 187,
    comments: 24,
    views: 932
  },
  {
    id: "3",
    title: "Концепт-арт фантастического города",
    image: "https://images.unsplash.com/photo-1620503374956-c942862f0372?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user3",
      name: "Дмитрий Соколов",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=80&auto=format&fit=crop"
    },
    likes: 346,
    comments: 42,
    views: 1753
  },
  {
    id: "4",
    title: "Стилизованное фэнтези оружие",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user4",
      name: "Наталья Кузнецова",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=80&auto=format&fit=crop"
    },
    likes: 158,
    comments: 12,
    views: 845
  },
  {
    id: "5",
    title: "Космический крейсер",
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user5",
      name: "Андрей Смирнов",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=80&auto=format&fit=crop"
    },
    likes: 267,
    comments: 31,
    views: 1432
  },
  {
    id: "6",
    title: "Архитектурный проект музея",
    image: "https://images.unsplash.com/photo-1615307683387-7f02924922ad?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user6",
      name: "Елена Гончарова",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80&auto=format&fit=crop"
    },
    likes: 192,
    comments: 16,
    views: 987
  }
];

// Данные последних добавленных проектов
export const latestProjects: ProjectProps[] = [
  {
    id: "7",
    title: "Механический робот",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user7",
      name: "Максим Волков",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=80&auto=format&fit=crop"
    },
    likes: 97,
    comments: 9,
    views: 523
  },
  {
    id: "8",
    title: "Средневековый замок",
    image: "https://images.unsplash.com/photo-1599639668273-17c77d3bd3db?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user8",
      name: "Ольга Белова",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=80&auto=format&fit=crop"
    },
    likes: 112,
    comments: 15,
    views: 742
  },
  {
    id: "9",
    title: "Органические формы",
    image: "https://images.unsplash.com/photo-1633339571912-9f7f0e9a02b1?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user9",
      name: "Игорь Малышев",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=80&auto=format&fit=crop"
    },
    likes: 86,
    comments: 7,
    views: 498
  },
  {
    id: "10",
    title: "Научно-фантастический интерьер",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user10",
      name: "Светлана Морозова",
      avatar: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?q=80&w=80&auto=format&fit=crop"
    },
    likes: 124,
    comments: 19,
    views: 815
  },
  {
    id: "11",
    title: "Стилизованный персонаж",
    image: "https://images.unsplash.com/photo-1600086586276-47c3aee16cd2?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user11",
      name: "Артём Козлов",
      avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=80&auto=format&fit=crop"
    },
    likes: 138,
    comments: 23,
    views: 927
  },
  {
    id: "12",
    title: "Абстрактная композиция",
    image: "https://images.unsplash.com/photo-1633186710845-d0843ae0a8e1?q=80&w=600&auto=format&fit=crop",
    author: {
      id: "user12",
      name: "Татьяна Черных",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=80&auto=format&fit=crop"
    },
    likes: 76,
    comments: 8,
    views: 421
  }
];

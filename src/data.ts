export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  { id: 1, title: "Веб разработка", instructor: "Kim V.", description: "Описание." },
  { id: 2, title: "Python Data Science", instructor: "Lee J.", description: "Описание." },
  { id: 3, title: "UI/UX дизайн", instructor: "Park S.", description: "Описание." },
];
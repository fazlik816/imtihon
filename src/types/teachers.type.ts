export interface ITeacherCard {
  name: string;
  role: string;
  category: string;
  bio: string;
  stats: [string, string][];
  img: string;
}

export interface ITeacherCategory {
  label: string;
  value: string;
}

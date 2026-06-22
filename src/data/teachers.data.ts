import type { ITeacherCard, ITeacherCategory } from "../types/teachers.type";

export const teacherCategories: ITeacherCategory[] = [
  { label: "Barchasi", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Dizayn", value: "design" },
  { label: "Mobil", value: "mobile" },
  { label: "Marketing", value: "marketing" },
];

export const teachersList: ITeacherCard[] = [
  {
    name: "Akmal Karimov",
    role: "JavaScript Lead",
    category: "frontend",
    bio: "8 yillik frontend tajriba. EPAM va Uzcard'da ishlagan.",
    stats: [
      ["12", "Kurs"],
      ["540", "Talaba"],
      ["4.9", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=12",
  },
  {
    name: "Madina Ergasheva",
    role: "UX/UI dizayner",
    category: "design",
    bio: "7 yillik tajriba. Yandex va Behance loyihalari.",
    stats: [
      ["8", "Kurs"],
      ["320", "Talaba"],
      ["4.9", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=47",
  },
  {
    name: "Sherzod Rahimov",
    role: "Python / Django Senior",
    category: "backend",
    bio: "10 yillik backend tajriba. AWS sertifikatli.",
    stats: [
      ["15", "Kurs"],
      ["680", "Talaba"],
      ["4.8", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=33",
  },
  {
    name: "Nodira Yusupova",
    role: "React Developer",
    category: "frontend",
    bio: "5 yillik React tajribasi. Fintech mahsulotlar muallifi.",
    stats: [
      ["6", "Kurs"],
      ["280", "Talaba"],
      ["4.8", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=45",
  },
  {
    name: "Sevara Tursunova",
    role: "Data Scientist",
    category: "backend",
    bio: "6 yillik ML tajribasi. Kaggle Master.",
    stats: [
      ["4", "Kurs"],
      ["160", "Talaba"],
      ["4.7", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=20",
  },
  {
    name: "Otabek Salimov",
    role: "Flutter Developer",
    category: "mobile",
    bio: "5+ yillik mobil ilovalar tajribasi. 30+ ilova.",
    stats: [
      ["5", "Kurs"],
      ["210", "Talaba"],
      ["4.8", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=15",
  },
  {
    name: "Diloraxon Nazarova",
    role: "Marketing Expert",
    category: "marketing",
    bio: "7 yillik raqamli marketing tajribasi. Google Ads sertifikatli.",
    stats: [
      ["3", "Kurs"],
      ["140", "Talaba"],
      ["4.8", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=44",
  },
  {
    name: "Jasur Mahmudov",
    role: "DevOps muhandisi",
    category: "backend",
    bio: "9 yillik DevOps tajribasi. AWS va Kubernetes mutaxassisi.",
    stats: [
      ["4", "Kurs"],
      ["180", "Talaba"],
      ["4.7", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=51",
  },
  {
    name: "Bekzod Salimov",
    role: "Backend Developer",
    category: "backend",
    bio: "6 yillik Node.js tajribasi. Yirik fintech loyihalarda ishlagan.",
    stats: [
      ["5", "Kurs"],
      ["220", "Talaba"],
      ["4.7", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=59",
  },
  {
    name: "Kamola Yusupova",
    role: "Grafik dizayner",
    category: "design",
    bio: "8 yillik tajriba. Adobe sertifikatli mutaxassis.",
    stats: [
      ["6", "Kurs"],
      ["280", "Talaba"],
      ["4.9", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=32",
  },
  {
    name: "Aziz Inomov",
    role: "Java Developer",
    category: "backend",
    bio: "7 yillik enterprise Java tajribasi. Spring mutaxassisi.",
    stats: [
      ["4", "Kurs"],
      ["190", "Talaba"],
      ["4.6", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=68",
  },
  {
    name: "Gulnora Rasulova",
    role: "Product Designer",
    category: "design",
    bio: "6 yillik mahsulot dizayni tajribasi. Tinkoff loyihasida ishlagan.",
    stats: [
      ["7", "Kurs"],
      ["250", "Talaba"],
      ["4.8", "Reyting"],
    ],
    img: "https://i.pravatar.cc/160?img=24",
  },
];


import { Smile,Frown,Globe, HandCoins,Sparkle,DollarSign} from 'lucide-react';
export const  faqData = [
   {
    question: "Что такое Eyecode University?",
    answer: "Это платформа нового поколения для изучения айти технологий.",
    icon: <Smile color='gray'  />,
  },
   {
    question: "У вас тоже как у всех учатся по видео урокам ?",
    answer: "Нет!Мы считаем что это неэффективно.Изучение у нас в режиме прямого эфира через платформу Zoom.",
    icon: <Frown color='gray'  />,
  },
    {
    question: "Можно ли обучаться, если мне 15 лет?",
    answer: "Да, обучение доступно для студентов с 13 лет.",
    icon: <Sparkle color='gray'  />,
  },
 
  {
    question: "Можно ли учиться онлайн?",
    answer: "Да, обучение проходит в онлайн-формате.",
    icon: <Globe color='gray' />
  },
  {
    question: "Нужны ли базовые знания?",
    answer: "Нет, у нас почти все программы рассчитаны на людей без опыта.",
    icon: <Smile color='greenyellow' />
  },
   {
    question: "Можно ли вернуть деньги, если я передумаю учиться?",
    answer: "У нас действует 14-дневная гарантия возврата денег.",
    icon: <HandCoins color='gray' />
  },
  {
    question: "Сколько стоит обучение ?",
    answer: "Стоимость обучения зависит от выбранной программы.Начиная от ~937 ₽ за занятие.",
    icon: <DollarSign color='gray' />
  }
];
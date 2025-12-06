import Services from "../services/page";

export const metadata = {
  title: "Юрист Кемерово — услуги для юридических лиц и бизнеса",
  description:
    "Юрист Кемерово для бизнеса: договоры, арбитражные споры, банкротство, налоговые проверки.",
  keywords:
    "юрист компании Кемерово, юридическое сопровождение организаций, договор юрист, арбитражный юрист, налоговые споры, банкротство предприятий, юридическое бюро Кемерово, защита бизнеса, корпоративные конфликты, взыскание задолженности, юридические услуги для ИП",
  alternates: {
    canonical: "https://юристкемерово.рф/uslugi-dlya-yuridicheskih-lits",
  },
  openGraph: {
    title: "Юрист Кемерово — услуги для юридических лиц и бизнеса",
    description:
      "Юрист Кемерово для бизнеса: договоры, арбитражные споры, банкротство, налоговые проверки.",
    url: "https://юристкемерово.рф/uslugi-dlya-yuridicheskih-lits",
    images: [
      {
        url: "/favicon/favicon-96x96.png",
        alt: "Юридические услуги для бизнеса - yurist42.ru",
      },
    ],
  },
};

export default function YurPage({ params }) {
  return <Services params={{ slug: "yur" }} />;
}

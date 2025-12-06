import BreadCrumble from "@/components/common/breadCrumble/breadCrumble";
import ConsultationForm from "@/components/common/consultation-form/comsultation-form";
import YandexMap from "@/components/common/map/map";
import Practice from "@/components/practices-components/practice-list";

export const metadata = {
  title: "Практика Юрист Кемерово — кейсы и решения",
  description:
    "Реальные кейсы и судебные решения с участием юристов: достигнутые результаты и отзывы клиентов.",
  keywords:
    "практика юриста, судебный юрист Кемерово, юрист в суд, выигранные дела, опытные юристы, лучшие юристы Кемерово, юридическая компания, адвокатское бюро, защита интересов в суде",
  alternates: {
    canonical: "https://юристкемерово.рф/praktika",
  },
  openGraph: {
    title: "Практика Юрист Кемерово — кейсы и решения",
    description:
      "Реальные кейсы и судебные решения с участием юристов: достигнутые результаты и отзывы клиентов.",
    url: "https://юристкемерово.рф/praktika",
    images: [
      {
        url: "/favicon/favicon-96x96.png",
        alt: "Практика юристов - yurist42.ru",
      },
    ],
  },
};

export default function Practices() {
  const breadcrumbs = [{ label: "Главная", path: "/" }, { label: "Практики" }];
  return (
    <>
      <section className="section-main secondary-page">
        <BreadCrumble items={breadcrumbs} />
        <h1>Решенные дела</h1>
        <Practice />
      </section>
      <ConsultationForm
        consultationTitle="Получите консультацию"
        consultationText="Оценим шансы, предложим решение и стоимость"
      />
      <YandexMap />
    </>
  );
}

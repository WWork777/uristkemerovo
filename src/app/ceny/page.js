import BreadCrumble from "@/components/common/breadCrumble/breadCrumble";
import ConsultationForm from "@/components/common/consultation-form/comsultation-form";
import YandexMap from "@/components/common/map/map";
import Quiz from "@/components/common/quiz/quiz";
import PriceListTable from "@/components/price-list-components/price-list-table";

export const metadata = {
  title: "Цены Юрист Кемерово — стоимость юридических услуг",
  description:
    "Актуальные цены на услуги: консультации, составление документов, представительство в судах.",
  keywords:
    "цены на услуги юриста Кемерово, стоимость услуг юриста, прайс юриста, консультация адвоката, помощь юриста, юридическая компания, юридическое бюро Кемерово, судебный юрист, юрист по банкротству",
  alternates: {
    canonical: "https://юристкемерово.рф/ceny",
  },
  openGraph: {
    title: "Цены Юрист Кемерово — стоимость юридических услуг",
    description:
      "Актуальные цены на услуги: консультации, составление документов, представительство в судах.",
    url: "https://юристкемерово.рф/ceny",
    images: [
      {
        url: "/favicon/favicon-96x96.png",
        alt: "Цены на юридические услуги - yurist42.ru",
      },
    ],
  },
};

export default function PriceList() {
  const breadcrumbs = [
    { label: "Главная", path: "/" },
    { label: "Прайс-лист" },
  ];
  return (
    <>
      <section className="section-main secondary-page">
        <BreadCrumble items={breadcrumbs} />
        <h1>Стоимость услуг</h1>
        <h5 style={{ marginTop: "20px" }}>
          Представленные цены не явлются офертой, а окончательная <br></br>{" "}
          стоимость услуг определяется при заключении договора.
        </h5>
        <PriceListTable />
      </section>
      <Quiz />
      <ConsultationForm
        consultationTitle="Получите консультацию"
        consultationText="Оценим шансы, предложим решение и стоимость"
      />
      <YandexMap />
    </>
  );
}

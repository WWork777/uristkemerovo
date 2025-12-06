import ConsultationForm from "@/components/common/consultation-form/comsultation-form";
import YandexMap from "@/components/common/map/map";
import Quiz from "@/components/common/quiz/quiz";
import HeroBlock from "@/components/home-components/hero-block/hero-block";
import HomeDiplom from "@/components/home-components/home-diplom/home-diplome";
import HomeHelp from "@/components/home-components/home-help/home-help";
import HomePractice from "@/components/home-components/home-practice/home-practice";
import HomeProblems from "@/components/home-components/home-problems/home-problems";
import HomeTeam from "@/components/home-components/home-team/home-team";
import PurposeHome from "@/components/home-components/purpose-home/purpose-home";

export const metadata = {
  title: "Юридические услуги в Кемерово – помощь юриста для граждан и бизнеса",
  description:
    "Профессиональные юридические услуги в Кемерове и области от команды экспертов. Бесплатная консультация юриста для решения ваших вопросов: банкротство физических и юридических лиц, ведение судебных дел в арбитражных судах и судах общей юрисдикции, составление договоров и полное юридическое сопровождение бизнеса. Гарантируем защиту ваших интересов и работаем на результат.",
  keywords:
    "бизнес юрист Кемерово, юрист Кемеровская область, юридическая компания, бесплатная консультация юриста, помощь юриста, юрист по банкротству, адвокат, договор юрист, судебный юрист, лучшие юристы, юридическое бюро, юридическая контора, консультация юриста Кемерово",
  alternates: {
    canonical: "https://юристкемерово.рф/",
  },
  openGraph: {
    title:
      "Юридические услуги в Кемерово – помощь юриста для граждан и бизнеса",
    description:
      "Профессиональные юридические услуги в Кемерове и области от команды экспертов. Бесплатная консультация юриста для решения ваших вопросов: банкротство физических и юридических лиц, ведение судебных дел в арбитражных судах и судах общей юрисдикции, составление договоров и полное юридическое сопровождение бизнеса. Гарантируем защиту ваших интересов и работаем на результат.",
    url: "https://юристкемерово.рф/",
    images: [
      {
        url: "/favicon/favicon-96x96.png",
        alt: "yurist42.ru",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <h1
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          zIndex: "-1",
        }}
      >
        Юридические услуги в Кемерово – помощь юриста для граждан и бизнеса
      </h1>
      <HeroBlock
        heroTitle="Мы обладаем исчерпывающими знаниями в области права."
        heroText="Защищаем интересы в суде 27 лет. Арбитраж. Гражданские споры. <br> Частные и корпоративные клиенты."
        heroTextMobile="Мы обладаем исчерпывающими знаниями в области права."
        firstBlockText="лет юридической практики"
        secondBlockText="успешно выигранных дел"
        thirdBlockText="дел разрешаем в пользу клиента"
        firstBlockTextNumber="27"
        secondBlockTextNumber="1100+"
        thirdBlockTextNumber="95%"
        buttonText="Бесплатная консультация"
        backgroundImageLink={"/common/hero-background.webp"}
      />
      <Quiz />
      <HomeHelp
        helpTitle="Помогаем юридическим <br> и физическим лицам"
        helpTitleLeftBlock="ГРАЖДАНАМ"
        helpTitleRightBlock="БИЗНЕСУ"
      />
      <HomePractice practiceTitle="Юридическая практика <br> с 1997 года" />
      <HomeProblems problemsTitle="Решаем Ваши проблемы" />
      <PurposeHome
        purposeTitle="Наши ценности"
        purposeText="«КодексЪ» на страже ваших прав <br> с 1997 года, за это время в компании <br> сформировались следующие принципы:"
      />
      <HomeTeam teamTitle="Команда КодексЪ" />
      <HomeDiplom diplomTitle="Дипломы и сертификаты" />
      <ConsultationForm
        consultationTitle="Получите консультацию"
        consultationText="Оценим шансы, предложим решение и стоимость"
      />
      <YandexMap />
    </>
  );
}

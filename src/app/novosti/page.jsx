import Head from "next/head";
import Link from "next/link";
import newsData from "@/data/news.json";
import styles from "./styles.module.scss";
import BreadCrumble from "@/components/common/breadCrumble/breadCrumble";
import Quiz from "@/components/common/quiz/quiz";
import ConsultationForm from "@/components/common/consultation-form/comsultation-form";

export const metadata = {
  title: "Новости Юрист Кемерово — статьи и разъяснения",
  description:
    "Новости и статьи по юридическим вопросам от специалистов: разборы практики, изменения в законодательстве.",
  keywords:
    "новости юриста Кемерово, юридические новости, судебная практика, изменения в законах 2025, права граждан, новости для бизнеса, консультация юриста, юридический центр, лучшие юристы Кемерово",
  alternates: {
    canonical: "https://юристкемерово.рф/novosti",
  },
  openGraph: {
    title: "Новости Юрист Кемерово — статьи и разъяснения",
    description:
      "Новости и статьи по юридическим вопросам от специалистов: разборы практики, изменения в законодательстве.",
    url: "https://юристкемерово.рф/novosti",
    images: [
      {
        url: "/favicon/favicon-96x96.png",
        alt: "Новости юриста в Кемерово - yurist42.ru",
      },
    ],
  },
};

export default function NewsList() {
  const breadcrumbs = [{ label: "Главная", path: "/" }, { label: "Новости" }];

  return (
    <>
      <section className="section-main secondary-page">
        <BreadCrumble items={breadcrumbs} />
        <h1>Новости</h1>
        <h5 style={{ marginTop: "20px" }}>
          Актуальные юридические новости в Кемерово — изменения <br></br> в
          законах и практике
        </h5>

        <div className={styles.newsList}>
          {newsData.map((news) => (
            <article
              key={news.id}
              className={styles.newsArticle}
              aria-label={news.title}
            >
              <h2>
                <Link href={`/novosti/${news.slug}`}>{news.title}</Link>
              </h2>
              <time dateTime={news.date} aria-label="Дата публикации">
                {new Date(news.date).toLocaleDateString("ru-RU")}
              </time>
              <p>{news.excerpt}</p>
              <Link href={`/novosti/${news.slug}`} className={styles.readMore}>
                Читать далее
              </Link>
            </article>
          ))}
        </div>
      </section>
      <ConsultationForm
        consultationTitle="Получите консультацию"
        consultationText="Оценим шансы, предложим решение и стоимость"
      />
    </>
  );
}

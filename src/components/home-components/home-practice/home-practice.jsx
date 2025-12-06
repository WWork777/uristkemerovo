"use client";
import styles from "./home-practice.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePractice({ practiceTitle }) {
  return (
    <section className="section-main">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.home_practice_title}
        dangerouslySetInnerHTML={{ __html: practiceTitle }}
      ></motion.h2>
      <div className={styles.home_practice}>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className={styles.home_practice_image}
        >
          <Image
            src="/home/practice/practiceimage (2).webp"
            alt="Практика"
            width={1000}
            height={1000}
            className={styles.home_practice_image_image}
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.home_practice_text}
        >
          <h3>Репутация, построенная на ваших успехах.</h3>
          <p>
            В суде вы видите одного адвоката, но над вашим делом трудится целая
            команда наших специалистов. Мы беремся за дела любой сложности — от
            единичной консультации до комплексного ведения процесса.
          </p>
          <p>
            Наш ключевой принцип — персональная ответственность за положительный
            исход. Мы тщательно анализируем каждую ситуацию, предоставляя
            клиенту честную оценку перспектив и стратегию достижения наилучшего
            результата.
          </p>
          <p>
            С 1997 года мы профессионально и добросовестно защищаем интересы
            доверителей, выстраивая долгосрочные отношения, основанные на
            доверии.
          </p>
          <button className={styles.home_practice_text_button}>
            <Link href="#form">
              <p>Запись на консультацию</p>
            </Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

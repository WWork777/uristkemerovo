import styles from "./footer.module.scss";
import Link from "next/link";

const SvgLeft = ({ liText, link }) => {
  return (
    <Link href={link} className={styles.li_text_link_left}>
      <img src="/svg/home-help/li.svg" alt="list icon" />
      <p style={{ margin: 0 }}>{liText}</p>
    </Link>
  );
};
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        <img
          src="/svg/logo/kodekslogo.svg"
          alt="logo"
          className={styles.footer_logo_img}
        />
        <h5>1997-2025 КОДЕКСЪ. Все права защищены.</h5>
        <p>Политика конфиденциальности</p>
      </div>
      <div className={styles.footer_links}>
        <SvgLeft liText="Услуги" link="/uslugi-dlya-fizicheskih-lits" />
        <SvgLeft liText="Прайс-лист" link="/ceny" />
        <SvgLeft liText="Практики" link="/praktika" />
        <SvgLeft liText="Новости" link="/novosti" />
        <SvgLeft liText="Контакты" link="/kontakty" />
      </div>
      <div className={styles.footer_contacts}>
        <h5>Главный офис</h5>
        <p>г. Кемерово, ул. Красная, д. 13</p>
        <h5>Телефон</h5>
        <Link href="tel:+7 (923) 528-88-99">
          <p>+7 (923) 528-88-99</p>
        </Link>
        <h5>Почта</h5>
        <Link href="mailto:lawyer_kodeks@mail.ru">
          <p>lawyer_kodeks@mail.ru</p>
        </Link>
        <div className={styles.footer_social}>
          <Link href="https://api.whatsapp.com/send/?phone=79235288889&text&type=phone_number&app_absent=0">
            <img src="/svg/contacts/wa.svg" className={styles.footer_svg} />
          </Link>
          <Link href="https://telegram.me/yurist42_kodeks">
            <img src="/svg/contacts/tg.svg" className={styles.footer_svg} />
          </Link>
          <Link href="https://vk.com/kodeks42">
            <img src="/svg/contacts/vk.svg" className={styles.footer_svg} />
          </Link>
        </div>
        <div className={styles.footer_bottom}>
          <h5>1997-2025 КОДЕКСЪ. Все права защищены.</h5>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </div>
  );
}

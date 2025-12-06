"use client";
import styles from "./header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkPage =
    pathname === "/uslugi" ||
    pathname === "/ceny" ||
    pathname === "/novosti" ||
    pathname === "/praktika" ||
    pathname === "/kontakty" ||
    pathname === "/policy" ||
    pathname === "/uslugi-dlya-fizicheskih-lits" ||
    pathname === "/uslugi-dlya-yuridicheskih-lits" ||
    pathname === "/privacy" ||
    pathname.startsWith("/novosti/") ||
    pathname.startsWith("/praktika/");

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`
  ${styles.header}
  ${isDarkPage ? styles.dark : ""}
  ${isScrolled ? styles.scrolled : ""}
  ${isDarkPage && isScrolled ? styles.scrolledDark : ""}
`}
    >
      <div className={styles.header_logo}>
        <Link href="/" onClick={closeMenu}>
          <img src="/svg/logo/kodekslogo.svg" alt="Логотип" />
        </Link>
      </div>

      {/* Бургер-кнопка */}
      <div
        className={`${styles.burger} ${isDarkPage ? styles.darkBurger : ""}`}
        onClick={toggleMenu}
      >
        <div className={`${styles.line} ${isMenuOpen ? styles.active : ""}`} />
        <div className={`${styles.line} ${isMenuOpen ? styles.active : ""}`} />
        <div className={`${styles.line} ${isMenuOpen ? styles.active : ""}`} />
      </div>

      {/* Мобильное меню */}
      <div className={`${styles.mobile_menu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={`${styles.header_logo_mobile}`}>
          <Link href="/" onClick={closeMenu}>
            <img src="/svg/logo/kodekslogo.svg" alt="Логотип" />
          </Link>
        </div>
        <div className={`${styles.mobile_menu_links}`}>
          <Link href="/uslugi-dlya-fizicheskih-lits" onClick={closeMenu}>
            <p
              className={isDarkPage && isScrolled ? styles.darkTextMobile : ""}
            >
              Услуги
            </p>
          </Link>
          <Link href="/ceny" onClick={closeMenu}>
            <p
              className={isDarkPage && isScrolled ? styles.darkTextMobile : ""}
            >
              Прайс-лист
            </p>
          </Link>
          <Link href="/praktika" onClick={closeMenu}>
            <p
              className={isDarkPage && isScrolled ? styles.darkTextMobile : ""}
            >
              Практика
            </p>
          </Link>
          <Link href="/novosti" onClick={closeMenu}>
            <p
              className={isDarkPage && isScrolled ? styles.darkTextMobile : ""}
            >
              Новости
            </p>
          </Link>
          <Link href="/kontakty" onClick={closeMenu}>
            <p
              className={isDarkPage && isScrolled ? styles.darkTextMobile : ""}
            >
              Контакты
            </p>
          </Link>
        </div>

        <div className={styles.mobile_contacts_mobile}>
          <Link href="mailto:lawyer_kodeks@mail.ru">
            <p>lawyer_kodeks@mail.ru</p>
          </Link>
          <Link href="tel:+7 (923) 528-88-99">
            <p>+7 (923) 528-88-99</p>
          </Link>
        </div>
        <div className={styles.header_contacts_bottom_mobile}>
          <Link
            href="https://api.whatsapp.com/send/?phone=79609309191"
            className={`${styles.header_contacts_link_mobile} `}
          >
            <img src={"/svg/mobileheader/wa.svg"} alt="WhatsApp" />
            <h5>Whatsapp</h5>
          </Link>
          <Link
            href="https://telegram.me/yurist42_kodeks"
            className={`${styles.header_contacts_link_mobile}`}
          >
            <img src={"/svg/mobileheader/tg.svg"} alt="Telegram" />
            <h5>Telegram</h5>
          </Link>
        </div>
      </div>

      {/* Десктоп навигация */}
      <div className={styles.header_links}>
        <Link href="/uslugi-dlya-fizicheskih-lits">
          <p className={isDarkPage ? styles.darkText : ""}>Услуги</p>
        </Link>
        <Link href="/ceny">
          <p className={isDarkPage ? styles.darkText : ""}>Прайс-лист</p>
        </Link>
        <Link href="/praktika">
          <p className={isDarkPage ? styles.darkText : ""}>Практика</p>
        </Link>
        <Link href="/novosti">
          <p className={isDarkPage ? styles.darkText : ""}>Новости</p>
        </Link>
        <Link href="/kontakty">
          <p className={isDarkPage ? styles.darkText : ""}>Контакты</p>
        </Link>
      </div>

      <div className={styles.header_contacts}>
        <div className={styles.header_contacts_top}>
          <Link href="mailto:lawyer_kodeks@mail.ru">
            <h5>lawyer_kodeks@mail.ru</h5>
          </Link>
          <Link href="tel:+7 (923) 528-88-99">
            <h5>+7 (923) 528-88-99</h5>
          </Link>
        </div>
        <div className={styles.header_contacts_bottom}>
          <Link
            href="https://api.whatsapp.com/send/?phone=79609309191"
            className={`${styles.header_contacts_link} ${
              isDarkPage ? styles.dark_contacts_link : ""
            }`}
          >
            <img
              src={
                isDarkPage & !isScrolled
                  ? "/svg/header/waDark.svg"
                  : "/svg/header/wa.svg"
              }
              alt="WhatsApp"
            />
            <h5>Whatsapp</h5>
          </Link>
          <Link
            href="https://telegram.me/yurist42_kodeks"
            className={`${styles.header_contacts_link} ${
              isDarkPage ? styles.dark_contacts_link : ""
            }`}
          >
            <img
              src={
                isDarkPage & !isScrolled
                  ? "/svg/header/tgDark.svg"
                  : "/svg/header/tg.svg"
              }
              alt="Telegram"
            />
            <h5>Telegram</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

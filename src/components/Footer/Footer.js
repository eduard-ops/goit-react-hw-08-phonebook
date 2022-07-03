import s from './Footer.module.css';

export default function Footer(params) {
  return (
    <footer className={s.footer}>
      <p className={s.text}>Phonebook 2022&copy;</p>
    </footer>
  );
}

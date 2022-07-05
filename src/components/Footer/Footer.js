import s from './Footer.module.css';

import Container from 'components/Container';

export default function Footer(params) {
  return (
    <footer className={s.footer}>
      <Container>
        <p className={s.text}>Phonebook 2022&copy;</p>
      </Container>
    </footer>
  );
}

import { ReactComponent as IconLogo } from '../../images/logo-icon.svg';

import s from './Logo.module.css';

export default function Logo() {
  return (
    <div className={s.wrap}>
      <IconLogo className={s.logo} />
      <p className={s.text}>Phonebook</p>
    </div>
  );
}

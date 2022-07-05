import iconNotFound from '../../images/not-page.png';

import s from './NotFound.module.css';

export default function NotFoundPage() {
  return (
    <div className={s.wrap}>
      <img className={s.image} src={iconNotFound} alt="not-found" />
    </div>
  );
}

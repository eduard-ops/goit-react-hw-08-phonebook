import s from './ContentWrap.module.css';

export default function ContentWrap({ children }) {
  return <div className={s.wrap}>{children}</div>;
}

import { Oval } from 'react-loader-spinner';

import s from './Loader.module.css';

export default function Loader({ style }) {
  return (
    <div style={style} className={s.loader}>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        color="#7edfd0"
        secondaryColor="#757575"
      />
    </div>
  );
}

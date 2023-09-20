import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.wrapper}>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{ position: 'absolute', top: '30%', left: '50%' }}
        wrapperClass="blocks-wrapper"
        colors={['#fae75a', '#fae01c', '#1c87fa', '#1c66fa', '#231cfa']}
      />
      
    </div>
  );
}

export default Loader;
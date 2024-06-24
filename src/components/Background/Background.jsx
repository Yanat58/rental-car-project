import PropTypes from 'prop-types';
import css from  './Background.module.css';
import video1 from '../../video/video1.mp4';
import image1 from '../../images/headerCar1.jpg';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';


const Background = ({playStatus, heroCount}) => {
  
  if (playStatus) {
    return (
      <video className={`${css.background} ${css.fade_in} `} autoPlay loop muted>
        <source src={video1} type='video/mp4' />
      </video>
    )
  } else if (heroCount === 0) {
    return <img src={image1} alt="" className={`${css.background} ${css.fade_in} `} />
  }  else if (heroCount === 1) {
    return <img src={image2} alt="" className={`${css.background} ${css.fade_in} `} />
  }  else if (heroCount === 2) {
    return <img src={image3} alt="" className={`${css.background} ${css.fade_in} `} />
  }
}

export default Background;

Background.propTypes= {
  playStatus:PropTypes.bool,
  heroCount:PropTypes.number,
}







import PropTypes from 'prop-types';
import css from './Hero.module.css'
import arrow_btn from '../../images/arrow_btn.png';
import play_icon from '../../images/play_icon.png';
import pause_icon from '../../images/pause_icon.png'

const Hero = ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) => {
   const activeDot1 = 
    heroCount === 0 ? `${css.orange}` : `${css.hero_dot}`;
  const activeDot2 = 
    heroCount === 1 ? `${css.orange}` : `${css.hero_dot}`;
  const activeDot3 = 
    heroCount === 2 ? `${css.orange}` : `${css.hero_dot}`;
  
  
  
  return (
    <div className={css.hero} >
      <div className={css.hero_text}>
        <p>{heroData.text1}</p>
        <p>{ heroData.text2}</p>
      </div>
      <div  className={css.hero_explore}>
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className={css.hero_dot_play}>
        <ul className={css.hero_dots}>
          <li onClick={() => setHeroCount(0)} className={activeDot1} ></li>
          <li onClick={()=> setHeroCount(1)} className={activeDot2} ></li>
          <li onClick={()=> setHeroCount(2)} className={activeDot3} ></li>
        </ul>
        <div className={css.hero_play}>
          <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;

Hero.propTypes = {
  heroData: PropTypes.shape([]),
  heroCount: PropTypes.number,
  playStatus: PropTypes.bool,
  setHeroCount: PropTypes.func,
  setPlayStatus: PropTypes.func,
}

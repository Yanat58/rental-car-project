import { useEffect, useState } from 'react';
import  {heroData}  from '../utils/heroData';
import  Background  from '../components/Background/Background';
import  Hero  from '../components/Hero/Hero';

// import headerCar from 'images/headerCar1.jpg';

const Home = () => {
   const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count)=> {return count===2 ? 0 : count+1})
    }, 5000)
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>


    // <div style={{ position: 'relative' }}>
    //   <img src={headerCar} alt="car" />
    //   <div
    //     style={{
    //       position: 'absolute',
    //       top: 120,
    //       left: 70,
    //       width: 350,
    //     }}
    //   >
    //     <h1
    //       style={{
    //         fontWeight: 600,
    //         fontSize: 56,
    //         color: 'rgb(53, 114, 247)',
    //         textShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)',
    //       }}
    //     >
    //       Find your Dream Car
    //     </h1>
    //   </div>
    // </div>
  );
};

export default Home;

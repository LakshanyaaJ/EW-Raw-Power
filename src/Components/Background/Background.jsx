import React from 'react'
import './Background.css'
import video1 from '../../assets/video.mp4';
import image1 from '../../assets/image1.webp';
import image2 from '../../assets/image2.webp'
import image3 from '../../assets/image3.webp'
import image4 from '../../assets/image4.webp'
import image5 from '../../assets/image5.webp';


const Background = ({playStatus,heroCount}) => {
  if(playStatus){
    return(
        <video className='background' autoplay loop muted>
            <source src={video1} type='video/mp4'/>
        </video>
    )
  }
  else if(heroCount===0){
    return <img src={image1} className='background'/>
  }
  else if(heroCount===1){
    return <img src={image2} className='background'/>
  }
  else if(heroCount==2){
    return <img src={image3} className='background'/>
  }
  else if(heroCount==3){
    return <img src={image4} className='background'/>
  }
  else if(heroCount==4){
    return <img src={image5} className='background'/>
  }
  else{
    return <h1>Hello world</h1>
  }
}

export default Background

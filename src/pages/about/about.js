import React from 'react'
import './about.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import bg from "../../images/git-profile_1.jpg";
const About = () => {
  return (
    <div className='about-wrapper'>
      <div className='about-container'><h1>About Me</h1><p>
        I'm a developer and I am passionate about learning new Technologies. This portfolio is created using React's Framework.</p>
        <p>I'm very cheerful personality and always see my mistakes as opportunities to learn and grow, and I feel every failure is a step up to success</p><p>Do everything you fear because it is the only solution discovered to conquer fear!</p>
        <FontAwesomeIcon icon={faHeart} size='6x' beat />
        </div>
        <div className='circle-container'><img className="circle-bg" src={bg} /></div>
    </div>
  )
}

export default About
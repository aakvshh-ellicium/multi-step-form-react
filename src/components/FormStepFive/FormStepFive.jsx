import React from 'react'
import styles from './FormStepFive.module.css'
import ThankYouImg from '../../assets/images/icon-thank-you.svg'
import { useNavigate } from 'react-router-dom'

const FormStepFive = () => {
  const navigate = useNavigate();

  const handleRedirectToHome = () => {
    navigate('/')
  }
  
  return (
    <div className={styles.stp} id={styles.stepFive}>
        <img src={ThankYouImg} alt="" width={75} height={75} />
        <div className={styles.header}>
            <h1 className={styles.title}>Thank you!</h1>
            <p className={styles.exp}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div><br />
        <button onClick={handleRedirectToHome} className={styles.nextBtn}>Home</button> 
    </div>
  )
}

export default FormStepFive
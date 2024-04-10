import React, { useState } from 'react'
import styles from './FormStepTwo.module.css'
import ArcadeIcon from '../../assets/images/icon-arcade.svg'
import AdvancedIcon from '../../assets/images/icon-advanced.svg'
import ProIcon from '../../assets/images/icon-pro.svg'
import { useNavigate } from 'react-router-dom'
import { userData } from '../../utils/UserData'

const FormStepTwo = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [selected, setSelected] = useState('Arcade')

  const navigate = useNavigate();

  const handlePrevClick = () => {
    navigate('/')
    userData.step = userData.step - 1;
  }
    
  const handleToggle = () => {
    if (!isYearly){
      setIsYearly(true)
      userData.isMonthly = true;
    } else {
      setIsYearly(false)
      userData.isMonthly = false;
    }
    

    // !isYearly ? userData.isMonthly = false : userData.isMonthly = true

    console.log(userData.isMonthly)

  }

  const handleSubmit = () => {
    selected === 'Arcade' && userData.isMonthly && (userData.selectedPlanPrice = '$9/mo') 
    selected === 'Advanced' && userData.isMonthly && (userData.selectedPlanPrice = '$12/mo') 
    selected === 'Pro' && userData.isMonthly && (userData.selectedPlanPrice = '$15/mo') 
    selected === 'Arcade' && !userData.isMonthly && (userData.selectedPlanPrice = '$90/yr') 
    selected === 'Advanced' && !userData.isMonthly && (userData.selectedPlanPrice = '$120/yr') 
    selected === 'Pro' && !userData.isMonthly && (userData.selectedPlanPrice = '$150/yr') 
    navigate('/add-ons')

    userData.step = userData.step + 1;
    console.log(userData)
  }
  

  return (
    <div className={styles.stp} id={styles.stepTwo}>
      <div className={styles.header}>
            <h1 className={styles.title}>Select your plan</h1>
            <p className={styles.exp}>You have the option of monthly or yearly billing</p>
      </div><br />
      <form id={styles.cards} onSubmit={handleSubmit}>
        <div>
          <div onClick={() => {setSelected('Arcade'); userData.selectedPlan = 'Arcade'}} className={styles.planCard} id={selected === 'Arcade' ? 'selected' : ''}>
            <img src={ArcadeIcon} alt="arcade" />
            <div className={styles.planInfo} id={styles.chosen}>
              <b>Arcade</b>
              <span className={styles.planPriced} id={styles.arcade}>{isYearly ? '$9/mo' : '$90/yr'}</span>
            </div>
            {
              !userData.isMonthly && (
                <span style={{fontSize: '14px', color: 'blue'}}>2 months free</span>
                
              )
            }
          </div>
          <div onClick={() => {setSelected('Advanced'); userData.selectedPlan = 'Advanced'}} className={styles.planCard} id={selected === 'Advanced' ? 'selected' : ''}>
            <img src={AdvancedIcon} alt="advanced" />
            <div className={styles.planInfo} id={styles.chosen}>
              <b>Advanced</b>
              <span className={styles.planPriced} id={styles.arcade}>{isYearly ? '$12/mo' : '$120/yr'}</span>
            </div>
            {
              !userData.isMonthly && (
                <span style={{fontSize: '14px', color: 'blue'}}>2 months free</span>
              )
            }
          </div>
          <div onClick={() => {setSelected('Pro'); userData.selectedPlan = 'Pro'}} className={styles.planCard} id={selected === 'Pro' ? 'selected' : ''}>
            <img src={ProIcon} alt="pro" />
            <div className={styles.planInfo} id={styles.chosen}>
              <b>Pro</b>
              <span className={styles.planPriced} id={styles.arcade}>{isYearly ? '$15/mo' : '$150/yr'}</span>
            </div>
            {
              !userData.isMonthly && (
                <span style={{fontSize: '14px', color: 'blue'}}>2 months free</span>
              )
            }
          </div>
        </div>
        <div className={styles.switcher}>
          <p className={styles.monthly} id={styles.active}>Monthly</p>
          <label className={styles.switch}>
            <input name="toggle" type="checkbox" onChange={handleToggle} />
            <span className={styles.slider} id={styles.round}></span>
          </label>
          <p className={styles.yearly}>Yearly</p>
        </div>

        <div className={styles.btns}>
          <button className={styles.nextBtn}>Next Step</button>
          <button onClick={handlePrevClick} className={styles.prevBtn}>Go back</button>
        </div>
      </form>
    </div>
  )
}

export default FormStepTwo
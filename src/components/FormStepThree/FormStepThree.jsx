import React, { useState } from 'react'
import styles from './FormStepThree.module.css'
import { useNavigate } from 'react-router-dom'
import { userData } from '../../utils/UserData'

const FormStepThree = () => {
  const navigate = useNavigate();
  const [checkedOne, setCheckedOne] = useState(false)
  const [checkedTwo, setCheckedTwo] = useState(false)
  const [checkedThree, setCheckedThree] = useState(false)

  

  const handlePrevClick = (e) => {
    navigate('/select-plan')

    userData.step = userData.step - 1;

  }

  const handleSubmit = () => {
    if (checkedOne){
      userData.addOns.push({addonName: 'online-service', addonPrice: userData.isMonthly ? '$1/mo' : '$10/yr'})
    }
    if (checkedTwo){
      userData.addOns.push({addonName: 'large-storage', addonPrice: userData.isMonthly ? '$2/mo' : '$20/yr'})
    }
    if (checkedThree){
      userData.addOns.push({addonName: 'customized-profile', addonPrice: userData.isMonthly ? '$2/mo' : '$20/yr'})
    }

    navigate('/summary')

    userData.step = userData.step + 1;
    console.log(userData)
  }

  const handleInputOne = (e) => {
    setCheckedOne(e.target.checked)
    console.log(checkedOne)
    
  }
  const handleInputTwo = (e) => {
    setCheckedTwo(e.target.checked)
    console.log(checkedTwo)
  }
  const handleInputThree = (e) => {
    setCheckedThree(e.target.checked)
    console.log(checkedThree)
  }

  return (
    <div className={styles.stp} id={styles.stepThree}>
      <div className={styles.header}>
              <h1 className={styles.title}>Pick add-ons</h1>
              <p className={styles.exp}>Add-ons help enhance your gaming experience.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.content}>
        <div className={styles.box} id='1'>
          <input type="checkbox" id={styles.online} checked={checkedOne} onChange={handleInputOne} className={checkedOne ? 'selected' : ''} />
            <div className={styles.description}>
							<label htmlFor="online">Online service</label>
							<small>Access to multiplayer games</small>
						</div>
						<p className={styles.price} id={styles.servicePrice}>{userData.isMonthly ? '+$1/mo' : '+$10/yr'}</p>
        </div>
        <div className={styles.box} id='2'>
          <input type="checkbox" id={styles.larger} checked={checkedTwo} onChange={handleInputTwo} />
            <div className={styles.description}>
							<label htmlFor="online">Larger Storage</label>
							<small>Extra 1TB of cloud save</small>
						</div>
						<p className={styles.price} id={styles.servicePrice}>{userData.isMonthly ? '+$2/mo' : '+$20/yr'}</p>
        </div>
        <div className={styles.box} id='3'>
          <input type="checkbox" id={styles.profile} checked={checkedThree} onChange={handleInputThree} />
            <div className={styles.description}>
							<label htmlFor="online">Customizable Profile</label>
							<small>Custom theme on your profile</small>
						</div>
						<p className={styles.price} id={styles.servicePrice}>{userData.isMonthly ? '+$2/mo' : '+$20/yr'}</p>
        </div>
        </div>
        
        <div className={styles.btns}>
          <button className={styles.nextBtn}>Next Step</button>
          <button onClick={handlePrevClick} className={styles.prevBtn}>Go back</button>
        </div>
      </form>
    </div>
  )
}

export default FormStepThree
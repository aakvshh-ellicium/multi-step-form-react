import React, { useEffect, useState } from 'react'
import styles from './FormStepFour.module.css'
import { useNavigate } from 'react-router-dom'
import { userData } from '../../utils/UserData'


const FormStepFour = () => {

  const navigate = useNavigate();

  const handlePrevClick = () => {
    navigate('/add-ons')
    userData.step = userData.step - 1;

  }
  const handleConfirm = () => {
    // users.push(userData)
    // console.log(users)
    let users = JSON.parse(localStorage.getItem("userData"));
    (!users) && (users = [])
    users.push(userData)

    localStorage.setItem('userData', JSON.stringify(users));

    navigate('/success')

    userData.step = 1;
  }

  const planPrice = Number(userData.selectedPlanPrice.replace('$', '').replace('/mo', '').replace('/yr', '')) 
  console.log(planPrice);

  const addonTotalArr = userData.addOns.map(e => Number(e.addonPrice.replace('$', '').replace('/mo', '').replace('/yr', '')))
  let total = 0;
  let addonTotal = 0;

  addonTotalArr.forEach(num => addonTotal = addonTotal + num)
  console.log(addonTotal)

  total = planPrice + addonTotal

  return (
    <div className={styles.stp} id={styles.stepFour}>
      <div className={styles.header}>
        <h1 className={styles.title}>Finishing up</h1>
        <p className={styles.exp}>Double-check everything looks OK before confirming.</p>
      </div>
      <div className={styles.selectionBox}>
        <div className={styles.selectionContainer}>
          <div className={styles.selectedPlan}>
            <div>
              <p className={styles.planName}>{userData.selectedPlan} {userData.isMonthly ? '(Monthly)' : '(Yearly)'}</p>
              <span onClick={() => navigate('/select-plan')} style={{fontSize: '13px', color: 'hsl(243, 100%, 62%)', textDecoration: 'underline', cursor: 'pointer'}}>Change</span>
            </div>
            <p className={styles.planPrice}>{userData.selectedPlanPrice}</p>
          </div>
          <hr />

          {userData.addOns.map(addon => (
            <div className={styles.addons}>
            <div className={styles.selectedAddon}>
              <span className={styles.serviceName}>{addon.addonName}</span>
              <span className={styles.servicePrice}>{addon.addonPrice}</span>
            </div>

          </div>
          ))}
          
        </div>
        <p className={styles.total}>Total (per {userData.isMonthly ? 'Month' : 'Year'}) <b>+${total}/{userData.isMonthly ? 'mo' : 'yr'}</b></p>

      </div>
      <div className={styles.btns}>
          <button onClick={handleConfirm} className={styles.nextBtn}>Confirm</button>
          <button onClick={handlePrevClick} className={styles.prevBtn}>Go back</button>
      </div>
    </div>
  )
}

export default FormStepFour
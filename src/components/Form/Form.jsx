import React, { useEffect } from 'react'
import styles from './Form.module.css'
import Sidebar from '../Sidebar/Sidebar'
import FormStepOne from '../FormStepOne/FormStepOne'
import FormStepTwo from '../FormStepTwo/FormStepTwo'
import FormStepThree from '../FormStepThree/FormStepThree'
import FormStepFour from '../FormStepFour/FormStepFour'
import FormStepFive from '../FormStepFive/FormStepFive'
import { Route, Routes } from 'react-router-dom'
import { userData, step } from '../../utils/UserData'

const Form = () => {
  
  return (
    <div className={styles.wrapper}>
        <div className={styles.form}>
            <div className={styles.formContainer}>
                <Sidebar  />
                <Routes>
                  <Route path='/' element={<FormStepOne />} />
                  <Route path='/select-plan' element={<FormStepTwo />} />
                  <Route path='/add-ons' element={<FormStepThree />} />
                  <Route path='/summary' element={<FormStepFour />} />
                  <Route path='/success' element={<FormStepFive />} />
                </Routes>
            </div>

        </div>
    </div>
  )
}

export default Form
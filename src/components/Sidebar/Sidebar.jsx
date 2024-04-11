import React, { useEffect, useRef, useState } from 'react'
import styles from './Sidebar.module.css'
import { userData, step } from '../../utils/UserData'
import { useLocation, useNavigate } from 'react-router-dom';



const Sidebar = () => {
    // const [active, setActive] = useState('active');
    const location = useLocation();
    const navigate = useNavigate();

    const path = location.pathname;
    console.log(path)

  return (
    <div className={styles.sidebar}>
        <div onClick={() => navigate('/')} className={`step ${path === '/' ? 'active' : ''}`}>
            <div className='circle ' id="1">1</div>
            <div className={styles.stepText}>
                <span>Step 1</span>
                <b id={styles.white}>Your info</b>
            </div>
        </div>
        <div onClick={() => navigate('/select-plan')} className={`step ${path === '/select-plan' ? 'active' : ''}`} >
            <div className='circle' id="2">2</div>
            <div className={styles.stepText}>
                <span>Step 2</span>
                <b id={styles.white}>Select Plan</b>
            </div>
        </div>
        <div onClick={() => navigate('/add-ons')} className={`step ${path === '/add-ons' ? 'active' : ''}`} >
            <div className='circle' id="3">3</div>
            <div className={styles.stepText}>
                <span>Step 3</span>
                <b id={styles.white}>Add-ons</b>
            </div>
        </div>
        <div onClick={() => navigate('/summary')} className={`step ${path === '/summary' ? 'active' : ''}`}>
            <div className='circle' id="4">4</div>
            <div className={styles.stepText}>
                <span>Step 4</span>
                <b id={styles.white}>Summary</b>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
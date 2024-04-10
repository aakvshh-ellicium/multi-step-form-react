import React, { useState } from 'react';
import styles from './FormStepOne.module.css';
import { useNavigate } from 'react-router-dom';
import { userData, step } from '../../utils/UserData';

const FormStepOne = ({active}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
                                                name: '',
                                                email: '',
                                                phone: ''
                                            });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error message when user starts typing
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // userData.step = userData.step + 1;
        // step = step + 1;
        const validationErrors = {};

        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.(?:[a-zA-Z]{2,}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)$/i;
        const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        
        
        if (!formData.name.trim()) {
            validationErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!emailPattern.test(formData.email)) {
            validationErrors.email = "Email is not valid";
        }
        if (!formData.phone.trim()) {
            validationErrors.phone = "Phone number is required";
        } else if (!phonePattern.test(formData.phone)) {
            validationErrors.phone = "Phone is not valid";
        }
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const formDataEntries = Object.entries(formData);
            formDataEntries.forEach(([key, value]) => {
                userData[key] = value;
            });
            navigate('/select-plan');
        }

        console.log(validationErrors)
        
        console.log(userData)

        
    };

    return (
        <div className={styles.stp} id={styles.stepOne}>
            <div className={styles.header}>
                <h1 className={styles.title}>Personal Info</h1>
                <p className={styles.exp}>Provide your name, email-address and phone number</p>
            </div>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    <div className={styles.label}>
                        <label htmlFor="name">Name</label>
                        {errors.name && <p className={styles.error}>{errors.name}</p>}
                    </div>
                    <input name='name' type="text" id={styles.name} placeholder='e.g. Stephen King' onChange={handleChange} />

                    <div className={styles.label}>
                        <label htmlFor="email">Email Address</label>
                        {errors.email && <p className={styles.error}>{errors.email}</p>}
                    </div>
                    <input name='email' type="email" id={styles.email} placeholder='e.g. stephenking@lorem.com' onChange={handleChange} />

                    <div className={styles.label}>
                        <label htmlFor="phone">Phone Number</label>
                        {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                    </div>
                    <input name='phone' type="tel" id={styles.phone} placeholder='e.g. +1 234 567 890' onChange={handleChange} />
                </div>

                <div className={styles.btns}>
                    <button type='submit' className={styles.nextBtn}>Next Step</button>
                </div>
            </form>
        </div>
    );
};

export default FormStepOne;
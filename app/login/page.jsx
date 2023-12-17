'use client'

import React, {useState, useEffect} from 'react'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import {app} from '../../config'
import { useRouter} from 'next/navigation'


export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [confirmatonResult, setConfirmationResult] = useState(null)
    const [otpSent, setOtpSent] = useState(false)

    const auth = getAuth(app);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'normal',
            'callback': () => {
              // Handle the callback logic here
              // For example, you can console.log or perform some other action
            },
            'expired-callback': () => {
              // Handle the expired-callback logic here
            },
        
      } )}
    
      
      
    }, [auth])

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }
    const handleOTPChange = (e) => {
        setOtp(e.target.value);
    }

    const handleSendOtp = async() => {
        try{
            const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g,'')}`;
            const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.recaptchaVerifier)
            setConfirmationResult(confirmation);
            setOtpSent(true);
            setPhoneNumber('');
            alert('otp has sent')
        }
        catch(error){
console.log(error)
        }
    };
    const handleOTPSubmit = async () => {
        try {
            await confirmatonResult.confirm(otp);
            setOtp('');
            router.push('/home');
        } catch (error) {
            console.log(error)
            
        }
    };
    return (
        <div className='flex justify-center flex-col items-center pb-10 text-black '>
            
            {!otpSent ? (
                <div id='recaptcha-container'></div>
            ): null}
            <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} placeholder='Mobile No.'
            className='border-none py-2 pr-3 rounded-md mb-4 w-[95%] bg-white'/>
            <input type="number" value={otp} onChange={handleOTPChange} placeholder='Enter OTP'  className='border-none mb-4 py-2 pr-5 rounded-md  w-[95%] bg-white'/>
            <button onClick={otpSent ? handleOTPSubmit: handleSendOtp} className={`bg-yellow-400 text-black rounded-md w-fit py-2 px-4 m-2`}
> 
{otpSent ? 'Submit OTP' : 'Send OTP'}
            </button>
        </div>
    )
 }
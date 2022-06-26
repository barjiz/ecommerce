import React, { useState } from 'react'
import { OtpVerify } from './OtpVerify';
import { PhoneAuth } from './PhoneAuth'
import { Signup } from './Signup'


export const StepForm = () => {

  const [phone_number, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [hash, setHash] = useState("");


  const [tabs, setTabs] = useState(1)

  const nextPage = () => {

    setTabs(tabs + 1)
  }


  const backPage = () => {
    setTabs(tabs - 1)
  }

  return (

    <div>

      {tabs === 1 && <PhoneAuth
        phone_number={phone_number}
        setPhoneNumber={setPhoneNumber}
        nextPage={nextPage}
        setHash={setHash}
        backPage={backPage} />}

      {tabs === 2 && <OtpVerify
        phone_number={phone_number}
        setPhoneNumber={setPhoneNumber}
        nextPage={nextPage}
        otp={otp}
        hash={hash}
        setHash={setHash}
        setOtp={setOtp}
        backPage={backPage} />}

      {tabs === 3 && <Signup
        phone_number={phone_number}
        setPhoneNumber={setPhoneNumber}
        nextPage={nextPage}
        backPage={backPage} />}

    </div>
  )
}

'use client'
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";



export default function CustomPhoneInput({onChange}) {


    const [value, setValue] = useState()
    
    const handleChange = (e)=>{
  
       setValue(e);
       onChange(value)   
    }

    return (
  <PhoneInput
       defaultCountry="RU"
       placeholder="Введите ваш номер"
       value={value}
       onChange={handleChange}
       style={{
        width:'80%',
        borderRadius:'5px'
    }}
      />
  );
}

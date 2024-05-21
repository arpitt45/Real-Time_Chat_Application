import { set } from 'mongoose';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useSignup = () => {
    const[loading, setloading] = useState(false);

    const signup = async({fullName, email, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, email, password, confirmPassword, gender})

        if(!success) return;

        setloading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({fullName, email, password, confirmPassword, gender})
            })

            const data = await res.json();
            if(data.error){
                throw new Error{data.error}
            }
            
            console.log(data)
        }
        catch (error) {
            toast.error(error.message)
        } finally {
            setloading(false);
        }
        
    };
    return {loading, signup};
}

export default useSignup


function handleInputErrors({fullName, email, password, confirmPassword, gender}) {
    if (!fullName || !email || !password || !confirmPassword || !gender ) {
        toast.error('Please fill in all fields!')
        return false
    }

    if (password, confirmPassword.length < 6) {
        toast.error('Password must be atleast 6 characters')
        return false
    }
    
    if (password !== confirmPassword) {
        toast.error('Password do not match')
        return false
    }
    return true
}
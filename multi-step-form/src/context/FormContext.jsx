import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export function useForm() {
    return useContext(FormContext);
}

export function FormProvider({ children }) {
    const [user, setUser] = useState({ name: '', email: '', phone: '' });
    const [plan, setPlan] = useState('arcade');
    const [billing, setBilling] = useState('monthly');
    const [addons, setAddons] = useState([]); 

    const value = {
        user,
        setUser,
        plan,
        setPlan,
        billing,
        setBilling,
        addons,
        setAddons,
    };

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
} 
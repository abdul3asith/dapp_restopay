import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
    const [value, setValue] = useState();

    useEffect(() => {
        const handleStorageChange = () => {
            setValue(localStorage.getItem(key));
            const prevValue = localStorage.getItem(key);
            if(prevValue) {
                setValue(JSON.parse(prevValue))
            }
            
        };

        handleStorageChange();

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key]);
    const updateValue = (_value) => {
        localStorage.setItem(key, JSON.stringify(_value))
        window.dispatchEvent(new Event('storage'))
        console.log(localStorage.getItem(key))
    }
   
    return [value ?? {}, updateValue];
    
}
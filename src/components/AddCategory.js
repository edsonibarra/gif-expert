import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); 

    const handleInputValue = (event) => {
        const value = event.target.value;
        setInputValue(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setCategories( categories => [  inputValue, ...categories, ]);
        setInputValue('');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                value={ inputValue }
                type='text'
                onChange={ handleInputValue }
                placeholder='Search Gif'
            />
        </form>
    )
}

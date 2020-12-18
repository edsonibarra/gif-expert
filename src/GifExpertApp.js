import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';






export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    // Funcion para hacer la peticion al primer renderizado.
    


    // useEffect(() => {
        
    //     //Llamada a funcion para hacer la peticion al primer renderizado. 
    //     getGifs();

    // }, []);

    return (
        <div className='p-5'>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <div className='container'>
            {
                categories.map( (eachCategory,idx) => {
                    return <GifGrid key={idx} category={ eachCategory }/>
                })
            }
            </div>
                        
        </div>
    )
}

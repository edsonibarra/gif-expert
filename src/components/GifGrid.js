import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {category} ) => {

    const {data,loading} = useFetchGifs( category );

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category).then(setImages)
    // }, [category])
    

    // const getGifs = async () => {
    //     const api_key = 'eGQvA0NGWINhYKTO6RpXjV4gu79F89l4';
    //     // const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=Rick+and+Morty&limit=10`;
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=${api_key}`;
    //     const response = await fetch( url );
    //     const {data} = await response.json();
    //     const newObj = data.map( obj => {
    //         return {
    //             id: obj.id,
    //             url: obj.images?.downsized_medium.url,
    //             title: obj.title
    //         }
    //     })
    //     setImages( newObj );
    // }
    

    
    return (
        <div>
            <h2>{ category[0].toUpperCase() + category.substring(1) }</h2>
            {
                loading && <h5>Cargando</h5>
            }
            <div className='row'>
                {
                    data.map( img => {
                        return (
                            <GifGridItem 
                                key={ img.id }
                                {...img}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

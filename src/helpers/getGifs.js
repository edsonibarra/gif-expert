// Helpers son funciones que hacen cierto trabajo en especifico. 
// Toman argumentos y los procesan. 
// No hace falta que redibujen el estado. 

export const getGifs = async (category) => {
        
    const api_key = 'eGQvA0NGWINhYKTO6RpXjV4gu79F89l4';
    // const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=Rick+and+Morty&limit=10`;
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=${api_key}`;

    const response = await fetch( url );
    const {data} = await response.json();

    const newObj = data.map( obj => {
        return {
            id: obj.id,
            url: obj.images?.downsized_medium.url,
            title: obj.title
        }
    })
    return newObj;
    // setImages( newObj );
}
import axios from 'axios';

const SearchImages = async(term)=>{
   const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers :{ 
            Authorization : 'Client-ID D-BM8D9Bw9EJt2fSiXvZ7ewEb2WksHWbkjgJium6_CU'
        },
        params :{
           query : term 
        },
    });
   
    
    return response.data.results;
}

export default SearchImages;
import {books} from '../productList/productLis';

export const getFetch = new Promise((accept, reject)=>{
    setTimeout(() => {
        accept(books)      
        reject('No results found')  
    }, 2000);
})

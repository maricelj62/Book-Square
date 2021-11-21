const books = [
    { id: 1, imageURL:'https://m.media-amazon.com/images/I/51MuyxVBayL.jpg' ,category: 'Historical novels', name: "El alcaravan", price: 6.37 },
    { id: 2, imageURL:'https://m.media-amazon.com/images/I/51QP4oJRjoL.jpg' ,category: 'Mental health', name: "El cerebro y la inteligencia emocional", price: 6.99 },
    { id: 3, imageURL:'https://m.media-amazon.com/images/I/41SuvjWG61L.jpg' ,category: 'Biographies', name: "Led Zeppelin: The Biography", price: 14.99 },
    { id: 4, imageURL:'https://m.media-amazon.com/images/I/51C9ISU-bhL.jpg' ,category: 'Historical novels', name: "Pasión india", price: 7.43 },
];

export const getFetch = new Promise((accept, reject)=>{
    setTimeout(() => {
        accept(books)      
        reject('No results found')  
    }, 2000);
})

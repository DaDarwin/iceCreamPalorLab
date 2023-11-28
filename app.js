


/**
@typedef {{name: string, price:number, category: string, link: string}} Item
 */



let shop = [
        toppings = [  
            Item = {
                name: "sprinkles",
                price: 10,
                category:"toppings",
                link: ''},
            
        ],
        vessels = [],
        iceCream = [],
]



let cart = []

const cart_item ={
    name:'',
    qty:0,
    price:0,
}
// function addToShop(){
//     let item ={
//         name:document.
//     }
// }

function addToCart(category, name){
    
    item = shop[category].find( item => item.name == name)

    cart_item.name = item.name
    cart_item.qty ++
    cart_item.price = item.price
    cart += cart_item
}



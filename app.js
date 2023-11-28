


/**
@typedef {{name: string, price:number, link: string}} Item
 */

/**
@typedef {{name: string, price:number, qty:number}} Cart_Item
 */

let shop = [
        toppings = [  
            Item = {
                name: "sprinkles",
                price: 10,
                link: ''},
            
        ],
        vessels = [],
        iceCream = [],
]



let cart = []


function addToCart(category, name){
    
    Item = shop[category].find( Item => Item.name == name)

    if(cart.find(Cart_Item => Cart_Item.name == name) != undefined){
        let item = cart.find(Cart_Item => Cart_Item.name == name)
        console.log(item)
        index = cart.indexOf(item)
        console.log(index)
        cart[index].qty ++
    }
    
    else{
        let Cart_Item = {
        name: Item.name,
        price: Item.price,
        qty: 1}
        cart.push(Cart_Item)
    }
    console.log(cart)
}   




// function addToShop(){
//     let Item ={
//         name:document.getElementById.input
//         price:
//     }
// }
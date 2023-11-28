


/**
@typedef {{name: string, price:number,category:string, link: string}} Item
 */

/**
@typedef {{name: string, price:number, qty:number}} Cart_Item
 */

let shop = [ 
            Item = {
                name: "Sprinkles",
                price: 2,
                category:'toppings',
                link: ''},
            Item = {
                name: "Chocolate Chips",
                price: 3,
                category:'toppings',
                link: ''},
            Item = {
                name: "Gummy Worms",
                price: 2,
                category:'toppings',
                link: ''},    
            Item = {
                name: "Waffle Cone",
                price: 3,
                category:'vessels',
                link: ''},
            Item = {
                name: "Waffle Bowl",
                price: 4,
                category:'vessels',
                link: ''},
            Item = {
                name: "Dipped Cone",
                price: 5,
                category:'vessels',
                link: ''},
            Item = {
                name: "Vanilla",
                price: 3,
                category:'iceCream',
                link: ''},
            Item = {
                name: "Chocolate",
                price: 4,
                category:'iceCream',
                link: ''},
            Item = {
                name: "Strawberry",
                price: 4,
                category:'iceCream',
                link: ''},
            Item = {
                name: "Rocky Road",
                price: 5,
                category:'iceCream',
                link: ''},
            Item = {
                name: "Mint",
                price: 3,
                category:'iceCream',
                link: ''},
            Item = {
                name: "Birthday Cake",
                price: 5,
                category:'iceCream',
                link: ''}
    ]
    
    
    // function addToShop(){
    //     let Item ={
    //         name:document.getElementById.input
    //         price:
    //     }
    // }

    // function drawStore(){
    //     shop.forEach(
    //          x = (`<button class='col-4 btn btn-outline-primary' onclick="addToCart(${Item.name})">
    //             <div><img src="${Item.link}" alt="${Item.name}"></div>
    //             <div>
    //                 <span>${Item.name}</span>
    //                 <span>$${Item.price}</span>
    //             </div>           
    //         </button>`)

    //         document.getElementById(Item.category).innerHTML += x)
    // }

    function drawStore(){
        for(i=0; i<shop.length;i++){
             x = (`<button class='col-4 btn btn-outline-primary' onclick="addToCart('${shop[i].name}')">
                <div><img src="${shop[i].link}" alt="${shop[i].name}"></div>
                <div>
                    <span>${shop[i].name}</span>
                    <span>$${shop[i].price}</span>
                </div>           
            </button>`)

            document.getElementById(shop[i].category).innerHTML += x
    }}

    let cart = []
    
    function addToCart(name){
        
        Item = shop.find( Item => Item.name == name)
        
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
        drawCart()
        drawTotal()
    }   
    
    function drawCart(){
        // FIXME weird bug where it increases the number of divs it has
        for(i=0; i<cart.length;i++){
            // debugger

            if(cart[i].qty > 1){
                const elm = document.getElementById(cart[i].name)
                elm.remove()*10000}

            x = (`<h5 id="${cart[i].name}" class="row d-flex justify-content-between">
            <Span class="col-3">${cart[i].name}</Span>
            <Span class="col-3"><i class="btn mdi mdi-delete" onclick="del('${cart[i].name}')"></i>${cart[i].qty}</Span>
            <Span class="col-3">${cart[i].price}</Span>                
            <Span class="col-3">${cart[i].qty*cart[i].price}</Span>
            </h5>`)
                
            document.getElementById('cart').innerHTML += x}
        }
    

    function drawTotal(){
        total = 0
        for(i=0; i<cart.length; i++){
            total += (cart[i].price * cart[i].qty)
        }
        document.getElementById('Total').innerText = `$${total}`
    }

    function del(name){
        let item = cart.find(Cart_Item => Cart_Item.name == name)
        i = cart.indexOf(item)
        cart[i].qty--

        if (cart[i].qty <= 0){
            const elm = document.getElementById(cart[i].name)
            elm.remove()
        }
        drawCart()
    }
    
    
    drawStore()
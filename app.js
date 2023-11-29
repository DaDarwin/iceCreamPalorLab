


/**
@typedef {{name: string, price:number,category:string, link: string}} Item
 */

/**
@typedef {{name: string, price:number, qty:number}} Cart_Item
 */
/**
 * @type {Item[]}
 */
let shop = [ 
            {name: "Sprinkles",
            price: 2,
            category:'toppings',
            link: ''},
           
            {name: "Chocolate Chips",
            price: 3,
            category:'toppings',
            link: ''},
            
            {name: "Gummy Worms",
            price: 2,
            category:'toppings',
            link: ''},    
            
            {name: "Waffle Cone",
            price: 3,
            category:'vessels',
            link: ''},
            
            {name: "Waffle Bowl",
            price: 4,
            category:'vessels',
            link: ''},
            
            {name: "Dipped Cone",
            price: 5,
            category:'vessels',
            link: ''},
            
            {name: "Vanilla",
            price: 3,
            category:'iceCream',
            link: ''},
            
            {name: "Chocolate",
            price: 4,
            category:'iceCream',
            link: ''},
            
            {name: "Strawberry",
            price: 4,
            category:'iceCream',
            link: ''},
            
            {name: "Rocky Road",
            price: 5,
            category:'iceCream',
            link: ''},
            
            {name: "Mint",
            price: 3,
            category:'iceCream',
            link: ''},
            
            {name: "Birthday Cake",
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
             z = (`<button class='col-4 btn btn-outline-primary' onclick="addToCart('${shop[i].name}')">
                <div><img src="${shop[i].link}" alt="${shop[i].name}"></div>
                <div>
                    <span>${shop[i].name}</span>
                    <span>$${shop[i].price}</span>
                </div>           
            </button>`)

            document.getElementById(shop[i].category).innerHTML += z
    }}
/**
 * @type {Cart_Item[]}
 */
    let cart = []
    
    function addToCart(name){
        
        Item = shop.find( Item => Item.name == name)
        
        if(cart.find(Cart_Item => Cart_Item.name == name)){
            let item = cart.find(Cart_Item => Cart_Item.name == name)
            index = cart.indexOf(item)
            cart[index].qty ++
            updateCart(cart[index])
        }
    
        else{
            let Cart_Item = {
                name: Item.name,
                price: Item.price,
                qty: 1}
            cart.push(Cart_Item)
            drawCart(Cart_Item)
        }
        console.log(cart)
        drawTotal()
    } 

    let x=''
    
    // FIXME adding a new type sets qty back to 1 until it's manually updated
    function drawCart(i){
        
        x += 
        `
        <h5 id="${i.name}" class="row d-flex justify-content-between">
        <Span class="col-4"><i class="btn mdi mdi-delete text-danger m-0 p-0" onclick="del('${i.name}')"></i>${i.name}</Span>
        <Span class="col-2">${i.qty}</Span>
                <Span id="qty" class="col-3">$${i.price}</Span>                
                <Span id="total "class="col-3">$${i.qty*i.price}</Span>
            </h5>
            `
            
            document.getElementById('cart').innerHTML = x
            
            // NOTE its fixed now but i hate it
            for(i=0;i<cart.length;i++){
                updateCart(cart[i])}
        }

        function updateCart(i){
            let cartChildren = document.getElementById(i.name).children
            
            console.log(cartChildren[1])
            cartChildren[1].innerText = i.qty
            console.log(cartChildren[1])

            console.log(cartChildren[3])
            cartChildren[3].innerText = `$${i.qty*i.price}`
            console.log(cartChildren[3])}
    

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
        updateCart(cart[i])
    }
    
    
    drawStore()

    function logShop(){
        console.log(shop)
    }

    function logCart(){
        console.log(shop)
    }








    // function drawCart(i){
        
    //     x += `<h5 id="${i.name}" class="row d-flex justify-content-between">
    //     <Span class="col-3">${i.name}</Span>
    //     <Span class="col-3"><i class="btn mdi mdi-delete" onclick="del('${i.name}')"></i>${i.qty}</Span>
    //     <Span class="col-3">$${i.price}</Span>                
    //     <Span class="col-3">$${i.qty*i.price}</Span>
    //     </h5>`
        
    //     document.getElementById('cart').innerHTML = x
    // }
    // function updateCart(i){
    //     let cartElm = document.getElementById(i.name)
    //     console.log(cartElm)
    //     cartElm.childNodes[3].innerText = i.qty
    //     cartElm.childNodes[7].innerText = `$${i.qty*i.price}`
    // }
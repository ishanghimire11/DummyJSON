const base_url = 'https://dummyjson.com/products?skip=0&limit=60'
const containers = document.getElementById("containers")
const hamburger = document.getElementById("hamburger")
const homeMenu = document.getElementById("home-menu")

const fetchdummy = async function () {

    const fetching = await fetch(base_url)
    const dummydata = await fetching.json()
    let products = dummydata.products
    console.log(products)

    const mainArr = products.map(({ id, title, price, description, rating, thumbnail, images }) => {
        return { "prId": id, "prTitle": title, "prPrice": price, "prDescription": description, "prRating": rating, "prThumbnail": thumbnail, "primages": images[0] }
    })
    console.log(mainArr)




    const gg = await mainArr.map((product) => {

        let addingPokemonsOnTable =

            `<div class="m-8 bg-gray-200 rounded-2xl overflow-hidden p-4 shadow-lg w-full sm:w-full lg:w-1/2 xl:w-1/4 hover:shadow-2xl">
                
                <span>${product.prId}</span>
                <p class="text-xl font-bold mr-0 mt-4">${product.prTitle}</p> 
                <img class="my-8 rounded-2xl md:w-4/5" src="${product.prThumbnail}" />
                <p class="my-8 lg:text-xl">${product.prDescription}</p>
                <span class="my-4 lg:text-xl">Price - Only $${product.prPrice}</span> 
                <p class="lg:text-xl mt-8">Rating - ${product.prRating}</p>
                
                <button class="border-2 bg-blue-600 text-white w-full block p-2 my-8 rounded-xl text-center sm:w-1/4 md:w-1/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 hover:bg-white hover:text-blue-600 transition ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  inline">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg> BUY NOW </button>
                
        
            </div>`

        containers.innerHTML += addingPokemonsOnTable


    })
}


fetchdummy()


hamburger.addEventListener("click", () => {
    if (homeMenu.classList.contains("hidden")) {
        homeMenu.classList.remove("hidden")
    }
    else {
        homeMenu.classList.add("hidden")
    }
})



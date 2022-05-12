// Names of restaurants
const titles = {
    ribLickers: `Rib Lickers`,
    bigMan: `Big Man BBQ`,
    yanceys: `Yancey's Gastropub`,
    galeNDales: `Gale N' Dale's`,
    fineArtsBistro: `Fine Arts Bistro`,
    georgeJs: `George J's`,
    familyStyle: `Family Style`,
    mjkFeedMeal: `MJK Feed Meal`,
    ritterHouse: `Ritter House`,
    kanhaKafe: `Kanha Kafe`,
    ajs: `AJ's`,
    bbqHut: `The Bar-B-Q Hut`,
    cowboys: `Cowboy's Country Cooking`,
    bullys: `Bully's`,
    newCentury: `New Century Buffet`,
    smokinEats: `Smokin' Eats`,
    bestDonuts: `Best Donuts`,
    sweetheartBakery: `Sweetheart Bakery`,
    littleTaste: `A Little Taste of Texas`
}
// Food types for each restaurant
const foodSpecial = {
    burger: [titles.yanceys, titles.kanhaKafe, titles.ajs, titles.cowboys, titles.littleTaste],
    asian: [titles.familyStyle, titles.kanhaKafe, titles.newCentury],
    bbq: [titles.ribLickers, titles.bigMan, titles.bbqHut,],
    fried: [titles.galeNDales, titles.mjkFeedMeal, titles.ritterHouse, titles.cowboys, titles.bullys, titles.littleTaste],
    sandwiches: [titles.yanceys, titles.fineArtsBistro, titles.ritterHouse, titles.ajs, titles.smokinEats],
    anything: [titles.yanceys, titles.fineArtsBistro, titles.familyStyle, titles.kanhaKafe, titles.newCentury, titles.littleTaste],
    breakfast: [titles.galeNDales, titles.georgeJs, titles.fineArtsBistro, titles.georgeJs, titles.ritterHouse, titles.cowboys, titles.bestDonuts, titles.sweetheartBakery]
}
// Website links for all the restaurants
const websiteLinks = {
    ribLickers: `https://riblickers.com/`,
    bigMan: `https://big-man-bbq.hub.biz/`,
    yanceys: `https://yanceysbrewery.com/`,
    galeNDales: `https://www.menupix.com/kentucky/restaurants/1701647/Gale-n-Dales-Glasgow-KY`,
    fineArtsBistro: `https://www.facebook.com/fineartsbistro/`,
    georgeJs: `https://www.facebook.com/George-Js-On-The-Square-100867173290749/`,
    familyStyle: `http://glasgowfamilystylerestaurant.com/home/menu/`,
    mjkFeedMeal: `https://www.facebook.com/FEEDMEAL/`,
    ritterHouse: `http://ritterhouserestaurant.com/`,
    kanhaKafe: `https://www.facebook.com/KanhaKafeGlasgow/`,
    ajs: `https://www.facebook.com/AJS-Restaurant-INC-327771524581522/`,
    bbqHut: `https://thebarbqhut.com/?fbclid=IwAR3ZSn4VA6_5rYUO7rX7J2Co3xuAh9W4M3NaToXZGdiX8-N48yYKg1CLARY`,
    cowboys: `https://www.facebook.com/Cowboys-Country-Cookin-1827114997584354/`,
    bullys: `https://bullys-on-main-st.business.site/?fbclid=IwAR3MixKACKgk2FobcHvQgCQLIb72ETkyiGXpOAPhf1RV4mmUC9PDEZJsOvs`,
    newCentury: `https://www.newcenturyshelbyville.com/`,
    smokinEats: `https://www.facebook.com/LetsGetCooking1/`,
    bestDonuts: `https://www.facebook.com/profile.php?id=100057331486704`,
    sweetheartBakery: `https://www.facebook.com/sweetheartbakeryglasgow/`,
    littleTaste: `https://www.facebook.com/A-Little-Taste-of-Texas-442586605783554/`
}

// Functions
// Function to remove chef
const chef = document.querySelector(`#chef`)
function removeChef() {
    chef.remove()
    console.log(`Removed Chef`)
}
// Function to remove description
const description = document.querySelector(`#chefDescript`)
function removeDescription() {
    description.remove()
    console.log(`Removed Description`);
}
// Function to remove chef text bubble 
const bubble = document.querySelector(`#textBubble`)
function removeBubble(){
    bubble.remove()
}
// Function to Create Restaurant Responses
const restaurant = document.querySelector(`.restaurantList`)
function createRestaurant() {
    const restaurantTitle = document.createElement(`h2`)
    restaurant.append(restaurantTitle)
    restaurantTitle.innerText = titles.kanhaKafe
    console.log(`Create restaurant worked`);
}
// Burger Button Functions
const burgerButton = document.querySelector(`#foodButtons>#burgers`)

burgerButton.onclick = () => {
    removeChef()
    removeDescription()
    createRestaurant()
    removeBubble()
}
// Asian button functions
const asianButton = document.querySelector(`#asian`)

asianButton.onclick = () => {
    removeChef()
    removeDescription()
    createRestaurant()
    removeBubble()
}
// BBQ button functions
const bbqButton = document.querySelector(`#bbq`)

bbqButton.onclick = () => {
    removeChef()
    removeDescription()
    createRestaurant()
    removeBubble()
}

// Fried food button functions
const friedButton = document.querySelector(`#fried`)

friedButton.onclick = () => {
    removeChef()
    removeDescription()
    createRestaurant()
    removeBubble()
}

// Breakfast button functions
const breakfastButton = document.querySelector(`#breakfast`)

breakfastButton.onclick = () => {
    removeChef()
    removeDescription()
    createRestaurant()
    removeBubble()
}
// Sandwich button functions
const sandwichButton = document.querySelector(`#sandwich`)
sandwichButton.onclick = () => {
    removeChef()
    removeDescription()
    createRestaurant()
    removeBubble()
}
// Anything button functions
const anythingButton = document.querySelector(`#anything`)

anythingButton.onclick = () => {
    removeChef()
    removeDescription()
    createRestaurant()
    removeBubble()
}

// Basic object template
const objectName = {
    ribLickers: ``,
    bigMan: ``,
    yanceys: ``,
    galeNDales: ``,
    fineArtsBistro: ``,
    georgeJs: ``,
    familyStyle: ``,
    mjkFeedMeal: ``,
    ritterHouse: ``,
    kanhaKafe: ``,
    ajs: ``,
    bbqHut: ``,
    cowboys: ``,
    bullys: ``,
    newCentury: ``,
    smokinEats: ``,
    bestDonuts: ``,
    sweetheartBakery: ``,
    littleTaste: ``
}
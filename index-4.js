function productDetails(productName, price, isAvailable) {
    const availability = isAvailable? "available":"not available";
    return(`The ${productName} costs $${price}. It is ${availability}`)
    
}
console.log(productDetails("phone", 99.9, true))
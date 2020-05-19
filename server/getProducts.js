const products = require('../products.json')



const getProducts = (req, res) => {
    // console.log('I GOT A REQUEST ON /api/products')
    const { price } = req.query

    if (price) {
        const filteredPrice = products.filter(element => element.price >= parseInt(price))
        return res.status(200).send(filteredPrice)
    }
    res.status(200).send(products)
}

// console.log(products)



module.exports = getProducts
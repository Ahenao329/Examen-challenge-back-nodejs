const Product = require('../models/product')

const getProducts = async(req, res) => {

    const product = await Product.find();

    res.json({
        ok: true,
        product
    })

}

const postProducts = async(req, res) => {

    const { title, description, price, images } = req.body

    const product = new Product( req.body );

    await product.save();

    res.json({
        ok: true,
        product
    })

}

module.exports = {
    getProducts,
    postProducts
}
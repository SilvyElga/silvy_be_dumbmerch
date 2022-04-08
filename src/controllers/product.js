const {  product, User, category, categoryProduct } = require ('../../models');

exports.addProduct = async (req, res) => {
    
    try {

    await product.create(req.body);

    res.send({
        status:'succes',
        massaage: 'add user finished'
    });
        
    } catch (error) {
        console.log(error)
        res.send({
            status:'failed',
            massage:'server error'
        })
    }
    
}

exports.getProduct = async (req, res) => {
    
    try {

    const data = await product.findAll({
        include:{
            as:'User',
            model: User
        }
    });

    res.send({
        status:'succes',
        data: {
            data,
        }
    });
        
    } catch (error) {
        console.log(error)
        res.send({
            status:'failed',
            massage:'server error'
        })
    }
    
}

exports.getProducts = async (req, res) => {
    
    try {

    const data = await product.findAll();

    res.send({
        status:'succes',
        succes: {
            data
        }
    });
        
    } catch (error) {
        console.log(error)
        res.send({
            status:'failed',
            massage:'server error'
        })
    }
    
}

exports.getDetail = async (req, res) => {
    
    try {

        const id = req.params.id

    const data = await product.findOne({
        where: {
            id
        },
    });

    res.send({
        status:'succes',
        succes: {
            data
        }
    });
        
    } catch (error) {
        console.log(error)
        res.send({
            status:'failed',
            massage:'server error'
        })
    }
    
}

exports.updateProduct = async (req, res) => {
    
    try {

        const id = req.params.id

        const newData = req.body

    await product.update(newData, {
        where: {
            id
        },
    });

    res.send({
        status:'succes',
        massage:`update product id: ${id} finished`
    });
        
    } catch (error) {
        console.log(error)
        res.send({
            status:'failed',
            massage:'server error'
        })
    }
    
}

exports.deleteProduct = async (req, res) => {
    
    try {

        const id = req.params.id

    await product.destroy({
        where: {
            id
        },
    });

    res.send({
        status:'succes',
        massaage: `delete product id ${id} finished`
    });
        
    } catch (error) {
        console.log(error)
        res.send({
            status:'failed',
            massage:'server error'
        })
    }
    
}


exports.getcategoryProduct = async (req, res) => {
    
    try {

    const data = await product.findAll({
        include: [
            {
            model:User,
            as:'User',
        },
        {
            model:category,
            as:'category',
            through: {
                model: categoryProduct,
                as: 'bridge'
            }
        }
    ] 
  
    });

    res.send({
        status:'succes',
        succes: {
            data
        }
    });
        
    } catch (error) {
        console.log(error)
        res.send({
            status:'failed',
            massage:'server error'
        })
    }
    
}
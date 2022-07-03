import React, { useEffect } from 'react'
import { getProductsAction } from '../../redux/Actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CreateProduct from './CreateProduct';



const Product = () => {

    const products = useSelector((state) => state)
    const dispach = useDispatch()
    console.log(products);

    useEffect(() => {
        dispach(getProductsAction())
    }, [])




    return (
        <div className="container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 my-4">
                        <Link to="/product/create">
                            Create Product
                        </Link>
                    </div>
                </div>
                {/* <div className="row">
                    {
                        products &&
                        products.map((product) => (
                            <div key={product.id} className="col-lg-3 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <span>{product.name}</span>
                                        <img className='img-fluid' src={product.photo} alt="" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="row text-center">
                                            <div className="col-lg-6">Edit</div>
                                            <div className="col-lg-6">Delete</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                    <div className="col-lg-9">

                    </div>

                </div> */}
            </div>

        </div>
    )
}

export default Product
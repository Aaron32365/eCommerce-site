import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { detailsProduct } from '../actions/productActions'

function ProductScreen(props){
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails)
    const {product, loading, error} = productDetails
    const dispatch = useDispatch()

    useEffect( ()=> {
        dispatch(detailsProduct(props.match.params.id))
        return () =>{
        }
    },[])

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    return (
    <div>
        <div className="back-to-results">
            <Link to="/"> Back to results</Link>
        </div>
        {loading? <div>Loading...</div>:
        error? <div>{error}</div>:
        (
            <div className="details">
            <div className="details-image">
                <img className='shadow' src={"/" + product.image} alt="product"/>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.numReviews} Reviews)
                    </li>
                    <li>
                        Price: <b>${product.price}</b>
                    </li>
                    Description:
                    <div>
                        {product.description}
                    </div>
                </ul>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: {product.price}
                        </li>
                        <li>
                            Status: {product.countInStock > 0 ? "In Stock": "Out of Stock"}
                        </li>
                        <li>
                            Qty: <select value={qty} onChange={(e)=> {setQty(e.target.value)}}>
                                {[...Array(product.countInStock).keys()].map(stockCount =>
                                    <option key={stockCount+1} value={stockCount+1}>{stockCount+1}</option>
                                    )}
                            </select>
                        </li>
                        <li>
                            {
                            product.countInStock > 0 && <button onClick={handleAddToCart} className="button primary">Add to Cart</button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>   
        )
        }
    </div>
    )
}

export default ProductScreen
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../semantic-ui/style.css'

const ProductComponent = () => {
    const products = useSelector(state => state.ProductReducer.products);

    const renderList = products.map((product,index) => {
        const { id, title, price, category, image } = product

        return (
            <>
                <div key={index} className="ui  four wide column" >
                    <Link to={`/product/${id}`}>
                        <div className="ui centered link cards" >
                            <div className="card">
                                <div className="image">
                                    <img src={image} alt={title}/>
                                </div>
                                <div className="content">
                                    <div className="header">{title}</div>
                                    <div className="price">{`$ ${price}`}</div>
                                    <div className="category">{category}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </>
)
})
return <>{renderList}</>

}

export default ProductComponent


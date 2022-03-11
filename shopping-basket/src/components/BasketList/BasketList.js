import React from 'react';
import { ProductContext, useContext } from '../Context/Context';

const BaskedList = () => {

    const { products, setProducts, setShowResult, setPriceSum, priceSum, numberAddProducts } = useContext(ProductContext);

    const priceCalculator = () => {
        const priceCalculater = products.reduce((data, element) => (data = data + element.qty * element.price), 0);
        setPriceSum(Number(priceCalculater.toFixed(2)))
    }

    const getCheckout = () => {
        setShowResult({
            showBasket: true,
            showBasketList: true,
            showCheckout: true,
            showComplete: true,
            showBasketMessage: true,
        })
        priceCalculator()
    }

    const clearBasket = () => {
        setShowResult({
            showBasket: true,
            showBasketList: false,
            showCheckout: false,
            showComplete: false,
            showBasketMessage: false,
        })

        setProducts(
            products.map((element) => {
                element.qty = 0;
                return element;
            })
        )
    }

    const addBasket = ({ name }) => {
        setProducts(
            products.map((element) => {
                if (element.name === name) {
                    element.qty += 1;
                } else {
                    element.qty
                }
                return element;
            })
        )
        priceCalculator()
    }

    const removeBasket = ({ name, price }) => {
        setProducts(
          products.map((element) => {
            if (element.name === name) {
                element.qty -= 1;
            } else element.qty;
            return element;
          })
        )

        setPriceSum(Number((priceSum - price).toFixed(2)))
        
        if (numberAddProducts === 1) {
            setShowResult({
                showBasket: true,
                showBasketList: false,
                showCheckout: false,
                showComplete: false,
                showBasketMessage: false,
            })
        }
    }

    return(
        <ul className="list-group mb-3 js-basket-items basket-items">
            {products && 
                products
                    .filter((element) => element.qty > 0)
                    .map((data, index) => (
                            <li key={data._id} className="list-group-item p-3">
                                <p className="mb-0 float-left">
                                    <strong>{data.name}</strong>
                                    <span className="text-muted basket-qty"> qty: {data.qty}</span>
                                </p>
                                <div className="increment-btns float-right">
                                    <span 
                                        className="btn btn-outline-danger btn-sm btn-increment js-remove-item" 
                                        data-type="remove-item" 
                                        data-name="Peas"
                                        style={{marginRight: '5px'}}
                                        onClick={() => removeBasket({name: data.name, price: data.price})}
                                        >
                                            -
                                        </span>
                                    <span 
                                        className="btn btn-outline-success btn-sm btn-increment js-remove-item" 
                                        data-type="add-item" 
                                        data-name="Peas"
                                        onClick={() => addBasket({name: data.name})}
                                        >
                                            +
                                        </span>
                                </div>
                            </li>
                    ))}   
            <div className="your-basket_buttons js-reveal-step1 show">
                <button className="js-checkout btn btn-success btn-sm" style={{margin: '10px 5px 10px 0'}} onClick={getCheckout}>Checkout </button> 
                <button className="js-clear btn btn-outline-info btn-sm" style={{margin: '10px 5px 10px 0'}} onClick={clearBasket}>Clear basket </button>
            </div>   
        </ul>
    )
}

export default BaskedList;
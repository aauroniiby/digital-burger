import React, { Component } from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'
class OrderSummary extends Component{
    componentDidUpdate(){
        console.log('[OrderSummary] will update');
        
    }
    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>
        })
        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>burger with following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p>Continue to Chekout</p>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <Button btnType={"Danger"} clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType={"Success"} clicked={this.props.purchaseCountinue}>CONTINUE</Button>
            </Auxiliary>
        )
    }
}

export default OrderSummary
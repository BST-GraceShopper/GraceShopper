import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CartHeader} from './nav'
import CartList from './CartList'
import CartSummary from './cart/CartSummary'
import Checkout from './Checkout'
import {getCart} from '../store/'

class Cart extends Component {
  componentDidMount() {
    const {getCart, user} = this.props
    const token = window.localStorage.getItem('guestToken')
    getCart(user.id || token)
  }
  render() {
    const {cart} = this.props
    return (
      <div style={{color: 'white'}}>
        <CartHeader />
        <div id="cartBody">
          <CartList cart={cart} />
          <CartSummary />
          <Checkout />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({wines, cart, user}) => {
  return {wines, cart, user}
}
const mapDispatchToProps = dispatch => {
  return {
    getCart(userId) {
      dispatch(getCart(userId))
      console.log('get cart success')
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

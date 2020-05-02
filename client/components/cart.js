import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CartHeader} from './nav'
import CartList from './cart/CartList'
import CartSummary from './cart/CartSummary'
import {getCart} from '../store/'

class Cart extends Component {
  componentDidMount() {
    const {getCart, user} = this.props
    if (user.id) {
      getCart(user.id)
    }
  }
  render() {
    const {cart} = this.props
    return (
      <div style={{color: 'white'}}>
        <CartHeader />
        <div id="cartBody">
          <CartList cart={cart} />
          <CartSummary />
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

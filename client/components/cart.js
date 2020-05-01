import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CartHeader} from './nav'
import CartList from './cart/CartList'
import {getCart} from '../store/'

class Cart extends Component {
  componentDidMount() {}
  render() {
    const {getCart, user, cart} = this.props
    console.log(cart)
    if (user.id) {
      getCart(user.id)
    }
    return (
      <div style={{color: 'white'}}>
        <CartHeader />
        <CartList cart={cart} />
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

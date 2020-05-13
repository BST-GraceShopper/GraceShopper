import React, {Component, createRef} from 'react'
import {connect} from 'react-redux'
import {CartHeader} from './nav'
import CartList from './CartList'
import CartSummary from './cart/CartSummary'
import Checkout from './Checkout'
import {Typography, Paper, Card} from '@material-ui/core'
import {getCart} from '../store/'
import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky
} from 'semantic-ui-react'

class Cart extends Component {
  componentDidMount() {
    const {getCart, user} = this.props
    const token = window.localStorage.getItem('guestToken')
    getCart(user.id || token)
  }
  render() {
    const contextRef = createRef()
    const {cart} = this.props
    return (
      <div>
        <CartHeader />
        {cart.totalQuantity === 0 ? (
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Typography color="textSecondary" variant="h6">
              There's nothing in your cart
            </Typography>
          </div>
        ) : (
          <Ref innerRef={contextRef} style={{width: '100%', top: 0}}>
            <div
              style={{
                display: 'flex',
                // flexDirection: 'column',
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                width: '100%'
              }}
            >
              <div
                style={{
                  width: '75%',
                  height: '80%',
                  margin: 10,
                  border: '1px #303030 solid'
                }}
              >
                <CartList cart={cart} />
              </div>
              <Card
                square
                variant="outlined"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  width: '20%',
                  border: '1px #303030 solid',
                  padding: 5,
                  margin: 10
                }}
              >
                <Sticky pushing context={contextRef}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <Typography variant="h6" color="textSecondary">
                      Order Summary
                    </Typography>
                    <CartSummary />
                    <Checkout />
                  </div>
                </Sticky>
              </Card>
            </div>
          </Ref>
        )}
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

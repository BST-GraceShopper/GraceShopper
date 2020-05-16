import React, {Component, createRef} from 'react'
import {connect} from 'react-redux'
import {OrderHeader} from './nav'
import OrderList from './OrderList'
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

class Orders extends Component {
  componentDidMount() {
    const {getCart, user} = this.props
    const token = window.localStorage.getItem('guestToken')
    getCart(user.id || token)
  }
  render() {
    //   const contextRef = createRef()
    const {order} = this.props
    console.log(this.props)
    // console.log(order, 'cartsss in ordersss')
    return (
      <div>
        <OrderHeader />
        {!order ? (
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Typography color="textSecondary" variant="h6">
              You have no current orders
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
                <OrderList cart={cart} />
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
                    <div style={{margin: '20px 0px'}}>
                      <CartSummary />
                    </div>
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

const mapStateToProps = state => {
  return state
}
const mapDispatchToProps = dispatch => {
  return {
    getCart(userId) {
      dispatch(getCart(userId))
      console.log('get cart success')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)

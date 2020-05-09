/* eslint-disable react/jsx-key */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import {
  CardMedia,
  Card,
  Button,
  CardActions,
  IconButton,
  ButtonBase
} from '@material-ui/core/'
import CardContent from '@material-ui/core/CardContent'
import {Typography} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import {addToCart, updateProduct} from '../store/'

class beerListAdmin2 extends Component {
  constructor(props) {
    console.log(props, 'adminy')
    let price = ''
    if (props.user && props.beers.name) {
      price = props.beer.price
    }
    super()
    this.state = {
      id: id,
      price: price,
      inventory: inventory,
      error: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  // componentDidMount() {
  //   const id = this.props.match.params.id
  //   this.props.getChef(id)
  // }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.chef.name !== this.props.chef.name) {
  //     this.setState({ name: this.props.chef.name })
  //   }
  // }
  async onSubmit(ev) {
    ev.preventDefault()
    try {
      this.props.update({
        id: this.props.beers.id,
        price: this.state.price,
        inventory: this.state.inventory
      })
    } catch (ex) {
      this.setState({error: ex.response.data.message})
    }
  }
  render() {
    const {onSubmit} = this
    const {id, inventory, price, error} = this.state
    console.log('in render of class')
    return null
  }
}

const beerListAdmin = ({user, beers}) => {
  console.log(beers, 'beru')
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {beers.map(beer => {
        return (
          <ButtonBase
            style={{
              width: 'calc(100%/4)',
              margin: 20,
              padding: 10,
              backgroundColor: 'black',
              border: '1px white solid'
            }}
          >
            <Card
              elevation={3}
              key={beer.id}
              style={{
                width: 'calc(100%)',
                display: 'flex',
                backgroundColor: 'black',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  width: 'calc(100%)',
                  display: 'flex',
                  backgroundColor: 'black',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <CardMedia
                  image={beer.image}
                  style={{width: 200, height: 200}}
                />
              </div>
              <CardContent
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                {[
                  'name',
                  'ABV',
                  'maker',
                  'type',
                  'region',
                  'price',
                  'inventory'
                ].map(key => {
                  return (
                    <Typography style={{color: 'white'}}>
                      {key}: {beer[key]}
                      <form>
                        <input value="" />
                        <button>Update</button>
                      </form>{' '}
                    </Typography>
                  )
                })}
              </CardContent>
            </Card>
          </ButtonBase>
        )
      })}
    </div>
  )
}

const mapStateToProps = ({beers, user}) => {
  return {beers, user}
}
const mapDispatchToProps = dispatch => {
  return {
    addToCart(userId, productId) {
      dispatch(addToCart(userId, productId))
    },
    update: product => dispatch(updateProduct(product))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(beerListAdmin)

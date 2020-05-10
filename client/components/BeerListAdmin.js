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
import {getBeers, editBeer, removeBeer} from '../store/'

class beerListAdmin extends Component {
  constructor(props) {
    console.log(props, 'admin-beers')
    super()
    this.state = {
      productId: '',
      price: 0,
      inventory: 0,
      error: '',
      idx: 0
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    this.props.fetch()
  }

  componentDidUpdate(prevProps) {
    const {idx} = this.state
    if (prevProps.beers[idx].price !== this.state.price) {
      this.props.fetch()
    }
  }

  async onSubmit(ev) {
    ev.preventDefault()
    console.log(this.props)
    try {
      this.props.update({
        productId: this.state.productId,
        price: this.state.price,
        inventory: this.state.inventory
      })
    } catch (ex) {
      this.setState({error: ex.response.message})
    }
  }
  render() {
    const {onSubmit} = this
    const {productId, inventory, price, error, idx} = this.state
    const {beers} = this.props

    return (
      <div
        style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}
      >
        {beers.map((beer, idx) => {
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
                      </Typography>
                    )
                  })}
                </CardContent>
                <CardActions>
                  <Typography style={{color: 'white'}}>
                    <form onSubmit={onSubmit}>
                      Price
                      <input
                        placeholder="price"
                        value={price}
                        onChange={ev => {
                          this.setState({
                            idx: idx,
                            productId: beer.id,
                            price: Number(ev.target.value)
                          })
                        }}
                      />
                      Inventory
                      <input
                        placeholder="inventory"
                        value={inventory}
                        onChange={ev => {
                          this.setState({
                            idx: idx,
                            productId: beer.id,
                            inventory: Number(ev.target.value)
                          })
                        }}
                      />
                      <button>Update</button>
                    </form>
                  </Typography>
                </CardActions>
              </Card>
            </ButtonBase>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({beers, user}) => {
  return {beers, user}
}
const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(getBeers()),
    update: beer => dispatch(editBeer(beer))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(beerListAdmin)

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
import {getSpirits, editSpirit, removeSpirit} from '../store/'

class SpiritCard extends Component {
  constructor(props) {
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

  async onSubmit(ev) {
    ev.preventDefault()

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
    const {spirit} = this.props

    return (
      <div
        style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}
      >
        <ButtonBase
          style={{
            width: 'calc(100%/4)',
            margin: 20,
            padding: 10
          }}
        >
          <Card
            elevation={3}
            raised={true}
            key={spirit.id}
            variant="outlined"
            style={{
              width: 'calc(100%/3-60px)',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              margin: 10,
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px #303030 solid',
              height: 'same-as-width',
              padding: 10
            }}
          >
            <div
              style={{
                width: 'calc(100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <CardMedia
                image={spirit.image}
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
                    {key}: {spirit[key]}
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
                        productId: spirit.id,
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
                        productId: spirit.id,
                        inventory: Number(ev.target.value)
                      })
                    }}
                  />
                  <button>Update</button>
                </form>
                <button onClick={() => this.props.remove(spirit.id)}>
                  Delete
                </button>
              </Typography>
            </CardActions>
          </Card>
        </ButtonBase>
      </div>
    )
  }
}

const mapStateToProps = ({spirits, user}) => {
  return {spirits, user}
}
const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(getSpirits()),
    update: spirit => dispatch(editSpirit(spirit)),
    remove: spiritId => dispatch(removeSpirit(spiritId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SpiritCard)

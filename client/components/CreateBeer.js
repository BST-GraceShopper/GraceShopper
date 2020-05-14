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
import {addBeer, getBeers, editBeer, removeBeer} from '../store/'

class CreateBeer extends Component {
  constructor(props) {
    super()
    this.state = {
      ABV: 0,
      image:
        'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/h53/h9c/11192333664286.png',
      maker: '',
      year: 0,
      category: 'beer',
      type: '',
      name: '',
      price: 0,
      size: 0,
      inventory: 0,
      region: '',
      grape: '',
      error: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    this.props.fetch()
  }

  async onSubmit(ev) {
    ev.preventDefault()

    try {
      this.props.create({
        ABV: this.state.ABV,
        image: this.state.image,
        maker: this.state.maker,
        year: this.state.year,
        category: this.state.category,
        type: this.state.type,
        name: this.state.name,
        price: this.state.price,
        size: this.state.size,
        inventory: this.state.inventory,
        region: this.state.region,
        grape: this.state.grape
      })
    } catch (ex) {
      this.setState({error: ex.response.message})
    }
  }
  render() {
    const {onSubmit} = this
    const {
      ABV,
      image,
      maker,
      year,
      category,
      type,
      name,
      size,
      inventory,
      region,
      grape,
      price,
      error
    } = this.state
    const {beer} = this.props

    return (
      <div
        style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}
      >
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
            key="1"
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
              <CardMedia style={{width: 200, height: 200}} />
            </div>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            />
            <CardActions>
              <Typography style={{color: 'white'}}>
                <form onSubmit={onSubmit}>
                  ABV
                  <input
                    placeholder="ABV"
                    value={ABV}
                    onChange={ev => {
                      this.setState({
                        ABV: Number(ev.target.value) || 0
                      })
                    }}
                  />
                  <br />
                  Maker
                  <input
                    placeholder="maker"
                    value={maker}
                    onChange={ev => {
                      this.setState({
                        maker: ev.target.value
                      })
                    }}
                  />
                  <br />
                  Year
                  <input
                    placeholder="year"
                    value={year}
                    onChange={ev => {
                      this.setState({
                        year: Number(ev.target.value) || 0
                      })
                    }}
                  />
                  <br />
                  Category
                  <input
                    placeholder="category"
                    value={category}
                    onChange={ev => {
                      this.setState({
                        category: ev.target.value
                      })
                    }}
                  />
                  <br />
                  Type
                  <input
                    placeholder="type"
                    value={type}
                    onChange={ev => {
                      this.setState({
                        type: ev.target.value
                      })
                    }}
                  />
                  <br />
                  Name
                  <input
                    placeholder="name"
                    value={name}
                    onChange={ev => {
                      this.setState({
                        name: ev.target.value
                      })
                    }}
                  />
                  <br />
                  Price
                  <input
                    placeholder="price"
                    value={price}
                    onChange={ev => {
                      this.setState({
                        price: Number(ev.target.value) || 0
                      })
                    }}
                  />
                  <br />
                  Size (mL)
                  <input
                    placeholder="size"
                    value={size}
                    onChange={ev => {
                      this.setState({
                        size: Number(ev.target.value) || 0
                      })
                    }}
                  />
                  <br />
                  Inventory
                  <input
                    placeholder="inventory"
                    value={inventory}
                    onChange={ev => {
                      this.setState({
                        inventory: Number(ev.target.value) || 0
                      })
                    }}
                  />
                  <br />
                  Region
                  <input
                    placeholder="region"
                    value={region}
                    onChange={ev => {
                      this.setState({
                        region: ev.target.value
                      })
                    }}
                  />
                  <br />
                  Grape
                  <input
                    placeholder="grape"
                    value={grape}
                    onChange={ev => {
                      this.setState({
                        grape: ev.target.value
                      })
                    }}
                  />
                  <button>Create</button>
                </form>
              </Typography>
            </CardActions>
          </Card>
        </ButtonBase>
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
    create: beer => dispatch(addBeer(beer))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateBeer)

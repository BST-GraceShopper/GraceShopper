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
import {addWine, getWines, editWines, removeWine} from '../store/'

class CreateWine extends Component {
  constructor(props) {
    super()
    this.state = {
      ABV: 0,
      image:
        'https://t3.ftcdn.net/jpg/02/53/01/92/240_F_253019246_bZNh7BPfzVV3z8gtFf0vjvBmrZcAxU0O.jpg',
      maker: '',
      year: 0,
      category: 'wine',
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
    const {wine} = this.props

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
            key="1"
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <CardMedia
                image={this.state.image}
                style={{width: 200, height: 200}}
              />
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

const mapStateToProps = ({wines, user}) => {
  return {wines, user}
}
const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(getWines()),
    create: wine => dispatch(addWine(wine))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateWine)

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
import BeerCard from './BeerCard'

class beerListAdmin extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.fetch()
  }

  render() {
    const {beers} = this.props
    return beers.map(beer => <BeerCard beer={beer} />)
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

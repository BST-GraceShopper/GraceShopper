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
import CreateBeer from './CreateBeer'
import BeerCard from './BeerCard'

class beerListAdmin extends Component {
  componentDidMount() {
    this.props.fetch()
  }

  render() {
    const {beers} = this.props
    return (
      <div style={{color: 'white'}}>
        <CreateBeer props={beers} />
        {beers.length ? (
          beers.map(beer => <BeerCard beer={beer} />)
        ) : (
          <h6>No Beers</h6>
        )}
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

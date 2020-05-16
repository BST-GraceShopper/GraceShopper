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
import {getWines, editWine, removeWine} from '../store/'
import CreateWine from './Createwine'
import WineCard from './wineCard'

class WineListAdmin extends Component {
  componentDidMount() {
    this.props.fetch()
  }

  render() {
    const {wines} = this.props
    return (
      <div style={{color: 'white'}}>
        <CreateWine props={wines} />
        {wines.length ? (
          wines.map(wine => <WineCard wine={wine} />)
        ) : (
          <h6>No Wines</h6>
        )}
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
    update: wine => dispatch(editWine(wine))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WineListAdmin)

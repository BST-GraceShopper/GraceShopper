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
import {getSpirits, editSpirit} from '../store/'
import CreateSpirit from './CreateSpirit'
import SpiritCard from './SpiritCard'

class SpiritListAdmin extends Component {
  componentDidMount() {
    this.props.fetch()
  }

  render() {
    const {spirits} = this.props
    return (
      <div style={{color: 'white'}}>
        <CreateSpirit props={spirits} />
        {spirits.length ? (
          spirits.map(spirit => <SpiritCard spirit={spirit} />)
        ) : (
          <h6>No spirits</h6>
        )}
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
    update: spirit => dispatch(editSpirit(spirit))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SpiritListAdmin)

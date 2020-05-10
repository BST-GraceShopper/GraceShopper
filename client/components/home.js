import React, {Component} from 'react'
import {connect} from 'react-redux'
import {HomeHeader} from './nav'
import ProductList from './ProductList'
import {getProducts} from '../store/'

class Product extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }
  render() {
    const {products} = this.props
    return (
      <div style={{color: 'white'}}>
        <HomeHeader />
        <ProductList products={products} />
      </div>
    )
  }
}

const mapStateToProps = ({products}) => {
  return {products}
}
const mapDispatchToProps = dispatch => {
  return {
    loadProducts() {
      dispatch(getProducts())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)

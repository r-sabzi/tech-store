import React, { Component } from 'react'
import { linkData } from './linkData'
import { socialData } from './socialData'
import { items } from './productData'

const ProductContext = React.createContext();

class ProductProvider extends Component{

  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct:{},
    loading:false
  }

  componentDidMount() {
    this.setProducts(items);
  }
  
  setProducts = (products) => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields,image };
      return product
    }
    );
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    
    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading:false
    })
  }
  getStorageCart = () => {
    return [];
  }
  getStorageProduct = () => {
    return [];
  }
  getTotal = () => { };

  addTotal = () => { };

  syncStorage = () => { };

  addToCart = (id) => {
    console.log(`add to cart${id}`);
  }
  setSingleProduct = (id) => {
    console.log(`single product${id}`);
  }
  
  handleSidebar=() => {
    this.setState({sidebarOpen:!this.state.sidebarOpen})
  }
  handleCart=() => {
    this.setState({cartOpen:!this.state.cartOpen})
  }
  openCart=() => {
    this.setState({cartOpen:true})
  }
  closeCart = () => {
    this.setState({cartOpen:false})
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleSidebar :this.handleSidebar,
        handleCart :this.handleCart,
        openCart :this.openCart,
        closeCart: this.closeCart,
        addToCart: this.addToCart,
        setSingleProduct:this.setSingleProduct
    }}>
      {this.props.children}
    </ProductContext.Provider>
  )}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer}
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
    },
      () => {
      this.addTotal()
    })
  }
  getStorageCart = () => {
    return [];
  }
  getStorageProduct = () => {
    return [];
  }
  getTotal = () => {
    let subTotal = 0
    let cartItems = 0
    this.state.cart.forEach(item => {
      subTotal += item.total
      cartItems+=item.count
    })

    subTotal = parseFloat(subTotal.toFixed(2))
    let tax = subTotal * 0.2
    tax = parseFloat(tax.toFixed(2))
    let total = subTotal + tax
    total = parseFloat(total.toFixed(2))
    return {
      cartItems,
      subTotal,
      tax,
      total
    }
  };

  addTotal = () => {
    let totals = this.getTotal()
    this.setState({
      cartItems:totals.cartItems,
      cartSubTotal:totals.subTotal,
      cartTax:totals.tax,
      cartTotal:totals.total
    })
  };

  syncStorage = () => { };

  addToCart = (id) => {
    let tempCart = [...this.state.cart]
    let tempProducts = [...this.state.storeProducts]
    let tempItem = tempCart.find(item => item.id === id)
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id)
      let total = tempItem.price
      let cartItem = { ...tempItem, count: 1, total }
      tempCart = [...tempCart, cartItem]
    } else {
      tempItem.count++
      tempItem.total = tempItem.price * tempItem.count
      tempItem.total = parseFloat(tempItem.total.toFixed(2))
    }
    this.setState(()=> {
      return { cart: tempCart }
    }, () => {
        this.addTotal()
        this.syncStorage()
        this.openCart()
    }
    )
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
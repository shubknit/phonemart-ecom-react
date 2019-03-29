import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
      products: [],
      detailProduct: detailProduct,
      cart: [],
      modalOpen: false,
      modalProduct: {},
      cartSubTotal: 0,
      cartTax: 0,
      cartTotalPrice: 0
  }
  componentDidMount(){
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    })
    this.setState(() => {
      return { products: tempProducts }
    })
  }  


  /* Utility function to get item */

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product }
    });
  }

  updateStateOb(object, action, id){
    let tempObject = object.map(item => {
      if(item.id === id){
        return { ...item, ...action}
      }
      else return item
    })
    return tempObject;
  }

  addToCart = async (id) => {
    const product = this.getItem(id);
    const action = {
      count: 1,
      inCart: true,
      total: product.price
    }
    const tempProducts = this.updateStateOb(this.state.products, action, id);
    const cartProduct = tempProducts.find(item => item.id === id);
    this.setState(() => {
      return { products : tempProducts, cart: [...this.state.cart, cartProduct] }
    }, () => this.addTotal());
  }

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true }
    })
  }

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    }, () => console.log('current state', this.state));
  }

  addTotal = () => {
    let subTotal = 0;
    let totalPrice, totalTax; 
        
    const tempProducts = [...this.state.cart];
    tempProducts.map(item => {
      subTotal +=  item.total;
    })
    totalTax = parseFloat((subTotal * 0.1).toFixed(2));
    totalPrice = subTotal + totalTax;

    this.setState( () => {
      return {
        cartSubTotal: subTotal,
        cartTotalPrice: totalPrice,
        cartTax: totalTax
      }
    }, () => console.log('total', this.state))
  }


  incrementItem = (id) => { 
    const product = this.getItem(id);
    const action = {
      count: product.count + 1,
      total: product.price * (product.count + 1)
    }
  
    const tempProducts = this.updateStateOb(this.state.products, action, id);
    const cartProducts = this.updateStateOb(this.state.cart, action, id);
    this.setState(() => {
      return {
        products : tempProducts,
        cart: cartProducts
     }
    }, () => this.addTotal());
  }

  decrementItem = (id) => {
    const product = this.getItem(id);
    const action = {
      count: product.count - 1,
      total: product.price * (product.count - 1)
    }
  
    if(action.count > 0) {
      const tempProducts = this.updateStateOb(this.state.products, action, id);
      const cartProducts = this.updateStateOb(this.state.cart, action, id);
      this.setState(() => {
        return {
          products : tempProducts,
          cart: cartProducts
       }
      }, () => this.addTotal());
    }
    else this.removeItem(id);
  //  console.log(cartProducts);
    
  }


  removeItem = (id) => {
    const action = {
      inCart: false,
      count: 0,
      total: 0
    }
    const tempProducts = this.updateStateOb(this.state.products, action, id);
    const cartProducts = this.state.cart.filter( item =>  item.id !== id);
    this.setState(() => {
      return {
        products : tempProducts,
        cart: cartProducts
     }
    }, () => this.addTotal());
  }

  clearCart = () => {
    this.setState(() => {
      return { cart: [] 
       }
     },() => this.setProducts()) 
  }

  render() {
    return (
      <ProductContext.Provider value = {{
          ...this.state,
          handleDetail:  this.handleDetail,
          addToCart : this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          incrementItem: this.incrementItem,
          decrementItem: this.decrementItem,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          addTotal: this.addTotal
       }}>
       { this.props.children }
      </ProductContext.Provider>
      
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

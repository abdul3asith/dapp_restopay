"use client"
import CartMain from '@/components/cartMain'
import { useLocalStorage } from '@/components/localStorage'
import React, { useEffect, useState } from 'react'


const Cart = () => {
    const [cart, setCart] = useLocalStorage('cart')
    const [subTotal, setSubTotal] = useState(0)

    const saveCart = (myCart) => {
      localStorage.setItem('cart', myCart)
      let subt = 0;
      let keys = Object.keys(cart)
      for(let i=0; i<keys.length; i++){
        if (myCart[keys[i]]) {
          subt += myCart[keys[i]].price * myCart[keys[i]].quantity;
        }
      }
      setSubTotal(subt)
    }
    const addToCart = (itemCode, quantity, price, name) => {
       let newCart = cart;
       if(itemCode in cart) {
        newCart[itemCode].quantity = cart[itemCode].quantity + quantity
       } 
       else {
        newCart[itemCode] = {quantity: 1, price, name}
       }
  
       setCart(newCart)
       saveCart(newCart)
    } 
    const removeFromCart = (itemCode, quantity, price, name) => {
        let newCart = cart;
        if(itemCode in cart) {
         newCart[itemCode].quantity = cart[itemCode].quantity - quantity
        } 
        if (newCart[itemCode].quantity<=0) {
            delete newCart[itemCode]
        }
   
        setCart(newCart)
        saveCart(newCart)
     } 
  
    const clearCart = () => {
      setCart({})
      saveCart({})
    }
  return (
    <div>
        <CartMain cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
    </div>
  )
}

export default Cart
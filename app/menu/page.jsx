"use client"
import MenuHome from '@/components/menuHome'
import React from 'react'
import { useState, useEffect } from 'react'

const Menu = () => {

  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    console.log("hello there is abdul basith")
    try {
      if(localStorage.getItem('cart')){
          setCart(JSON.parse(localStorage.getItem('cart')))
        }
    } catch (error) {
      console.log(error);
      localStorage.clear()
    }
   
  
    
  },[])
  
  const saveCart = (myCart) => {
    localStorage.setItem('cart', myCart)
    let subt = 0;
    let keys = Object.keys(cart)
    for(let i=0; keys.length; i++){
      subt += myCart[keys[i]].price *  myCart[keys[i]].quantity;
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
        <MenuHome cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    </div>
  )
}

export default Menu
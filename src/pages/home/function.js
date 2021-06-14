import {useEffect, useState, useContext,  createContext} from 'react'

export function getTotalItemsInArrayFromLocalStorage(setState) {
    const cartItemsArray = JSON.parse(localStorage.getItem('clothes'))
    if(!cartItemsArray) {
           return 
    }
    setState(cartItemsArray.length)
}




export function getNumberOfItemsInArrayLocalStorage(setState) {
    const cartItemsArray = JSON.parse(localStorage.getItem('clothes'))
    if(!cartItemsArray) {
        return
    }
    return cartItemsArray.length
}



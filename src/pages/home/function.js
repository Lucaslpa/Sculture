import {useEffect, useState, useContext,  createContext} from 'react'

export function getTotalItemsInArrayFromLocalStorage(setState) {
    const cartItemsArray = JSON.parse(localStorage.getItem('clothes'))
    setState(cartItemsArray.length)
}




export function getNumberOfItemsInArrayLocalStorage(setState) {
    const cartItemsArray = JSON.parse(localStorage.getItem('clothes'))
    return cartItemsArray.length
}



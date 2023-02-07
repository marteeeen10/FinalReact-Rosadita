import {useState,useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetch('./json/productos.json')
        .then(response => response.json())
        .then(products => {
            console.log(products)
            const productsList = ItemList({products})
            console.log(productsList)
            setProductos(productsList)
        })
    }, [])
    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    )
}
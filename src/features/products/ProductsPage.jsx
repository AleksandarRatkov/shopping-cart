import React, { useEffect } from "react";
import "./ProductsPage.css"
import { useSelector, useDispatch } from 'react-redux'
import { STATUSES, fetchProducts, selectAllProducts } from "./productsSlice";
import ProductItem from "./ProductItem";

const ProductsPage = () => {
  const dispatch = useDispatch()

  const productStatus = useSelector((state) => state.products.status)
  const products = useSelector(selectAllProducts)

  useEffect(() => {
    if (productStatus === STATUSES.IDLE) {
      dispatch(fetchProducts())
    }
  }, [productStatus, dispatch])

  return (
    <div className="container mt-5">
      <div className="row big">
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
import React, { useEffect } from "react";
import "./ProductsPage.css"
import { useSelector, useDispatch } from 'react-redux'
import { STATUSES, fetchProducts, selectAllProducts } from "./productsSlice";
import ProductItem from "./ProductItem";
import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";

const ProductsPage = () => {
  const dispatch = useDispatch()

  const productStatus = useSelector((state) => state.products.status)
  const error = useSelector((state) => state.products.error)
  const products = useSelector(selectAllProducts)

  useEffect(() => {
    if (productStatus === STATUSES.IDLE) {
      dispatch(fetchProducts())
    }
  }, [productStatus, dispatch])

  let content 

  if (productStatus === STATUSES.LOADING) {
    content = <Spinner text="Loading..." />
  } else if (productStatus === STATUSES.SUCCEEDED) {
    content = products.map((item) => (
      <ProductItem key={item.id} item={item} />
    ))
  } else {
    content = <ErrorMessage message={error} />
  }

  return (
    <div className="container mt-5">
      <div className="row big">
        {content}
      </div>
    </div>
  )
}

export default ProductsPage
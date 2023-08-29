import React, { useEffect, useState } from "react";
import "./ProductsPage.css"
import { useSelector, useDispatch } from 'react-redux'
import { STATUSES, fetchProducts, selectFilteredProducts, setFilter } from "./productsSlice";
import ProductItem from "./ProductItem";
import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";

const ProductsPage = () => {
  const dispatch = useDispatch()

  const productStatus = useSelector((state) => state.products.status)
  const error = useSelector((state) => state.products.error)
  const products = useSelector(selectFilteredProducts)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (productStatus === STATUSES.IDLE) {
      dispatch(fetchProducts())
    }
  }, [productStatus, dispatch])

  const onProductsSearch = (e) => {
    const text = e.target.value
    setSearchText(text)
    dispatch(setFilter(text))
  }

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
        <div className="cols-12">
          <div className="input-group mb-5">
            <input
              type="text"
              className="form-control"
              value={searchText}
              onChange={onProductsSearch}
              placeholder="Search a product..."
              aria-label="Search"
              aria-describedby="search-icon"
            />
            <span className="input-group-text" id="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </div>
        </div>
        {content}
      </div>
    </div>
  )
}

export default ProductsPage
import React from "react";
import "./ProductsPage.css"

const ProductsPage = () => {

  const items = [
    {
      "id": 1,
      "title": "Shop Item 1",
      "price": 55,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image1.jpg"
    },
    {
      "id": 2,
      "title": "Shop Item 2",
      "price": 18,
      "description": "Ut enim ad minim veniam.",
      "image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image2.jpeg"
    },
    {
      "id": 3,
      "title": "Shop Item 3",
      "price": 820,
      "description": "Aliquip ex ea commodo consequat.",
      "image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image3.jpeg"
    },
    {
      "id": 4,
      "title": "Shop Item 4",
      "price": 536,
      "description": "Exercitation ullamco laboris nisi ut aliquip.",
      "image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image4.jpeg"
    },
    {
      "id": 5,
      "title": "Shop Item 5",
      "price": 88,
      "description": "Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
      "image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image5.jpeg"
    },
    {
      "id": 6,
      "title": "Shop Item 6",
      "price": 43,
      "description": "Pariatur excepteur sint occaecat.",
      "image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image6.jpeg"
    }
  ]

  return (
    <div className="container mt-5">
      <div className="row big">
        {items.map((item) => (
          <div className="cols-12 col-md-6 col-lg-4" key={item.id}>
            <div className="card product-card">
              <img src={item.image} className="card-img-top product-image" alt={item.id} />
              <div className="card-body">
                <div className="row">
                  <div className="col-7">
                    <p className="card-text text-start product-title">{item.title}</p>
                  </div>
                  <div className="col-5">
                    <p className="card-text text-end product-price">{item.price}$</p>
                  </div>
                </div>
                <p className="text-start">{item.description.length > 50 ? item.description.slice(0, 60) + "..." : item.description}</p>
              </div>
              <div className="text-center">
                <button className="btn btn-add-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
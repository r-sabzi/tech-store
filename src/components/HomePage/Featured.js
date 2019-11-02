import React from 'react'
import Product from '../Product'
import Title from '../Title'
import { Link } from 'react-router-dom'
import { productConsumer, ProductConsumer } from '../../context'


export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="featured products" center="true" />
        <div className="row">
          <ProductConsumer>
            {value => {
              const { featuredProducts} = value;
              return featuredProducts.map( product => {
                  return <Product key={Product.id} product={product}/>
              })
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  )
} 

import React from "react";
import { ProductConsumer } from '../context'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

export default function HomePage() {

    return (
      <>
        <Hero title="awesome gadgets" max="true">
          <Link to="/products">our products</Link>
        </Hero>
      </>
  );
}

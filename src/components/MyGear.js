// src/components/MyGear.js
import React from 'react';
import './MyGear.css';

// Reusable component for displaying each category of products with an optional description for each product
const ProductSection = ({ title, products }) => (
  <div className="product-section">
    <h3>{title}</h3>
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <a href={product.link} target="_blank" rel="noopener noreferrer">
            {product.name}
          </a>
          {product.description && <span className="product-description"> - {product.description}</span>}
        </li>
      ))}
    </ul>
  </div>
);

const MyGear = () => {
  const referrals = [
    { 
      name: "SOFI Refinance", 
      link: "https://www.sofi.com/invite/student-loans?gcp=10cb67a7-ac1e-479e-9854-d9f8c3c65411&isAliasGcp=false", 
      description: "Save on Education Loan with $300 welcome bonus" 
    }
    // Add more referral links here
  ];

  const homeDecor = [
    { name: "Home Decor Item 1", link: "https://example.com" },
    { name: "Home Decor Item 2", link: "https://example.com" }
    // Add more home decor products here
  ];

  const kitchen = [
    { name: "Kitchen Product 1", link: "https://example.com" },
    { name: "Kitchen Product 2", link: "https://example.com" }
    // Add more kitchen products here
  ];

  const gadgets = [
    { name: "Gadget 1", link: "https://example.com" },
    { name: "Gadget 2", link: "https://example.com" }
    // Add more gadgets here
  ];

  return (
    <div className="my-gear">
      <h2>My Gear/Recommended Products</h2>
      <p>Here you can find my recommended products across various categories, complete with affiliate links.</p>
      <ProductSection title="Referrals" products={referrals} />
      <ProductSection title="Home Decor" products={homeDecor} />
      <ProductSection title="Kitchen" products={kitchen} />
      <ProductSection title="Gadgets" products={gadgets} />
    </div>
  );
};

export default MyGear;

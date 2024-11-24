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

  const products = [
    { name: "Vegetable Chopper", link: "https://www.amazon.com/Vegetable-Chopper-Multifunctional-Adjustable-Container/dp/B0D1BPJVQ7/ref=asc_df_B0D1BPJVQ7?mcid=e16300bab8193d3aa5676b8543f9796b&hvocijid=3269665196215396265-B0D1BPJVQ7-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=692875362841&hvpos=&hvnetw=g&hvrand=3269665196215396265&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9007584&hvtargid=pla-2281435180538&psc=1" },
    { name: "Bug Zapper", link: "https://www.homedepot.com/p/Black-Flag-Portable-Handheld-Bug-Zapper-Insect-Killer-Racket-Black-ZR-7936-L/302273000?source=shoppingads&locale=en-US&pla&mtc=SHOPPING-BF-CDP-GGL-D28O-028_001_CHEMICALS-NA-NA-NA-PMAX-NA-NA-NA-NA-NBR-NA-NA-NA-PMAXONECLICK_JControl24&cm_mmc=SHOPPING-BF-CDP-GGL-D28O-028_001_CHEMICALS-NA-NA-NA-PMAX-NA-NA-NA-NA-NBR-NA-NA-NA-PMAXONECLICK_JControl24-20410431792--&gclsrc=aw.ds&gad_source=1&gbraid=0AAAAADq61Ufn-v82HK1YULre_dxp89HIs&gclid=CjwKCAiAl4a6BhBqEiwAqvrqutR90TDI_4WCGT_xry8ypUAcognJKzd0dEpzK6-O5NWhOsvBbRv2KxoCg20QAvD_BwE" }
    // Add more kitchen products here
  ];

  return (
    <div className="my-gear">
      <h2>My Gear</h2>
      <p>Here you can find best products which Venkata use personally.</p>
      <ProductSection title="Referrals" products={referrals} />
      <ProductSection title="Products" products={products} />
    </div>
  );
};

export default MyGear;

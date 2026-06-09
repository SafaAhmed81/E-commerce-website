import React, { useEffect, useState } from "react";
import PageTransition from "../../components/PageTransition";
import Product from "../../components/slideProducts/Product";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import "./accessories.css";

const accessoryCategories = [
  { slug: "womens-jewellery", label: "Jewellery" },
  { slug: "womens-bags", label: "Bags" },
  { slug: "sunglasses", label: "Sunglasses" },
  { slug: "mobile-accessories", label: "Mobile Accessories" },
  { slug: "sports-accessories", label: "Sports" },
];

function Accessories() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(accessoryCategories[0].slug);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [activeTab]);

  return (
    <PageTransition>
      <div className="accessories_page">

        {/* Hero */}
        <div className="acc_hero">
          <div className="container">
            <h1>Accessories <span>Collection</span></h1>
            <p>Complete your look with our handpicked accessories.</p>
          </div>
        </div>

        <div className="container">

          {/* Tabs */}
          <div className="acc_tabs">
            {accessoryCategories.map((cat) => (
              <button
                key={cat.slug}
                className={`acc_tab_btn ${activeTab === cat.slug ? "active" : ""}`}
                onClick={() => setActiveTab(cat.slug)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products */}
          {loading ? (
            <SlideProductLoading />
          ) : (
            <>
              <div className="acc_top_slide top_slide">
                <h2>{accessoryCategories.find(c => c.slug === activeTab)?.label}</h2>
                <p>{products.length} products found</p>
              </div>
              <div className="products acc_products">
                {products.map((item) => (
                  <Product item={item} key={item.id} />
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </PageTransition>
  );
}

export default Accessories;
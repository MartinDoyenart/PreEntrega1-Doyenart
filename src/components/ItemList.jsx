import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="product-cards-container">
      {products.map((p) => {
        return (
          <Item
            key={p.id}
            id={p.id}
            image={p.image}
            name={p.name}
            description={p.description}
            price={p.price}
            category={p.category}
          />
        );
      })}
    </div>
  );
};

export default React.memo(ItemList);

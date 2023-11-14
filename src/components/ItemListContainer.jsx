import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "Productos musica");

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProducts(docs);
    });
  }, []);

  const filteredProduct = products.filter(
    (product) => product.category === category
  );

  return (
    <>
      {
        <Center p="2rem">
          {category ? (
            <ItemList products={filteredProduct} />
          ) : (
            <ItemList products={products} />
          )}
        </Center>
      }
    </>
  );
};

export default ItemListContainer;

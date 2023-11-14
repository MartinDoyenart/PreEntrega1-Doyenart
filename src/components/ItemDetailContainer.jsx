import React from "react";
import ItemDetail from "./ItemDetail";
import { Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
useEffect(() => {
  const db = getFirestore();
  const oneItem = doc(db, "Productos musica", id);

  getDoc(oneItem).then((snapshot) => {
    if (snapshot.exists()) {
      const docs = snapshot.data();
      console.log("Datos del producto:", docs);
      setProduct([docs]);
    } else {
      console.log("El documento no existe");
    }
  });
}, []);

  return (
    <>
      <Center p="2rem">
        <ItemDetail product={product} />
      </Center>
    </>
  );
};

export default ItemDetailContainer;

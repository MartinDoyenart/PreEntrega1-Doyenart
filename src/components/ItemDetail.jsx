import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Stack,
  CardFooter,
  Button,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import CounterComponent from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const { id } = useParams();
  const { addItem } = useContext(CartContext);
  const [quantityAdded, setQuantityAdded] = useState(1);
  const filteredProduct = Array.isArray(product)
    ? product.filter((p) => p.id === id)
    : [];
  const selectedProduct = filteredProduct[0];
  const handleOnAdd = () => {
    if (!isNaN(quantityAdded) && quantityAdded > 0) {
      const item = {
        id,
        name: selectedProduct.name,
        price: selectedProduct.price,
      };
      addItem(item, quantityAdded);
    } else {
      console.log("Cantidad inválida");
    }
  };

  return (
    <>
      {filteredProduct.map((p) => {
        return (
          <Card
            key={p.id}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Stack>
              <CardBody>
                <img src={p.image} />
                <Heading size="md">{p.name}</Heading>
                <Divider />
                <Text py="2">{p.description}</Text>
                <Divider />
                <Text color="blue.600" fontSize="2xl">
                  $ {p.price}
                </Text>
              </CardBody>
              <CounterComponent
                quantity={quantityAdded}
                setQuantity={setQuantityAdded}
              />
              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={handleOnAdd}
                >
                  Agregar al Carrito
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        );
      })}
    </>
  );
};

export default ItemDetail;

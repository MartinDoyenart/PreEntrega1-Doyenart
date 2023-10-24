import React from "react";
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
import CounterComponent from "./counterComponent";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const filteredProduct = productos.filter((producto) => producto.id == id);

  console.log(filteredProduct);
  return (
    <>
      {filteredProduct.map((p) => {
        return (
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Stack>
              <CardBody>
                <p>Imagen</p>
                <Heading size="md">{p.name}</Heading>
                <Divider />
                <Text py="2">{p.description}</Text>
                <Divider />
                <Text color="blue.600" fontSize="2xl">
                  {p.Price}
                </Text>
              </CardBody>
              <CounterComponent />
              <CardFooter>
                <Button variant="solid" colorScheme="blue">
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

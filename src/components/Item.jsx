import React from "react";
import {
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ name, description, id }) => {
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Stack>
          <CardBody>
            <p>Imagen</p>
            <Heading size="md">{name}</Heading>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              <Link to={`/product/${id}`}>Ver detalle</Link>
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default Item;

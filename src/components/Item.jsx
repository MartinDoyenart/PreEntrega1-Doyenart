import React from "react";
import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ name, id, image }) => {
  return (
    <div>
      <Flex>
        <Card>
          <Stack>
            <CardBody>
              <img src={image} />
              <Heading size="md">{name}</Heading>
            </CardBody>

            <CardFooter>
              <CardFooter>
                <Button
                  as={Link}
                  to={`/product/${id}`}
                  variant="solid"
                  colorScheme="blue"
                >
                  Ver detalle
                </Button>
              </CardFooter>
            </CardFooter>
          </Stack>
        </Card>
      </Flex>
    </div>
  );
};
export default Item;

import React from "react";
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <Flex>
        <Box p="5" bg="purple.300">
          <Menu>
            <MenuButton>Productos</MenuButton>
            <MenuList>
              <MenuItem>Instrumentos de cuerda</MenuItem>
              <MenuItem>Instrumentos de viento</MenuItem>
              <MenuItem>Instrumentos de percusion</MenuItem>
              <MenuItem>Accesorios</MenuItem>
              <MenuItem>Metodos&Partituras</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="5" bg="purple.400">
          {/*brand*/}
          <h1>MD Instrumentos Musicales</h1>
        </Box>
        <Spacer />
        <Box p="5" bg="purple.300">
          {/*carrito*/}
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;

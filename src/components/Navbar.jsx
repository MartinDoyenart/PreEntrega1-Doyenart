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
  Center,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Flex>
        <Box
          w="100%"
          h="200px"
          bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
        >
          <Center>
            <Link to={"/"}>
              <h1>MD Instrumentos Musicales</h1>
            </Link>
          </Center>
          <Spacer />
          <Flex>
            <Box>
              <Menu>
                <MenuButton as={Button} colorScheme="purple">
                  Productos
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to={`/category/${"Pianos&Tecaldos"}`}>
                      Pianos & Teclados
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/category/${"Guitarras&Bajos"}`}>
                      Guitarras & Bajos
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/category/${"Instrumentos de Cuerda"}`}>
                      Instrumentos de Cuerda
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/category/${"Instrumentos de Viento"}`}>
                      Instrumentos de viento
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/category/${"Instrumentos de Percusion"}`}>
                      Instrumentos de percusion
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Spacer />
            <Box>
              <Link to={"/Cart"}>
                <CartWidget />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;

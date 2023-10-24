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
import { Link, useParams } from "react-router-dom";

const Navbar = () => {
  const { category } = useParams();
  return (
    <div>
      <Flex>
        <Box>
          <Link to={"/"}>
            <h1>MD Instrumentos Musicales</h1>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton>Productos</MenuButton>
            <MenuList>
              <MenuItem>
                <Link to={`/category/${"Pianos-Tecaldos"}`}>
                  Pianos & Teclados
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/category/${"Guitarras-Bajos"}`}>
                  Guitarras & Bajos
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/category/${"Instrumentos-de-Cuerda"}`}>
                  Instrumentos de Cuerda
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/category/${"Instrumentos-de-Viento"}`}>
                  Instrumentos de viento
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/category/${"Instrumentos-de-Percusion"}`}>
                  Instrumentos de percusion
                </Link>
              </MenuItem>
              <MenuItem>Accesorios&Amplificadores</MenuItem>
              <MenuItem>Metodos&Partituras</MenuItem>
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
    </div>
  );
};

export default Navbar;

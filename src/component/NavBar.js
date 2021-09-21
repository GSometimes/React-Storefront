import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Flex, Icon, Image, Box, Badge } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { MdMenu, MdShoppingBasket } from "react-icons/md";

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      backgroundColor="#FFA8E2"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      p="2rem"
    >
      <Icon w={30} h={30} fill="white" cursor="pointer" as={MdMenu} onClick={() => openMenu()}></Icon>
      <Link to="/"><Image
        src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
        w={75}
        h={75}
      /></Link>
      <Box>
      <Icon
        w={30}
        h={30}
        fill="white"
        cursor="pointer"
        as={MdShoppingBasket}
        onClick={() => openCart()}
      ></Icon>
      <Badge backgroundColor="#FF38BD" borderRadius="50%">{checkout.lineItems?.length}</Badge>
      </Box>
    </Flex>
  );
};

export default NavBar;

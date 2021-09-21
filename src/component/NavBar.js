import React, { useContext } from "react";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
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
      <Icon w={30} h={30} fill="white" cursor="pointer" as={MdMenu}></Icon>
      <Image
        src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
        w={75}
        h={75}
      />
      <Icon
        w={30}
        h={30}
        fill="white"
        cursor="pointer"
        as={MdShoppingBasket}
        onClick={() => openCart()}
      ></Icon>
    </Flex>
  );
};

export default NavBar;

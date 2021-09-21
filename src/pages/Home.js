import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { Box, Grid, Text, Image } from "@chakra-ui/react";
import Hero from "../component/Hero";
import ImageWithText from "../component/ImageWithText";
import RichText from "../component/RichText";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <Box>
      <Hero />
      <RichText heading="The relaxation you've been waiting for." text="Our bath bombs guarantee a fun, relaxing, and colorful night."/>
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box _hover={{ opacity: "80%" }} textAlign="center" position="relative">
              <Image src={product.images[0].src} />
              <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">{product.title}</Text>
              <Text position="absolute" bottom="5%" w="100%" color="gray.600">${product.variants[0].price}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText heading="Treat Yourself!"/>
      <ImageWithText image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758" heading="Heading" text="Pigeons and doves constitute the animal family Columbidae and the order Columbiformes, which includes about 42 genera and 310 species.The related word 'columbine' refers to pigeons and doves."/>
      <ImageWithText reverse image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758" heading="Heading" text="Pigeons and doves constitute the animal family Columbidae and the order Columbiformes, which includes about 42 genera and 310 species.The related word 'columbine' refers to pigeons and doves."/>
    </Box>
  );
};

export default Home;

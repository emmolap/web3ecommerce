export default function Products() {
  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-center text-4xl font-bold">Our Products</h1>
      {/* Display products dynamically here */}
    </div>
  );
}

import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Badge,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

const ProductDetailsPage = ({ product }) => {
  // In real-world apps, you'd fetch product details using the productId from the URL
  const { productId } = useParams();

  // Mock fallback in case product prop is not passed
  const fallbackProduct = {
    id: "1",
    name: "Stylish Sneakers",
    category: "Footwear",
    image: "/shoes.jpg",
    price: 120,
    oldPrice: 150,
    rating: 4.5,
    description:
      "These sneakers blend fashion with comfort. Lightweight and stylish for all-day wear.",
    stock: 12,
    isNew: true,
  };

  const item = product || fallbackProduct;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      minH="100vh"
      bg={useColorModeValue("gray.50", "gray.900")}
      p={{ base: 4, md: 10 }}
      alignItems="center"
      justifyContent="center"
    >
      <Box flex="1" maxW="500px" w="full">
        <Image
          src={item.image}
          alt={item.name}
          rounded="lg"
          w="full"
          objectFit="cover"
        />
      </Box>

      <VStack
        flex="1"
        spacing={6}
        align="start"
        mt={{ base: 6, md: 0 }}
        ml={{ md: 10 }}
      >
        <HStack spacing={3}>
          {item.isNew && <Badge colorScheme="green">New</Badge>}
          <Badge colorScheme="purple">{item.category}</Badge>
        </HStack>

        <Heading size="lg">{item.name}</Heading>

        <HStack spacing={1}>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <Icon
                key={i}
                as={StarIcon}
                color={i < Math.floor(item.rating) ? "yellow.400" : "gray.300"}
              />
            ))}
          <Text fontSize="sm" color="gray.500">
            {item.rating.toFixed(1)} / 5
          </Text>
        </HStack>

        <HStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            ${item.price}
          </Text>
          <Text
            fontSize="md"
            color="gray.500"
            textDecoration="line-through"
          >
            ${item.oldPrice}
          </Text>
        </HStack>

        <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")}>{
          item.description
        }</Text>

        <Button
          colorScheme="teal"
          size="lg"
          isDisabled={item.stock <= 0}
        >
          {item.stock > 0 ? "Add to Cart" : "Out of Stock"}
        </Button>
      </VStack>
    </Flex>
  );
};

export default ProductDetailsPage;

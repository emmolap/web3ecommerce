// export default function Products() {
//   return (
//     <div className="container mx-auto">
//       <h1 className="my-8 text-center text-4xl font-bold">Our Products</h1>
//       {/* Display products dynamically here */}
//     </div>
//   );
// }

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
import React, { useState } from "react";
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
  Divider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  SlideFade,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductDetailsPage = ({ product }) => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

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
    reviews: [
      { user: "John Doe", comment: "Great fit and design!", rating: 5 },
      { user: "Jane Smith", comment: "Comfortable but pricey.", rating: 4 },
    ],
  };

  const item = product || fallbackProduct;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: Number(quantity),
      })
    );

    toast({
      position: "top",
      duration: 3000,
      isClosable: true,
      render: () => (
        <SlideFade in offsetY={-20}>
          <Box
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.800", "white")}
            boxShadow="lg"
            p={4}
            borderRadius="md"
          >
            <Text fontWeight="bold">Added to Cart!</Text>
            <Button
              mt={2}
              size="sm"
              colorScheme="teal"
              onClick={() => navigate("/cart")}
            >
              View Cart
            </Button>
          </Box>
        </SlideFade>
      ),
    });
  };

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
          {item.oldPrice && (
            <Text
              fontSize="md"
              color="gray.500"
              textDecoration="line-through"
            >
              ${item.oldPrice}
            </Text>
          )}
        </HStack>

        <Text
          fontSize="md"
          color={useColorModeValue("gray.700", "gray.300")}
          whiteSpace="pre-wrap"
        >
          {item.description}
        </Text>

        <Text fontSize="sm" color="gray.500">
          Stock: {item.stock}
        </Text>

        <NumberInput
          min={1}
          max={item.stock}
          value={quantity}
          onChange={(valueString) => setQuantity(Number(valueString))}
          width="100px"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Button
          colorScheme="teal"
          size="lg"
          isDisabled={item.stock <= 0}
          onClick={handleAddToCart}
        >
          {item.stock > 0 ? "Add to Cart" : "Out of Stock"}
        </Button>

        {item.reviews && item.reviews.length > 0 && (
          <Box w="full">
            <Divider my={4} />
            <Heading size="md" mb={2}>
              Customer Reviews
            </Heading>
            <Stack spacing={3}>
              {item.reviews.map((review, i) => (
                <Box
                  key={i}
                  p={3}
                  rounded="md"
                  bg={useColorModeValue("gray.100", "gray.700")}
                >
                  <HStack justify="space-between">
                    <Text fontWeight="bold">{review.user}</Text>
                    <HStack>
                      {Array(5)
                        .fill("")
                        .map((_, j) => (
                          <Icon
                            key={j}
                            as={StarIcon}
                            color={j < review.rating ? "yellow.400" : "gray.300"}
                            boxSize={3}
                          />
                        ))}
                    </HStack>
                  </HStack>
                  <Text mt={1} fontSize="sm">
                    {review.comment}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </VStack>
    </Flex>
  );
};

export default ProductDetailsPage;

// import { useRouter } from "next/router";

// export default function ProductDetail() {
//   const router = useRouter();
//   const { id } = router.query; // Get product ID from URL

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-4xl font-bold">Product {id}</h1>
//       {/* Show product details dynamically */}
//     </div>
//   );
// }

import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";
import { incrementQty, decrementQty, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box p={{ base: 4, md: 8 }}>
      <Heading mb={6}>Your Cart</Heading>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <Stack spacing={6}>
          {cart.map((item) => (
            <Flex
              key={item.id}
              justify="space-between"
              align="center"
              p={4}
              borderWidth={1}
              borderRadius="lg"
              bg={useColorModeValue("white", "gray.800")}
            >
              <HStack spacing={4}>
                <Image
                  src={item.image || "/placeholder.png"}
                  alt={item.name}
                  boxSize="60px"
                  objectFit="cover"
                  rounded="md"
                />
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold" noOfLines={1}>
                    {item.name}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    ${item.price.toFixed(2)}
                  </Text>
                </VStack>
              </HStack>
              <HStack>
                <IconButton
                  size="sm"
                  icon={<MinusIcon />}
                  onClick={() => dispatch(decrementQty(item.id))}
                  aria-label="Decrease quantity"
                />
                <Text>{item.quantity}</Text>
                <IconButton
                  size="sm"
                  icon={<AddIcon />}
                  onClick={() => dispatch(incrementQty(item.id))}
                  aria-label="Increase quantity"
                />
              </HStack>
              <IconButton
                colorScheme="red"
                icon={<DeleteIcon />}
                onClick={() => dispatch(removeFromCart(item.id))}
                aria-label="Remove item"
              />
            </Flex>
          ))}
          <Divider />
          <Flex justify="space-between" align="center">
            <Text fontWeight="bold">Total: ${total.toFixed(2)}</Text>
            <Button colorScheme="teal" onClick={() => navigate("/checkout")}>
              Checkout
            </Button>
          </Flex>
        </Stack>
      )}
    </Box>
  );
};

export default CartPage;

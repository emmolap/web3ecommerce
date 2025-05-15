import React, { useState } from "react";
import {
  Box,
  Grid,
  Heading,
  useColorModeValue,
  Text,
  Flex,
  Tooltip,
  Divider,
  VStack,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  useToast,
  Radio,
  RadioGroup
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("stripe");

  const handleStripePayment = () => {
    toast({ title: "Stripe payment simulated.", status: "info", duration: 3000, isClosable: true });
    simulateOrder();
  };

  const handlePaystackPayment = () => {
    toast({ title: "Paystack payment simulated.", status: "info", duration: 3000, isClosable: true });
    simulateOrder();
  };

  const simulateOrder = () => {
    setIsPlacingOrder(true);
    setTimeout(() => {
      setIsPlacingOrder(false);
      dispatch(clearCart());
      toast({
        title: "Payment successful. Order placed!",
        status: "success",
        duration: 3000,
        isClosable: true
      });
      navigate("/order-confirmation");
    }, 2000);
  };

  return (
    <Box px={4} py={8} maxW="7xl" mx="auto">
      <Heading size="lg" mb={6} color={useColorModeValue("gray.700", "white")}>Checkout</Heading>
      {cart.length === 0 ? (
        <Text color={useColorModeValue("gray.600", "gray.300")}>Your cart is empty.</Text>
      ) : (
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={8}>
          <Box>
            <Heading size="md" mb={4}>Shipping Details</Heading>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input placeholder="John Doe" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="john@example.com" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Address</FormLabel>
                <Input placeholder="123 Main St, City" />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select placeholder="Select country">
                  <option>Nigeria</option>
                  <option>USA</option>
                  <option>UK</option>
                </Select>
              </FormControl>
            </Stack>
          </Box>

          <Box borderWidth="1px" borderRadius="lg" p={4} bg={useColorModeValue("white", "gray.800")}>
            <Heading size="md" mb={4}>Order Summary</Heading>
            <VStack align="stretch" spacing={4}>
              {cart.map((item) => (
                <Flex key={item.id} justify="space-between">
                  <Tooltip label={item.name} hasArrow>
                    <Text noOfLines={1}>{item.name}</Text>
                  </Tooltip>
                  <Text>${(item.price * item.quantity).toFixed(2)}</Text>
                </Flex>
              ))}
              <Divider />
              <HStack justify="space-between">
                <Text fontWeight="bold">Total</Text>
                <Text fontWeight="bold">${total.toFixed(2)}</Text>
              </HStack>
            </VStack>

            <Box mt={6}>
              <FormControl>
                <FormLabel>Payment Method</FormLabel>
                <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
                  <Stack direction="row">
                    <Radio value="stripe">Stripe</Radio>
                    <Radio value="paystack">Paystack</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </Box>

            <Button
              mt={6}
              colorScheme="teal"
              w="full"
              onClick={paymentMethod === "stripe" ? handleStripePayment : handlePaystackPayment}
              isLoading={isPlacingOrder}
              loadingText="Processing Payment..."
            >
              Pay & Place Order
            </Button>
          </Box>
        </Grid>
      )}
    </Box>
  );
};

export default CheckoutPage;

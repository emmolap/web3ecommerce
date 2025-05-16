import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Divider,
  VStack,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderDetails = location.state?.order || {};
  const items = orderDetails.items || [];

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Box
        p={8}
        maxW="xl"
        w="full"
        bg={useColorModeValue("white", "gray.800")}
        rounded="lg"
        boxShadow="lg"
        textAlign="center"
      >
        <Stack spacing={6}>
          <Image
            src="/success.svg"
            alt="Success"
            boxSize={{ base: "150px", md: "200px" }}
            mx="auto"
          />
          <Heading as="h2" size="lg">
            Payment Successful!
          </Heading>
          <Text fontSize="md">
            Thank you for your order. We've received your payment and your items
            are being processed. A confirmation email has been sent to you.
          </Text>
          <Box fontSize="sm" color="gray.500" textAlign="left">
            <Text><strong>Order ID:</strong> {orderDetails.id || "#ORD123456"}</Text>
            <Text><strong>Total:</strong> ${orderDetails.total || "0.00"}</Text>
            <Text><strong>Date:</strong> {orderDetails.date || new Date().toLocaleDateString()}</Text>
            <Text><strong>Payment Method:</strong> {orderDetails.paymentMethod || "Card"}</Text>
            {orderDetails.shipping && (
              <>
                <Text><strong>Shipping Address:</strong> {orderDetails.shipping.address}</Text>
                <Text><strong>Delivery Estimate:</strong> {orderDetails.shipping.eta}</Text>
              </>
            )}
          </Box>

          {items.length > 0 && (
            <Box mt={4} textAlign="left">
              <Divider my={2} />
              <Text fontWeight="bold" mb={2}>Items Ordered:</Text>
              <VStack align="start" spacing={3}>
                {items.map((item, index) => (
                  <HStack
                    key={index}
                    justify="space-between"
                    w="full"
                    align="center"
                  >
                    <HStack>
                      <Avatar
                        size="sm"
                        src={item.image || "/placeholder.png"}
                        name={item.name}
                      />
                      <Text>{item.name}</Text>
                    </HStack>
                    <Text>x{item.quantity}</Text>
                    <Text>${item.price}</Text>
                  </HStack>
                ))}
              </VStack>
              <Divider my={2} />
            </Box>
          )}

          <HStack justify="center" spacing={4}>
            <Button colorScheme="teal" onClick={() => navigate("/")}>
              Go to Homepage
            </Button>
            <Button variant="outline" onClick={() => navigate("/orders")}>
              View Order
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default SuccessPage;



// {
//     name: "Wireless Headphones",
//     quantity: 1,
//     price: "99.99",
//     image: "/images/headphones.jpg"
//   }



// navigate("/success", {
//     state: {
//       order: {
//         id: "ORD7890",
//         total: "149.99",
//         date: "2025-05-15",
//         paymentMethod: "Paystack"
//       }
//     }
//   });


// navigate("/success", {
//     state: {
//       order: {
//         id: "ORD7890",
//         total: "149.99",
//         date: "2025-05-15",
//         paymentMethod: "Paystack",
//         items: [
//           { name: "Wireless Headphones", quantity: 1, price: "99.99" },
//           { name: "USB-C Cable", quantity: 2, price: "25.00" }
//         ]
//       }
//     }
//   });

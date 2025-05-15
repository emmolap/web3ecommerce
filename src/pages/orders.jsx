import React from "react";
import {
  Box,
  Grid,
  Heading,
  useColorModeValue,
  Text,
  Flex,
  Tooltip,
  Image,
  Divider,
  Badge,
  VStack,
  HStack
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const orders = useSelector((state) => state.orders.items); // Assuming you have orders slice

  return (
    <Box px={4} py={8} maxW="7xl" mx="auto">
      <Heading size="lg" mb={6} color={useColorModeValue("gray.700", "white")}>My Orders</Heading>
      {orders.length === 0 ? (
        <Text color={useColorModeValue("gray.600", "gray.300")}>You have no orders yet.</Text>
      ) : (
        <VStack spacing={6} align="stretch">
          {orders.map((order) => (
            <Box
              key={order.id}
              borderWidth="1px"
              borderRadius="lg"
              bg={useColorModeValue("white", "gray.800")}
              shadow="sm"
              p={4}
            >
              <Flex justify="space-between" align="center" mb={3}>
                <Text fontWeight="bold">Order #{order.id}</Text>
                <Badge colorScheme={order.status === "delivered" ? "green" : "yellow"}>
                  {order.status}
                </Badge>
              </Flex>
              <Text fontSize="sm" color="gray.500" mb={2}>
                Placed on: {new Date(order.date).toLocaleDateString()}
              </Text>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
                {order.items.map((item) => (
                  <Flex key={item.id} gap={4} align="center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      boxSize="64px"
                      borderRadius="md"
                      objectFit="cover"
                    />
                    <Box>
                      <Tooltip label={item.name} hasArrow>
                        <Text fontWeight="medium" noOfLines={1} maxW="220px">
                          {item.name}
                        </Text>
                      </Tooltip>
                      <Text fontSize="sm" color="gray.500">
                        Quantity: {item.quantity}
                      </Text>
                      <Text fontWeight="semibold">
                        ${item.price.toFixed(2)}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Grid>
              <Divider my={4} />
              <HStack justify="space-between">
                <Text fontWeight="bold">Total:</Text>
                <Text fontWeight="bold">${order.total.toFixed(2)}</Text>
              </HStack>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default OrderPage;

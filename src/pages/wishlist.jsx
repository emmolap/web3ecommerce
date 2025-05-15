import React from "react";
import {
  Box,
  Grid,
  Heading,
  useColorModeValue,
  useToast,
  IconButton,
  Image,
  Text,
  Flex,
  Tooltip,
  Button
} from "@chakra-ui/react";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { removeFromWishlist } from "../store/wishlistSlice";

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast({
      title: "Added to cart",
      description: `${item.name} added to cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
    toast({
      title: "Removed from wishlist",
      description: `Item removed from wishlist.`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box px={4} py={8} maxW="7xl" mx="auto">
      <Heading size="lg" mb={6} color={useColorModeValue("gray.700", "white")}>Wishlist</Heading>
      {wishlistItems.length === 0 ? (
        <Text color={useColorModeValue("gray.600", "gray.300")}>Your wishlist is empty.</Text>
      ) : (
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
          {wishlistItems.map((item) => (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg={useColorModeValue("white", "gray.800")}
              shadow="sm"
              transition="all 0.3s"
              _hover={{ shadow: "md" }}
            >
              <Image src={item.image} alt={item.name} h="200px" w="full" objectFit="cover" />
              <Box p={4}>
                <Text fontSize="sm" color="gray.500" mb={1}>{item.category}</Text>
                <Tooltip label={item.name} hasArrow>
                  <Text
                    fontWeight="semibold"
                    fontSize="md"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    cursor="default"
                  >
                    {item.name}
                  </Text>
                </Tooltip>
                <Text fontSize="lg" fontWeight="bold" color="green.500" mt={2}>
                  ${item.price.toFixed(2)}
                </Text>
                <Flex mt={4} gap={2}>
                  <Button
                    leftIcon={<ShoppingCart size={18} />}
                    colorScheme="green"
                    variant="solid"
                    onClick={() => handleAddToCart(item)}
                    size="sm"
                    flex={1}
                  >
                    Add to Cart
                  </Button>
                  <IconButton
                    icon={<Trash2 size={18} />}
                    colorScheme="red"
                    variant="outline"
                    onClick={() => handleRemove(item.id)}
                    aria-label="Remove from wishlist"
                    size="sm"
                  />
                </Flex>
              </Box>
            </Box>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default WishlistPage;

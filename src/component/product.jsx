import {
  Box,
  Image,
  Text,
  Flex,
  Icon,
  Tooltip,
  Badge,
  useColorModeValue,
  IconButton,
  useBreakpointValue,
  useToast,
  keyframes,
  usePrefersReducedMotion,
  Tag,
  TagLabel,
  TagLeftIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Star, ShoppingCart, Heart, Eye, CheckCircle } from "lucide-react";

export default function ProductCard({ product }) {
  const overlayBg = useColorModeValue(
    "rgba(0,0,0,0.4)",
    "rgba(255,255,255,0.1)"
  );
  const cardWidth = useBreakpointValue({ base: "100%", sm: "72", md: "64" });
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const prefersReducedMotion = usePrefersReducedMotion();

  const bounce = keyframes`
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    `;

  const animation = prefersReducedMotion
    ? undefined
    : `${bounce} 0.6s ease-in-out`;

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const discountedPrice = product.discount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : product.price;

  return (
    <>
      <Box
        w={cardWidth}
        rounded="2xl"
        shadow="md"
        overflow="hidden"
        role="group"
        pos="relative"
        _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
        transition="all 0.3s"
      >
        <Box pos="relative" h="48" overflow="hidden">
          <Image
            src={product.image}
            alt={product.name}
            objectFit="cover"
            w="full"
            h="full"
            transition="transform 0.3s"
            _groupHover={{ transform: "scale(1.05)" }}
          />
          <Flex
            pos="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg={overlayBg}
            opacity="0"
            _groupHover={{ opacity: 1 }}
            transition="opacity 0.3s"
            align="center"
            justify="center"
            gap={4}
            px={4}
          >
            <Flex align="center" gap={1} color="yellow.400">
              <Icon as={Star} w={4} h={4} />
              <Text color="white">{product.rating}</Text>
            </Flex>
            <IconButton
              icon={<ShoppingCart />}
              size="sm"
              aria-label="Add to cart"
              colorScheme="green"
              variant="ghost"
              onClick={handleAddToCart}
              animation={animation}
            />
            <IconButton
              icon={<Heart />}
              size="sm"
              aria-label="Add to wishlist"
              colorScheme="red"
              variant="ghost"
              onClick={handleAddToWishlist}
              animation={animation}
            />
            <IconButton
              icon={<Eye />}
              size="sm"
              aria-label="Quick view"
              colorScheme="blue"
              variant="ghost"
              onClick={onOpen}
            />
          </Flex>
          {product.discount && (
            <Badge
              pos="absolute"
              top={2}
              left={2}
              bg="red.500"
              color="white"
              rounded="md"
              px={2}
              py={0.5}
              fontSize="xs"
            >
              {product.discount}% OFF
            </Badge>
          )}
          {product.inStock === false && (
            <Tag
              pos="absolute"
              bottom={2}
              right={2}
              bg="gray.600"
              color="white"
              size="sm"
              rounded="full"
            >
              <TagLeftIcon as={CheckCircle} />
              <TagLabel>Out of stock</TagLabel>
            </Tag>
          )}
        </Box>

        <Box p={4}>
          <Text fontSize="sm" color="gray.500" mb={1}>
            {product.category}
          </Text>
          <Tooltip label={product.name} hasArrow>
            <Text
              fontWeight="semibold"
              fontSize="md"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              w="full"
              cursor="default"
            >
              {product.name}
            </Text>
          </Tooltip>
          <Flex align="center" gap={2} mt={2}>
            <Text fontSize="lg" fontWeight="bold" color="green.500">
              ${discountedPrice}
            </Text>
            {product.discount && (
              <Text
                fontSize="sm"
                color="gray.500"
                textDecoration="line-through"
              >
                ${product.price.toFixed(2)}
              </Text>
            )}
          </Flex>
        </Box>
      </Box>

      {/* Quick View Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="scale">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{product.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Image
              src={product.image}
              alt={product.name}
              mb={4}
              borderRadius="md"
            />
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
              mb={1}
            >
              Category: {product.category}
            </Text>
            <Flex align="center" gap={2} mb={2}>
              <Flex align="center" gap={1} color="yellow.400">
                <Icon as={Star} w={4} h={4} />
                <Text>{product.rating}</Text>
              </Flex>
              {product.inStock ? (
                <Badge colorScheme="green">In Stock</Badge>
              ) : (
                <Badge colorScheme="red">Out of Stock</Badge>
              )}
            </Flex>
            <Text fontSize="lg" fontWeight="bold" color="green.500" mb={3}>
              ${discountedPrice}
              {product.discount && (
                <Text
                  as="span"
                  ml={2}
                  fontSize="sm"
                  color="gray.500"
                  textDecoration="line-through"
                >
                  ${product.price.toFixed(2)}
                </Text>
              )}
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.700", "gray.300")}
              mb={4}
            >
              {product.description ||
                "This is a placeholder for a more detailed product description, highlighting features, materials, and usage benefits."}
            </Text>

            <Flex gap={3}>
              <Button
                colorScheme="green"
                leftIcon={<ShoppingCart size={18} />}
                onClick={handleAddToCart}
                isDisabled={!product.inStock}
                flex={1}
              >
                Add to Cart
              </Button>
              <Button
                colorScheme="red"
                leftIcon={<Heart size={18} />}
                onClick={handleAddToWishlist}
                variant="outline"
                flex={1}
              >
                Wishlist
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

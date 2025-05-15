import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Badge,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { SearchIcon, ShoppingCartIcon, StarIcon } from "@chakra-ui/icons";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

const Navbar = () => {
  const cartCount = useSelector((state: RootState) => state.cart.count);
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.600", "white")}
      boxShadow="md"
    >
      {/* Logo */}
      <Link href="/" passHref>
        <Box
          as="a"
          fontSize="xl"
          fontWeight="bold"
          _hover={{ textDecoration: "none" }}
        >
          🛍️ EcoStore
        </Box>
      </Link>

      {/* Search Bar */}
      <Box
        flex={{ base: "0", md: "1" }}
        maxW={{ md: "600px" }}
        mx={{ md: "8" }}
        display={{ base: "none", md: "block" }}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Search products..."
            borderRadius="full"
          />
        </InputGroup>
      </Box>

      {/* Icons */}
      <Flex align="center" gap={4}>
        {/* Wishlist */}
        <Link href="/wishlist" passHref>
          <IconButton
            aria-label="Wishlist"
            icon={<StarIcon />}
            variant="ghost"
            fontSize="xl"
          />
        </Link>

        {/* Cart */}
        <Link href="/cart" passHref>
          <Box position="relative">
            <IconButton
              aria-label="Cart"
              icon={<ShoppingCartIcon />}
              variant="ghost"
              fontSize="xl"
            />
            <Badge
              position="absolute"
              top="-1"
              right="2"
              colorScheme="red"
              borderRadius="full"
            >
              {cartCount}
            </Badge>
          </Box>
        </Link>

        {/* Authentication */}
        {auth.isAuthenticated ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Account"
              icon={
                <Avatar
                  size="sm"
                  name={auth.user?.name}
                  src={auth.user?.avatar}
                />
              }
              variant="ghost"
              borderRadius="full"
            />
            <MenuList>
              <MenuItem>
                <Text fontWeight="bold">{auth.user?.name}</Text>
              </MenuItem>
              <MenuItem as={Link} href="/profile">
                Profile
              </MenuItem>
              <MenuItem as={Link} href="/orders">
                My Orders
              </MenuItem>
              <MenuItem onClick={() => dispatch(logout())} color="red.500">
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Link href="/login" passHref>
            <IconButton
              aria-label="Login"
              icon={<FiUser />}
              variant="ghost"
              fontSize="xl"
            />
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;

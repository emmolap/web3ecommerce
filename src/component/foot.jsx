import {
  Box,
  Container,
  Flex,
  Grid,
  Text,
  Link,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBitcoin, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { SiSolana, SiTether } from "react-icons/si";
import { SuiLogo } from "./SuiLogo"; // You'll need to create this

const Footer = () => {
  const bgColor = useColorModeValue("gray.900", "gray.800");
  const color = useColorModeValue("white", "gray.100");

  // Custom SUI Logo component
  const SuiLogo = () => (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm5.492-21.532v-.005c.164-.22.348-.422.552-.599.974-.831 2.418-.712 3.249.262.831.974.712 2.418-.262 3.249-1.6 1.366-3.725 2.102-5.984 2.102h-.013c-2.258 0-4.383-.736-5.984-2.102-.974-.831-1.093-2.275-.262-3.249.831-.974 2.275-1.093 3.249-.262.204.177.387.379.551.599v.005h5.904zM9.984 19.468c-.164.22-.348.422-.552.599-.974.831-2.418.712-3.249-.262-.831-.974-.712-2.418.262-3.249 1.6-1.366 3.725-2.102 5.984-2.102h.013c2.258 0 4.383.736 5.984 2.102.974.831 1.093 2.275.262 3.249-.831.974-2.275 1.093-3.249.262-.204-.177-.387-.379-.551-.599v-.005H9.984z" />
    </svg>
  );

  return (
    <Box bg={bgColor} color={color} mt={16}>
      <Container maxW="container.xl" py={10}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          {/* Company Info */}
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              EcoStore
            </Text>
            <Text fontSize="sm" opacity={0.8}>
              Your sustainable shopping destination
            </Text>
          </Box>

          {/* Payment Methods */}
          <Box>
            <Text fontSize="lg" fontWeight="semibold" mb={4}>
              Payment Options
            </Text>
            <Flex wrap="wrap" gap={4}>
              {/* Traditional Payments */}
              <Flex direction="column" gap={2}>
                <Text fontSize="sm" opacity={0.8}>
                  Credit/Debit Cards:
                </Text>
                <Flex gap={3}>
                  <Icon as={FaCcVisa} boxSize={8} />
                  <Icon as={FaCcMastercard} boxSize={8} />
                </Flex>
              </Flex>

              {/* Crypto Payments */}
              <Flex direction="column" gap={2}>
                <Text fontSize="sm" opacity={0.8}>
                  Cryptocurrencies:
                </Text>
                <Flex gap={3} align="center">
                  <Icon as={FaBitcoin} boxSize={6} />
                  <Icon as={SiTether} boxSize={6} />
                  <Icon as={SuiLogo} boxSize={6} />
                  <Icon as={SiSolana} boxSize={6} />
                </Flex>
              </Flex>
            </Flex>
          </Box>

          {/* Links */}
          <Box>
            <Text fontSize="lg" fontWeight="semibold" mb={4}>
              Quick Links
            </Text>
            <Flex direction="column" gap={2}>
              <Link href="/about" fontSize="sm">
                About Us
              </Link>
              <Link href="/contact" fontSize="sm">
                Contact
              </Link>
              <Link href="/terms" fontSize="sm">
                Terms of Service
              </Link>
              <Link href="/privacy" fontSize="sm">
                Privacy Policy
              </Link>
            </Flex>
          </Box>
        </Grid>

        {/* Copyright */}
        <Text
          textAlign="center"
          mt={8}
          pt={6}
          borderTop="1px"
          borderColor="whiteAlpha.300"
          fontSize="sm"
          opacity={0.8}
        >
          © {new Date().getFullYear()} EcoStore. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;

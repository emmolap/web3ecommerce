import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  Link,
  useToast,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      toast({
        title: "Missing fields",
        description: "Please enter both email and password.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Login successful",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/");
  };

  const handleSocialLogin = (platform) => {
    toast({
      title: `${platform} login simulated`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue("gray.50", "gray.900")}>
      <Box
        rounded="lg"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="lg"
        p={8}
        w={{ base: "90%", md: "400px" }}
      >
        <Stack spacing={4}>
          <Heading fontSize="2xl" textAlign="center">
            Sign in to your account
          </Heading>

          <Button
            leftIcon={<Icon as={FaGoogle} />}
            colorScheme="red"
            variant="outline"
            onClick={() => handleSocialLogin("Google")}
          >
            Continue with Google
          </Button>
          <Button
            leftIcon={<Icon as={FaFacebook} />}
            colorScheme="facebook"
            variant="outline"
            onClick={() => handleSocialLogin("Facebook")}
          >
            Continue with Facebook
          </Button>

          <Divider my={4} />

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme="teal" onClick={handleLogin}>
              Sign in
            </Button>
            <Flex justifyContent="space-between">
              <Link color="teal.500" href="/forgot-password">Forgot password?</Link>
              <Link color="teal.500" href="/register">Create account</Link>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default LoginPage;

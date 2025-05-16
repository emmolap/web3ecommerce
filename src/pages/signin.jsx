import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  useColorModeValue,
  Flex,
  Link,
  useToast,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      toast({
        title: "Missing fields",
        description: "Please fill all the fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (password !== confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "Registration successful",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/login");
  };

  const handleSocialSignup = (platform) => {
    toast({
      title: `${platform} signup simulated`,
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
            Create a new account
          </Heading>

          <Button
            leftIcon={<Icon as={FaGoogle} />}
            colorScheme="red"
            variant="outline"
            onClick={() => handleSocialSignup("Google")}
          >
            Continue with Google
          </Button>
          <Button
            leftIcon={<Icon as={FaFacebook} />}
            colorScheme="facebook"
            variant="outline"
            onClick={() => handleSocialSignup("Facebook")}
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
          <FormControl id="confirmPassword" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </FormControl>

          <Stack spacing={6}>
            <Button colorScheme="teal" onClick={handleRegister}>
              Register
            </Button>
            <Flex justifyContent="center">
              <Link color="teal.500" href="/login">Already have an account? Sign in</Link>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default RegisterPage;

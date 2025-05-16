import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Avatar,
  Heading,
  useColorModeValue,
  Flex,
  useToast,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Textarea,
  Text,
  Image
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../redux/userSlice"; // Assumes redux slice exists

const ProfilePage = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [name, setName] = React.useState(user.name || "");
  const [email, setEmail] = React.useState(user.email || "");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [address, setAddress] = React.useState(user.address || "");

  const handleUpdate = () => {
    if (!name || !email) {
      toast({
        title: "Missing fields",
        description: "Please fill out all required fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (password && password !== confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "New passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    dispatch(updateProfile({ name, email, address }));
    toast({
      title: "Profile updated",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue("gray.50", "gray.900")}>
      <Box
        rounded="lg"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="lg"
        p={6}
        w={{ base: "95%", md: "700px" }}
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Profile Info</Tab>
            <Tab>Address</Tab>
            <Tab>Orders</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Stack spacing={6} align="center">
                <Avatar size="xl" name={name} />
                <Heading fontSize="2xl">Your Profile</Heading>

                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>

                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>

                <FormControl id="password">
                  <FormLabel>New Password</FormLabel>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>

                <FormControl id="confirmPassword">
                  <FormLabel>Confirm New Password</FormLabel>
                  <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </FormControl>

                <Button colorScheme="teal" width="full" onClick={handleUpdate}>
                  Save Changes
                </Button>
              </Stack>
            </TabPanel>

            <TabPanel>
              <Stack spacing={4}>
                <FormControl id="address">
                  <FormLabel>Shipping Address</FormLabel>
                  <Textarea value={address} onChange={(e) => setAddress(e.target.value)} />
                </FormControl>
                <Button colorScheme="teal" width="full" onClick={handleUpdate}>
                  Save Address
                </Button>
              </Stack>
            </TabPanel>

            <TabPanel>
              <Text fontWeight="bold">Order History</Text>
              {/* Placeholder for mapped orders */}
              <Box mt={4} p={4} borderWidth={1} rounded="lg">
                <Text>Order #12345</Text>
                <Text>Status: Delivered</Text>
                <Text>Total: $89.99</Text>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default ProfilePage;

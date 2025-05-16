// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   Grid,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Button,
//   useColorModeValue,
//   Flex,
//   Icon,
//   Link,
// } from "@chakra-ui/react";
// import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
// import { GiAfricanWoman } from "react-icons/gi";

// const ContactPage = () => {
//   const accentColor = useColorModeValue("teal.600", "teal.300");
//   const borderColor = useColorModeValue("gray.200", "gray.600");

//   return (
//     <Container maxW="container.xl" py={12}>
//       {/* Hero Section */}
//       <Flex direction="column" align="center" textAlign="center" mb={16}>
//         <Icon as={GiAfricanWoman} w={16} h={16} color={accentColor} mb={4} />
//         <Heading as="h1" size="2xl" mb={4}>
//           Connect With Our{" "}
//           <Box as="span" color={accentColor}>
//             Cultural Hub
//           </Box>
//         </Heading>
//         <Text fontSize="xl" maxW="2xl" opacity={0.9}>
//           We're here to help you embrace traditional elegance. Reach out for
//           support, custom orders, or cultural inquiries.
//         </Text>
//       </Flex>

//       {/* Contact Container */}
//       <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12} mb={16}>
//         {/* Contact Form */}
//         <Box p={8} border="1px" borderColor={borderColor} borderRadius="lg">
//           <Heading as="h2" size="lg" mb={8}>
//             Send Us a Message
//           </Heading>

//           <form>
//             <Grid
//               templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
//               gap={6}
//             >
//               <FormControl>
//                 <FormLabel>Your Name</FormLabel>
//                 <Input
//                   type="text"
//                   placeholder="Full name"
//                   focusBorderColor={accentColor}
//                 />
//               </FormControl>

//               <FormControl>
//                 <FormLabel>Email Address</FormLabel>
//                 <Input
//                   type="email"
//                   placeholder="hello@example.com"
//                   focusBorderColor={accentColor}
//                 />
//               </FormControl>
//             </Grid>

//             <FormControl mt={6}>
//               <FormLabel>Subject</FormLabel>
//               <Input
//                 type="text"
//                 placeholder="e.g., Custom Order Inquiry"
//                 focusBorderColor={accentColor}
//               />
//             </FormControl>

//             <FormControl mt={6}>
//               <FormLabel>Message</FormLabel>
//               <Textarea
//                 placeholder="Share your thoughts..."
//                 rows={6}
//                 focusBorderColor={accentColor}
//               />
//             </FormControl>

//             <Button
//               mt={8}
//               colorScheme="teal"
//               size="lg"
//               rightIcon={<GiAfricanWoman />}
//               type="submit"
//             >
//               Send Message
//             </Button>
//           </form>
//         </Box>

//         {/* Contact Info */}
//         <Box>
//           <Heading as="h2" size="lg" mb={8}>
//             Traditional Touchpoints
//           </Heading>

//           {/* Contact Methods */}
//           <Stack spacing={8}>
//             <Flex align="center" gap={4}>
//               <Icon as={FaMapMarkerAlt} w={8} h={8} color={accentColor} />
//               <Box>
//                 <Text fontWeight="bold" mb={1}>
//                   Cultural Headquarters
//                 </Text>
//                 <Text fontSize="sm">
//                   Adinkra Heritage Square
//                   <br />
//                   Kumasi, Ghana
//                   <br />
//                   GS-025-9876
//                 </Text>
//               </Box>
//             </Flex>

//             <Flex align="center" gap={4}>
//               <Icon as={FaPhoneAlt} w={8} h={8} color={accentColor} />
//               <Box>
//                 <Text fontWeight="bold" mb={1}>
//                   Sacred Conversation Hours
//                 </Text>
//                 <Text fontSize="sm">
//                   Mon-Fri: 9AM - 5PM GMT
//                   <br />
//                   Phone: +233 55 123 4567
//                   <br />
//                   WhatsApp: +233 55 765 4321
//                 </Text>
//               </Box>
//             </Flex>

//             <Flex align="center" gap={4}>
//               <Icon as={FaRegEnvelope} w={8} h={8} color={accentColor} />
//               <Box>
//                 <Text fontWeight="bold" mb={1}>
//                   Digital Messaging
//                 </Text>
//                 <Text fontSize="sm">
//                   General Inquiries:{" "}
//                   <Link href="mailto:wisdom@adinkra.com">
//                     wisdom@adinkra.com
//                   </Link>
//                   <br />
//                   Custom Orders:{" "}
//                   <Link href="mailto:create@adinkra.com">
//                     create@adinkra.com
//                   </Link>
//                   <br />
//                   Cultural Partnerships:{" "}
//                   <Link href="mailto:elders@adinkra.com">
//                     elders@adinkra.com
//                   </Link>
//                 </Text>
//               </Box>
//             </Flex>
//           </Stack>

//           {/* Map */}
//           <Box mt={12} borderRadius="lg" overflow="hidden">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.231408753814!2d-1.6253782847707438!3d6.688657595173318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDEnMTkuMiJOIDHCsDM3JzI1LjMiVw!5e0!3m2!1sen!2sgh!4v1624456789012!5m2!1sen!2sgh"
//               width="100%"
//               height="300"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//             />
//           </Box>
//         </Box>
//       </Grid>

//       {/* Cultural Note */}
//       <Box
//         textAlign="center"
//         mt={16}
//         pt={8}
//         borderTop="1px"
//         borderColor={borderColor}
//       >
//         <Text fontSize="sm" fontStyle="italic" opacity={0.8}>
//           "In the spirit of our ancestors, we respond to all inquiries within 2
//           market days."
//         </Text>
//       </Box>
//     </Container>
//   );
// };

// export default ContactPage;

// //contact form
// // Example using Formspree
// import { useForm, ValidationError } from "@formspree/react";

// function ContactForm() {
//   const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");

//   if (state.succeeded) {
//     return <Text>Thank you! Your message has been received.</Text>;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Form fields */}
//       <Button type="submit" disabled={state.submitting}>
//         Send Message
//       </Button>
//     </form>
//   );
// }

import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Heading,
  useColorModeValue,
  Flex,
  useToast,
} from "@chakra-ui/react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    if (!name || !email || !message) {
      toast({
        title: "Missing fields",
        description: "Please fill all the fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate API submission
    toast({
      title: "Message Sent",
      description: "We'll get back to you shortly.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue("gray.50", "gray.900")}>
      <Box
        rounded="lg"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="lg"
        p={8}
        w={{ base: "90%", md: "600px" }}
      >
        <Stack spacing={4}>
          <Heading fontSize="2xl" textAlign="center">
            Contact Us
          </Heading>

          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>

          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
          </FormControl>

          <Button colorScheme="teal" onClick={handleSubmit}>
            Send Message
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default ContactPage;

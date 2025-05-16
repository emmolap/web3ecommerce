// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   Flex,
//   Grid,
//   Image,
//   Stack,
//   useColorModeValue,
//   Avatar,
//   Link,
//   List,
//   ListItem,
//   ListIcon,
// } from "@chakra-ui/react";
// import { FaHands, FaRegGem, FaRegHeart, FaSeedling } from "react-icons/fa";
// import { GiAfrica, GiBeads, GiTraditionalMask } from "react-icons/gi";

// const AboutPage = () => {
//   const accentColor = useColorModeValue("teal.600", "teal.300");
//   const sectionBg = useColorModeValue("gray.50", "gray.800");

//   return (
//     <Container maxW="container.xl" py={12}>
//       {/* Hero Section */}
//       <Flex direction="column" align="center" textAlign="center" mb={16}>
//         <GiBeads
//           size="64px"
//           color={useColorModeValue("teal.600", "teal.300")}
//         />
//         <Heading as="h1" size="2xl" mb={6} mt={4}>
//           Preserving Heritage Through{" "}
//           <Box as="span" color={accentColor}>
//             Traditional Adornments
//           </Box>
//         </Heading>
//         <Text fontSize="xl" maxW="2xl" opacity={0.9}>
//           Connecting the world to authentic African fashion and handcrafted bead
//           artistry
//         </Text>
//       </Flex>

//       {/* Craftsmanship Section */}
//       <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12} mb={24}>
//         <Box order={{ base: 2, md: 1 }}>
//           <Image
//             src="/artisan-working.jpg"
//             alt="Artisan crafting beads"
//             borderRadius="lg"
//             objectFit="cover"
//             height="100%"
//           />
//         </Box>
//         <Flex direction="column" justify="center" order={{ base: 1, md: 2 }}>
//           <Heading as="h2" size="lg" mb={6}>
//             The Art of Beadwork
//           </Heading>
//           <Text mb={4}>
//             Each piece in our collection tells a story through its patterns and
//             colors. Our artisans employ techniques passed down through
//             generations, using:
//           </Text>
//           <List spacing={3}>
//             <ListItem>
//               <ListIcon as={FaRegGem} color={accentColor} />
//               Natural materials: glass, clay, and recycled beads
//             </ListItem>
//             <ListItem>
//               <ListIcon as={GiAfrica} color={accentColor} />
//               Traditional African design patterns
//             </ListItem>
//             <ListItem>
//               <ListIcon as={FaHands} color={accentColor} />
//               Hand-weaving and embroidery techniques
//             </ListItem>
//           </List>
//         </Flex>
//       </Grid>

//       {/* Cultural Significance Section */}
//       <Box bg={sectionBg} py={16} mb={24}>
//         <Container maxW="container.lg">
//           <Grid
//             templateColumns={{ base: "1fr", md: "1fr 1fr" }}
//             gap={12}
//             align="center"
//           >
//             <Box>
//               <Heading as="h2" size="lg" mb={6}>
//                 More Than Accessories
//               </Heading>
//               <Text mb={4}>In many African cultures, beads serve as:</Text>
//               <Grid templateColumns="repeat(2, 1fr)" gap={6}>
//                 {[
//                   {
//                     icon: GiTraditionalMask,
//                     title: "Cultural Identity",
//                     text: "Tribe-specific patterns and colors",
//                   },
//                   {
//                     icon: FaSeedling,
//                     title: "Rites of Passage",
//                     text: "Coming-of-age ceremonies",
//                   },
//                   {
//                     icon: FaRegHeart,
//                     title: "Love & Marriage",
//                     text: "Bridal jewelry traditions",
//                   },
//                   {
//                     icon: FaHands,
//                     title: "Social Status",
//                     text: "Bead complexity denotes rank",
//                   },
//                 ].map((item, index) => (
//                   <Flex key={index} align="center" gap={3}>
//                     <Box fontSize="2xl" as={item.icon} color={accentColor} />
//                     <Box>
//                       <Text fontWeight="bold">{item.title}</Text>
//                       <Text fontSize="sm" opacity={0.8}>
//                         {item.text}
//                       </Text>
//                     </Box>
//                   </Flex>
//                 ))}
//               </Grid>
//             </Box>
//             <Image
//               src="/cultural-beads.jpg"
//               alt="Cultural bead significance"
//               borderRadius="lg"
//             />
//           </Grid>
//         </Container>
//       </Box>

//       {/* Artisan Section */}
//       <Box mb={24}>
//         <Heading as="h2" size="lg" textAlign="center" mb={12}>
//           Meet Our Artisans
//         </Heading>
//         <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
//           {[
//             {
//               name: "Amina Diallo",
//               craft: "Bambara Beadwork",
//               location: "Mali",
//               avatar: "/artisan-1.jpg",
//             },
//             {
//               name: "Ngozi Eze",
//               craft: "Igbo Waist Beads",
//               location: "Nigeria",
//               avatar: "/artisan-2.jpg",
//             },
//             {
//               name: "Jelani Okeke",
//               craft: "Maasai Necklaces",
//               location: "Kenya",
//               avatar: "/artisan-3.jpg",
//             },
//             {
//               name: "Fatoumata Sow",
//               craft: "Tuareg Silver",
//               location: "Niger",
//               avatar: "/artisan-4.jpg",
//             },
//           ].map((member, index) => (
//             <Flex
//               key={index}
//               direction="column"
//               align="center"
//               textAlign="center"
//             >
//               <Avatar
//                 size="2xl"
//                 name={member.name}
//                 src={member.avatar}
//                 mb={4}
//                 border={`2px solid ${accentColor}`}
//               />
//               <Heading as="h3" size="sm" mb={1}>
//                 {member.name}
//               </Heading>
//               <Text fontSize="sm" fontWeight="500" color={accentColor}>
//                 {member.craft}
//               </Text>
//               <Text fontSize="sm" opacity={0.8}>
//                 {member.location}
//               </Text>
//             </Flex>
//           ))}
//         </Grid>
//       </Box>

//       {/* Preservation Promise */}
//       <Box bg={sectionBg} py={16}>
//         <Container maxW="container.lg" textAlign="center">
//           <GiBeads size="48px" color={accentColor} />
//           <Heading as="h2" size="lg" mb={6} mt={4}>
//             Our Preservation Promise
//           </Heading>
//           <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
//             {[
//               {
//                 title: "Fair Trade Practices",
//                 text: "Direct partnerships with artisan cooperatives",
//               },
//               {
//                 title: "Craft Preservation",
//                 text: "Documenting traditional techniques",
//               },
//               {
//                 title: "Next Generation Training",
//                 text: "Apprenticeship programs for youth",
//               },
//             ].map((promise, index) => (
//               <Box key={index} p={6}>
//                 <Heading as="h3" size="md" mb={3}>
//                   {promise.title}
//                 </Heading>
//                 <Text fontSize="sm" opacity={0.8}>
//                   {promise.text}
//                 </Text>
//               </Box>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </Container>
//   );
// };

// export default AboutPage;

import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  Image,
} from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <Flex minH="100vh" align="center" justify="center" bg={useColorModeValue("gray.50", "gray.900")}>
      <Box
        maxW="4xl"
        mx="auto"
        p={8}
        rounded="lg"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="lg"
      >
        <Stack spacing={6}>
          <Heading fontSize={{ base: "2xl", md: "3xl" }} textAlign="center">
            About Us
          </Heading>

          <Image
            src="/about-illustration.svg" // Replace with your image path or external URL
            alt="About illustration"
            mx="auto"
            boxSize={{ base: "200px", md: "300px" }}
            objectFit="contain"
          />

          <Text fontSize={{ base: "md", md: "lg" }} textAlign="center">
            Welcome to our e-commerce platform! We're passionate about connecting people with the products they love.
            Our mission is to provide an exceptional shopping experience through quality service, secure transactions,
            and a user-friendly interface.
          </Text>

          <Text fontSize={{ base: "md", md: "lg" }} textAlign="center">
            Founded by a team of tech and business enthusiasts, we are constantly evolving to meet your needs.
            Whether you're here to shop, explore, or simply learn more, we're glad you're with us.
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default AboutPage;

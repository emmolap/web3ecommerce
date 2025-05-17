import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue("gray.50", "gray.900")}
      px={6}
    >
      <Stack spacing={6} align="center" textAlign="center">
        <Image
          src="/404.svg"
          alt="404 Not Found"
          boxSize={{ base: "200px", md: "300px" }}
        />
        <Heading size="2xl">Page Not Found</Heading>
        <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.300")}>
          The page you’re looking for doesn’t exist.
        </Text>
        <Button colorScheme="teal" onClick={() => navigate("/")}>
          Go to Homepage
        </Button>
      </Stack>
    </Box>
  );
};

export default NotFoundPage;

// import { useLocation } from "react-router-dom";
// // ...
// const location = useLocation();

// useEffect(() => {
//   const log404 = async () => {
//     const path = location.pathname;
//     // Example: log to your API or analytics service
//     console.log("404 - Page not found:", path);

//     // Example: Send to Google Analytics (if using gtag)
//     if (window.gtag) {
//       window.gtag("event", "page_not_found", {
//         path,
//         timestamp: new Date().toISOString(),
//       });
//     }

//     // Or send to your backend
//     // await fetch("/api/log404", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify({ path, timestamp: new Date().toISOString() }),
//     // });
//   };

//   log404();
// }, [location]);

// // /api/log404.ts (Node.js/Express example)
// app.post("/api/log404", async (req, res) => {
//   const { path, timestamp } = req.body;
//   console.log(`404 Logged: ${path} at ${timestamp}`);
//   // Save to DB here (e.g., MongoDB, PostgreSQL)
//   res.sendStatus(200);
// });

// You can set up an API route to store these paths to your database:

// If using:

// Google Analytics: Make sure gtag is initialized on your site.

// Plausible, PostHog, or Mixpanel: You can call their event tracking API similarly.

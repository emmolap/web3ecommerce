import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

const PrivacyPolicyPage = () => {
  return (
    <Box py={10} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="4xl">
        <Stack spacing={6}>
          <Heading>Privacy Policy</Heading>
          <Text>
            This Privacy Policy describes how we collect, use, and protect your
            information when you use our website.
          </Text>

          <Heading size="md">1. Information We Collect</Heading>
          <Text>
            We may collect personal information such as your name, email, phone
            number, shipping address, and payment details.
          </Text>

          <Heading size="md">2. How We Use Your Information</Heading>
          <Text>
            Your information is used to process orders, manage your account,
            provide customer support, and send updates or promotional content.
          </Text>

          <Heading size="md">3. Sharing of Information</Heading>
          <Text>
            We do not sell or rent your personal data. Your information may be
            shared with trusted third-party service providers solely for
            business operations.
          </Text>

          <Heading size="md">4. Security</Heading>
          <Text>
            We implement security measures to protect your information from
            unauthorized access or disclosure.
          </Text>

          <Heading size="md">5. Cookies</Heading>
          <Text>
            Cookies help us enhance user experience and track website
            performance. You can modify your browser settings to manage cookies.
          </Text>

          <Heading size="md">6. Changes to This Policy</Heading>
          <Text>
            We reserve the right to modify this Privacy Policy at any time.
            Updates will be posted on this page.
          </Text>

          <Heading size="md">7. Contact Us</Heading>
          <Text>
            If you have any questions about this Privacy Policy, please contact
            us at support@example.com.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;

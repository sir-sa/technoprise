import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Footer = () => {
  // Dummy logo image URL (replace with your actual logo image URL)
  const logoSrc = "https://via.placeholder.com/100";

  return (
    <Box bg="black" color="white" p="4">
      <Flex align="center" justify="space-between">
        <Flex align="center">
            <Image src={logoSrc} alt="Logo" h="50px" />
            <Text ml="2">Blog</Text>
        </Flex>
        <Text>&copy; 2024. Blog Post</Text>
      </Flex>
    </Box>
  );
};

export default Footer;

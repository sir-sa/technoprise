import { Box, Flex, Link, Button, Input, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Navigation = () => {
  // Dummy logo image URL (replace with your actual logo image URL)
  const logoSrc = "https://via.placeholder.com/100";

  return (
    <Flex as="nav" align="center" justify="space-between" p="4" bg="black" color="white">
      <Box>
        <NextLink href="/" passHref>
          <Link fontSize="xl" fontWeight="bold">
            <Flex align="center">
                <Image src={logoSrc} alt="Logo" h="50px" />
                <Text ml="2">Blog</Text>
            </Flex>
          </Link>
        </NextLink>
      </Box>
      <Box>
        <Flex alignItems="center">
          <NextLink href="/about" passHref>
            <Link mr="40px">Blogs</Link>
          </NextLink>
          <Input variant="ghost" mr="4" placeholder="Search..." />
          <Button
            as={NextLink}
            href="/create"
            variant="solid"
            colorScheme="green"
            size="lg"
            bg="green.400"
          >
            Create Blog Post
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navigation;

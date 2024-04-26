import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from 'next/link';

const PostPage = ({ post }) => {
  return (
    <Box p={4}>
      <Heading mb={4}>{post.title}</Heading>
      <Text mb={4} fontSize="sm" color="gray.500">{post.date}</Text>
      <Text>{post.content}</Text>
      <Link href="/" passHref>
        <Button mt={4}>Back to Homepage</Button>
      </Link>
    </Box>
  );
};

export default PostPage;
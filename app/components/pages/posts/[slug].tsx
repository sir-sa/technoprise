import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from 'next/link';

// Function to fetch blog post data based on slug
export async function getStaticProps(context) {
  // Fetch blog post data based on the slug provided in context.params.slug
  const slug = context.params.slug;
  // Fetch blog post data based on slug from your data source or backend

  // Dummy data for illustration purposes
  const post = {
    id: 1,
    title: "Sample Blog Post",
    date: "April 30, 2024",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // Add other fields as needed
  };

  return {
    props: {
      post,
    },
  };
}

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

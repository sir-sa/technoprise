import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Link from 'next/link';

import {blogs} from "../data";

const BlogComponent = () => {
  

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {blogs.map((blog) => (
        <GridItem key={blog.id}>
          {/* Wrap each blog post in a Link component */}
          {/* <Link href="/posts/[id]" as="/posts/1"> */}
          <Link href="/posts/[id]" as={`/posts/${blog.id}`}>
            <Box as="a" borderWidth="1px" borderRadius="lg" overflow="hidden" cursor="pointer">
              <Image src={blog.imageSrc} alt={blog.title} />
              <Box p="6">
                <Text fontSize="xl" fontWeight="semibold" mb="2">
                  {blog.title}
                </Text>
                <Text fontSize="sm" color="gray.500" mb="2">
                  {blog.date}
                </Text>
                <Text fontSize="md">
                  {blog.excerpt}
                </Text>
              </Box>
            </Box>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};

export default BlogComponent;

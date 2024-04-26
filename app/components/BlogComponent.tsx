import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Link from 'next/link';

const BlogComponent = () => {
  // Dummy data for blogs (replace with actual data)
 

  const blogs = [
    { id: 1, title: "Lorem Ipsum Dolor Sit Amet", date: "April 20, 2024", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod magna at hendrerit malesuada.",imageSrc: "https://via.placeholder.com/300" },
    { id: 2, title: "Consectetur Adipiscing Elit", date: "April 21, 2024", excerpt: "Sed sit amet sapien vitae justo malesuada tempor. Ut lobortis, nisi at convallis faucibus, elit mauris tempus purus.",imageSrc: "https://via.placeholder.com/300" },
    { id: 3, title: "Vivamus Euismod Magna", date: "April 22, 2024", excerpt: "Vivamus euismod magna at hendrerit malesuada. Nulla facilisi. Duis eu nisi at lacus gravida eleifend.", imageSrc: "https://via.placeholder.com/300" },
    { id: 4, title: "Ut Lobortis, Nisi at Convallis", date: "April 23, 2024", excerpt: "Ut lobortis, nisi at convallis faucibus, elit mauris tempus purus, eget semper felis lacus nec elit.", imageSrc: "https://via.placeholder.com/300" },
    { id: 5, title: "Nulla Facilisi Duis Eu Nisi", date: "April 24, 2024", excerpt: "Nulla facilisi. Duis eu nisi at lacus gravida eleifend. Curabitur eget risus non ipsum tincidunt egestas.",imageSrc: "https://via.placeholder.com/300" },
    { id: 6, title: "Sed Sit Amet Sapien", date: "April 25, 2024", excerpt: "Sed sit amet sapien vitae justo malesuada tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.", imageSrc: "https://via.placeholder.com/300" },
    { id: 7, title: "Vestibulum Ante Ipsum Primis", date: "April 26, 2024", excerpt: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Integer ut neque ipsum.", imageSrc: "https://via.placeholder.com/300" },
    { id: 8, title: "Integer Ut Neque Ipsum", date: "April 27, 2024", excerpt: "Integer ut neque ipsum. Fusce nec eros eget dolor viverra pellentesque. Cras euismod, turpis ut luctus mollis, odio nisi condimentum eros.", imageSrc: "https://via.placeholder.com/300" },
    { id: 9, title: "Fusce Nec Eros Eget Dolor", date: "April 28, 2024", excerpt: "Fusce nec eros eget dolor viverra pellentesque. Cras euismod, turpis ut luctus mollis, odio nisi condimentum eros, nec varius justo dui et ex.",imageSrc: "https://via.placeholder.com/300" },
  ];

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {blogs.map((blog) => (
        <GridItem key={blog.id}>
          {/* Wrap each blog post in a Link component */}
          <Link href={`/posts/${blog.id}`} passHref>
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

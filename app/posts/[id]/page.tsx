import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import Link from 'next/link';
import {blogs} from '../../data';

export default function PostPage({ params }: { params: { id: string } }) {
  console.log(blogs, "blog");
  
return (
  <Box p={4}>
    
    <Image src={blogs[params.id-1].imageSrc} alt={blogs[params.id-1].title} />
      
    <Box>
      <Heading mb={4}>{blogs[params.id-1].title}</Heading>
      <Text mb={4} fontSize="sm" color="gray.500">{blogs[params.id-1].date}</Text>
      <Text>{blogs[params.id-1].excerpt}.</Text>
      <Link href="/" passHref>
        <Button mt={4}>Back to Homepage</Button>
      </Link>
    </Box>
  </Box>
);
}
import { StarIcon } from '@chakra-ui/icons';
import { Card, Box, CardBody, CardFooter, Stack, Divider, Button, ButtonGroup, Image, Text, Heading } from '@chakra-ui/react'
import { useSelector } from 'react-redux';

function Product({id,img,name,price,rating,handleAddToCart}) {
    
  return (
    <Card key={id} maxW="sm">
      <CardBody>
        <Image
        height={"200px"}
          src={img}
          alt="img"
          borderRadius="lg"
        />
        <Heading color={"goldenrod"}>{rating}<StarIcon w={"25px"}/></Heading>
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>
            {/* {description} */}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button onClick={()=>handleAddToCart(id)} variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Product
import React from 'react';
import './Card.css';
import { Card, CardHeader, CardBody, SimpleGrid, Heading, Image } from '@chakra-ui/react';

const CardComponents = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
      padding={{ base: 4, md: 10, lg: 20 }}
      fontFamily={'Montserrat, sans-serif'}
    >
      <Card bg={'#3ab34a'} color={'white'}>
        <CardHeader>
          <Heading size='md'>Schedule a pickup</Heading>
        </CardHeader>
        <CardBody margin={'auto'} display={'flex'} justifyContent={'center'}>
          <Image src="https://ikp.edgekit.net/y8s2vhk66ef/undraw_Online_calendar_re_wk3t_1_SHrgqjm1w6l.png?updatedAt=1628624813421" />
        </CardBody>
      </Card>

      <Card bg={'#3ab34a'} color={'white'}>
        <CardHeader>
          <Heading size='md'>Pickup at your address</Heading>
        </CardHeader>
        <CardBody margin={'auto'} display={'flex'} justifyContent={'center'}>
          <Image src="https://ikp.edgekit.net/y8s2vhk66ef/undraw_Online_calendar_re_wk3t_1_SHrgqjm1w6l.png?updatedAt=1628624813421" />
        </CardBody>
      </Card>

      <Card bg={'#3ab34a'} color={'white'}>
        <CardHeader>
          <Heading size='md'>Receive payment</Heading>
        </CardHeader>
        <CardBody margin={'auto'} display={'flex'} justifyContent={'center'}>
          <Image src="https://ikp.edgekit.net/y8s2vhk66ef/undraw_Street_food_re_uwex_1_tHCc3auJgJY.png?updatedAt=1628624814853" />
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default CardComponents;

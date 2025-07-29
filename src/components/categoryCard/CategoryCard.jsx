import React, { useEffect } from 'react';
import { ActionIcon, Card, Image, Text, Badge, Button, Group, Stack } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';
import useAddCart from '../../hooks/useAddCart';

export default function CategoryCard({ product, cart, addCart, deleteCart }) {
    const [isAddedCart, setIsAddedCart] = React.useState(false);
    
    useEffect(() => {
        if (cart.some(item => item.name === product.name && item.price === product.price)) {
            setIsAddedCart(true);
        } else {
            setIsAddedCart(false);
        }
    }, [cart, product, addCart, deleteCart]);

    return (
        <Card
            padding="md"
            radius="md"
            withBorder
            w={200}
            h={300}     
            sx={{
                transition: "transform 0.2s ease-in-out",
                '&:hover': {
                    transform: 'translateY(-10px) scale(1.05)',
                },
            }}
        >
            <Card.Section>
                <Image
                    src={product.imageUrl || ''}
                    height={160}
                    alt={product.name}
                />
            </Card.Section>

            <Stack justify='space-between' mt={'lg'} h={'100%'}>
                <Text
                    size='sm'
                    lineClamp={2}
                >
                    {product.name}
                </Text>

                <Group justify='space-between'>
                    <Text>{product.price} р.</Text>
                    <ActionIcon
                        variant={isAddedCart ? 'filled' : 'outline'}
                        aria-label="Settings"
                        onClick={() => isAddedCart ? deleteCart(product) : addCart(product)}
                    >
                        <IconShoppingCart style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Stack>
        </Card>
    );
}
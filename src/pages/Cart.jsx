import { Flex, Container, Stack, Text, Box, Button, Table, Title, Group, ActionIcon, Image } from "@mantine/core";
import { useCounter } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDeleteCart from "../hooks/useDeleteCart";

export default function Cart() {
    const [productCart, setProductCart] = useState(() => JSON.parse(localStorage.getItem('productCart')) || []);
    const navigate = useNavigate();
    const { deleteCart } = useDeleteCart({ cart: productCart, setCart: setProductCart });

    const updateProductCount = (idx, newCount) => {
        const updatedCart = productCart.map((product, i) => {
            if (i === idx) {
                return { ...product, count: newCount };
            }
            return product;
        });
        setProductCart(updatedCart);
        localStorage.setItem('productCart', JSON.stringify(updatedCart));
    };

    const totalPrice = productCart.reduce((sum, item) => sum + Number(item.count || 1) * Number(item.price), 0);
    console.log(productCart);
    
    if (productCart.length == 0) {
        return (
            <Stack justify="center" align="center">
                <Title>Корзина пустая 😕</Title>
                <Text size="md" c={'gray.6'}>
                    Вероятней всего, вы еще не выбрали товар.
                </Text>
                <Text size="md" c={'gray.6'}>
                    Для того, чтобы заказать товар, перейдите в магазин.
                </Text>
                <Button onClick={() => navigate('/shop')}>Вернуться в магазин</Button>
            </Stack>
        )
    }

    const rows = productCart.map((product, idx) => {
        const count = product.count ?? 1;

        return (
            <Table.Tr
                key={idx}
            >
                <Table.Td>
                    <ActionIcon
                        variant="outline"
                        radius={'xl'}
                        color="gray.7"
                        onClick={() => deleteCart(product)}
                    >
                        <IconX />
                    </ActionIcon>
                </Table.Td>
                <Table.Td style={{ flexDirection: 'row' }}>
                    <Group gap="md">
                        <Image
                            radius="md"
                            h={50}
                            w="auto"
                            fit="contain"
                            src={product.imageUrl}
                        />
                        <span>
                            {product.categoryName} {product.name}
                        </span>
                    </Group>
                </Table.Td>
                <Table.Td fw={700}>{product.price} р.</Table.Td>
                <Table.Td>
                    <Group gap={'sm'}>
                        <Button
                            variant="outline"
                            color={'gray.7'}
                            onClick={() => updateProductCount(idx, Math.max(1, count - 1))}
                        >
                            -
                        </Button>
                        {count}
                        <Button
                            variant="outline"
                            color={'gray.7'}
                            onClick={() => updateProductCount(idx, Math.min(15, count + 1))}
                        >
                            +
                        </Button>
                    </Group>
                </Table.Td>
                <Table.Td fw={700}>{count * product.price} р.</Table.Td>
            </Table.Tr>
        )
    });

    return (
        <Stack gap="md" justify="center" align="center" mb={'xl'}>
            <Title size={'xl'} mb={'xl'} c={'dark.4'}>Корзина</Title>
            <Table
                w={'100%'}
                striped
                stripedColor={'gray.4'}
                withTableBorder
                withRowBorders={false}
                verticalSpacing="xl"
            >
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th></Table.Th>
                        <Table.Th>ТОВАР</Table.Th>
                        <Table.Th>ЦЕНА</Table.Th>
                        <Table.Th>КОЛИЧЕСТВО</Table.Th>
                        <Table.Th>ПОДЫТОГ</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>

            <Table style={{ width: 350, marginLeft: 'auto' }}>
                <Table.Thead>
                    <Table.Tr>
                        <Text size="xl">Сумма заказа</Text>
                    </Table.Tr>
                </Table.Thead>

                <Table.Tbody>
                    <Table.Tr>
                        <Table.Td>
                            Подытог
                        </Table.Td>
                        <Table.Td>
                            {totalPrice}
                        </Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                        <Table.Td>
                            Итого
                        </Table.Td>
                        <Table.Td>
                            {totalPrice}
                        </Table.Td>
                    </Table.Tr>
                </Table.Tbody>

                <Table.Tfoot justify="center" align="center">
                    <Table.Tr>
                        <Table.Td colSpan={2}>
                            <Button w="100%">Заказать</Button>
                        </Table.Td>
                    </Table.Tr>
                    <Text fs="italic">* Оплата при получении</Text>
                </Table.Tfoot>
            </Table>
        </Stack>
    );
}
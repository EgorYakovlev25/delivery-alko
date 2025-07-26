import React, { useMemo, useState } from "react";
import { Flex, Container, Stack, Text, Box, Button, RangeSlider, MultiSelect, Group, Title } from "@mantine/core";
import Header from "../components/header/Header.jsx";
import CategoryCard from "../components/categoryCard/CategoryCard.jsx";
import Reviews from "../components/reviews/Reviews.jsx";
import Search from "../components/search/Search.jsx";
import Category from "../components/categoryCard/Category.jsx";
import useGetProducts from "../hooks/useGetProducts.js";
import useAddCart from "../hooks/useAddCart.js";
import useDeleteCart from "../hooks/useDeleteCart.js";

export default function Shop() {
    const [products, setProducts] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [categoryFilter, setCategoryFilter] = React.useState([]);
    const [rangePrice, setRangePrice] = React.useState([0, 3000]);
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('productCart')) || [];
    });
    
    const { getProducts } = useGetProducts();
    const { addCart } = useAddCart({cart, setCart});
    const { deleteCart } = useDeleteCart({cart, setCart})

    // Фильтрация данных с мемоизацией
    const filteredData = useMemo(() => {
        if (!products.length) return [];

        const searchTerm = typeof search === 'string' ? search.trim().toLowerCase() : '';

        return products
            .filter(category =>
                categoryFilter.length === 0 ||
                categoryFilter.includes(category.categoryName)
            )
            .map(category => ({
                ...category,
                products: category.products.filter(product => {
                    const productName = product?.name || '';
                    const nameMatches = typeof productName === 'string'
                        ? productName.toLowerCase().includes(searchTerm)
                        : false;

                    const priceMatches =
                        product.price >= rangePrice[0] &&
                        product.price <= rangePrice[1];

                    return nameMatches && priceMatches;
                })
            }))
            .filter(category => category.products.length > 0);
    }, [products, search, categoryFilter, rangePrice]);

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            setProducts(data);
        }
        fetchData();
    }, [])

    return (
        <Stack gap="md" justify="center" align="center">
            <Title size={'xl'} mb={'xl'} c={'dark.4'}>Ассортимент</Title>
            <Flex
                w="100%"
                justify="center"
                align="center"
                gap="xl"
                direction={{ base: "column", sm: "row" }}
                mb={'xl'}
            >
                <Box w={'100%'}>
                    <Text>Поиск товара</Text>
                    <Search search={search} setSearch={setSearch} />
                </Box>

                <Box w={'100%'}>
                    <Text>Выберите категорию</Text>
                    <MultiSelect
                        placeholder="Напитки"
                        searchable
                        nothingFoundMessage="Нет такого напитка"
                        value={categoryFilter}
                        onChange={setCategoryFilter}
                        data={products.map(item => item.categoryName)}
                    />
                </Box>

                <Box w={'100%'}>
                    <Text>Цена</Text>
                    <RangeSlider
                        color="blue"
                        min={0}
                        max={3000}
                        domain={[0, 3000]}
                        defaultValue={[0, 3000]}
                        value={rangePrice}
                        onChange={setRangePrice}
                        labelTransitionProps={{
                            transition: 'skew-down',
                            duration: 150,
                            timingFunction: 'linear',
                        }}
                        marks={[
                            { value: 0, label: '0 р.' },
                            { value: 750, label: '750 р.' },
                            { value: 1500, label: '1500 р.' },
                            { value: 2250, label: '2250 р.' },
                            { value: 3000, label: '3000 р.' },
                        ]}
                    />
                </Box>
            </Flex>

            <Stack justify="center">
                {
                    filteredData.length === 0 ?
                        <Text size="xl" c={'dimmed'}>
                            Мы ничего не нашли
                        </Text> :
                        filteredData.map((item, index) => (
                            <Category
                                key={index}
                                item={item}
                                cart={cart}
                                addCart={addCart}
                                deleteCart={deleteCart}
                            />
                        ))
                }
            </Stack>
        </Stack>
    );
}
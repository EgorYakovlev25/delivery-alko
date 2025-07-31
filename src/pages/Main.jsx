import { Flex, Container, Stack, Text, Box, Button, Title } from "@mantine/core";
import Header from "../components/header/Header.jsx";
import CategoryCard from "../components/categoryCard/CategoryCard.jsx";
import Reviews from "../components/reviews/Reviews.jsx";
import { useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();
    return (
        <Stack gap="md" justify="center" align="center">
            <Stack bg={'gray.1'} p={'xl'} mb={'xl'} bdrs={'md'} gap={'xl'} justify="center" align="center">
                <Box size={'xs'} align="center">
                    <Title>alkoboss24</Title>
                    <Text
                        size="xl"
                        fw={500}
                        mb={'md'}
                    >
                        Доставка алкоголя в Уфе на дом круглосуточно
                    </Text>
                    <Text size="sm" fw={500} c="gray.7">
                        Закажите алкоголь с доставкой на дом в Уфе — от 15 минут, даже ночью.
                        В наличии водка, пиво, вино, шампанское, виски, ликёры и другие напитки. Так же имеется возможность заказать закуску.
                        Работаем круглосуточно. Стоимость доставки по Уфе — от 300 рублей.
                    </Text>
                </Box>

                <Stack w={{ base: '100%', sm: '30%' }} gap={{ base: 'sm', sm: 'xl' }}>
                    <Button
                        onClick={() => window.open("tel:+79931336833", "_blank")}
                        fullWidth
                        size="md"
                    >
                        Заказать
                    </Button>
                    <Button
                        onClick={() => window.open("https://t.me/+79931336833", "_blank")}
                        fullWidth
                        size="md"
                    >
                        Заказать через ТГ
                    </Button>
                </Stack>
            </Stack>

            <Stack
                w={'100%'}
                justify="center"
                align="center"
                mb={'xl'}
            >
                <Text size="xl" fw={500}>Отзывы наших клиентов</Text>
                <Reviews />
            </Stack>

            <Stack
                justify="center"
                align="center"
                mb={'xl'}
                w={"100%"}
            >
                <Text size="xl" fw={500}>Доставка по всей Уфе</Text>
                <iframe style={{ borderRadius: "10px", width: "100%" }} src="https://yandex.ru/map-widget/v1/?um=constructor%3A57eb158b2214abc6c88da066335973659db7997fb7a786bb1acb21aef9d41022&amp;source=constructor" width="1000" height="200" frameborder="0"></iframe>
            </Stack>

            <Box size={'xs'} mb={'xl'}>
                <Text
                    size="xl"
                    fw={500}
                    mb={'md'}
                >
                    Как заказать?
                </Text>
                <Stack gap={'md'}>
                    <Text size="lg" fw={500} c="gray.7">
                        • Позвоните или напишите в телеграм: <Text c="blue" style={{ cursor: 'pointer' }} onClick={() => window.open("https://t.me/+79931336833", "_blank")}>+7 (993) 133-68-33</Text>
                    </Text>
                    <Text size="lg" fw={500} c="gray.7">
                        • Закажите через сайт
                    </Text>
                </Stack>

                <Text size="lg" fw={500} c="gray.7" mt={'md'}>
                    Укажите, какие напитки вам нужны, объём и адрес. Если хотите добавить продукты — просто продиктуйте список и курьер всё привезёт.
                </Text>
            </Box>
        </Stack>
    );
}
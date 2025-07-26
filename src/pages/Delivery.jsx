import { Flex, Container, Stack, Text, Box, Button } from "@mantine/core";
import Header from "../components/header/Header.jsx";
import CategoryCard from "../components/categoryCard/CategoryCard.jsx";
import Reviews from "../components/reviews/Reviews.jsx";

export default function Delivery() {
    return (
        <Stack gap="md" justify="center" align="center">
            <Stack p={'xl'} mb={'xl'} bdrs={'md'} gap={'xl'}>
                <Box size={'xs'}>
                    <Text
                        size="xl"
                        fw={500}
                        mb={'md'}
                    >
                        Доставка
                    </Text>
                    <Text size="sm" fw={500} c="gray.7">
                        Доставка начинается от 15 минут и стоимостью от 300 рублей. Всё зависит от вашего местоположения. Вы можете легко попросить у нашего оператора или менеджера заехать в магазин. Тогда наш курьер купит всё, что вам необходимо. Доставка осуществляется двумя способами:
                    </Text>
                </Box>

                <Box size={'xs'}>
                    <Text
                        size="xl"
                        fw={500}
                        mb={'md'}
                    >
                        Оплата
                    </Text>
                    <Text size="sm" fw={500} c="gray.7" mb={'xl'}>
                        Оплата осуществляется наличными или переводом при получении товара.
                        ВАЖНО! При доставкой с помощью сервиса ЯндексGO оплата осуществляется только переводом на карту!
                    </Text>

                    <Text size="sm" fw={500} c="gray.7">
                        Если вы находитесь в области, то наш оператор обязательно попросит вас перевести оплату за доставку заранее! Так как бывают случаи, когда клиенты перестают брать трубку или выключают телефон. Просим отнестись к этому с пониманием!
                    </Text>
                </Box>
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
        </Stack>
    );
}
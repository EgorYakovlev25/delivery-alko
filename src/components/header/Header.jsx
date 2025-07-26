import { Button, Group, Stack, Text, Flex, ActionIcon } from "@mantine/core";
import { IconBasket, IconBrandTelegram, IconGlassFull, IconTruckDelivery } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const links = [
        { label: "ГЛАВНАЯ", href: "/" },
        { label: "МАГАЗИН", href: "/shop" },
        { label: "ДОСТАВКА И ОПЛАТА", href: "/delivery" },
        { label: <IconBasket />, href: "/cart" },
    ];

    return (
        <Flex
            w="100%"
            justify="space-between"
            mt={'xl'}
            mb={'xl'}
        >
            <Group gap={0} onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
                <IconTruckDelivery />
                <IconGlassFull />
            </Group>

            <Group justify="center" gap="md">
                {links.map((link) => (
                    <Button
                        key={link.href}
                        variant="subtle"
                        color={link.href === pathname && "gray"}
                        onClick={() => navigate(link.href)}
                    >
                        {link.label}
                    </Button>
                ))}
            </Group>

            <Group>
                <Stack gap="0">
                    <Text>КРУГЛОСУТОЧНО</Text>
                    <Text fw={500}>+7 (999) 999-99-99</Text>
                </Stack>
                <ActionIcon
                    size={'xl'}
                    radius={'xl'}
                >
                    <IconBrandTelegram />
                </ActionIcon>
            </Group>
        </Flex>
    );
}
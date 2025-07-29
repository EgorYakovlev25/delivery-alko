import { Button, Group, Stack, Text, Flex, ActionIcon } from "@mantine/core";
import { IconBasket, IconBrandTelegram, IconGlassFull, IconTruckDelivery } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const links = [
        { label: "ГЛАВНАЯ", href: "/" },
        { label: "АССОРТИМЕНТ", href: "/shop" },
        { label: "ДОСТАВКА И ОПЛАТА", href: "/delivery" },
        { label: <Group gap={'xs'}>КОРЗИНА <IconBasket size={24} /></Group>, href: "/cart" },
    ];

    return (
        <Flex
            w="100%"
            justify="space-between"
            mt={'xl'}
            mb={'xl'}
            align="center"
            direction={{ base: 'column', sm: 'row' }}
            gap={{ base: 'md', sm: 0 }}
            sx={{
                '@media (max-width: 600px)': {
                    padding: '8px 0',
                },
            }}
        >
            <Group gap={0} onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
                <IconTruckDelivery size={28} style={{ marginRight: 4 }} />
                <IconGlassFull size={28} />
            </Group>

            <Group justify="center" gap="md"
                sx={{
                    '@media (max-width: 600px)': {
                        flexDirection: 'column',
                        gap: 4,
                    },
                }}
            >
                {links.map((link) => (
                    <Button
                        key={link.href}
                        variant="subtle"
                        color={link.href === pathname && "gray"}
                        onClick={() => navigate(link.href)}
                        size="sm"
                        sx={{
                            fontSize: 14,
                            '@media (max-width: 600px)': {
                                width: '100%',
                                fontSize: 13,
                                padding: '6px 0',
                            },
                        }}
                    >
                        {link.label}
                    </Button>
                ))}
            </Group>

            <Group
                sx={{
                    '@media (max-width: 600px)': {
                        flexDirection: 'row',
                        gap: 8,
                    },
                }}
            >
                <Stack gap="0" sx={{
                    '@media (max-width: 600px)': {
                        fontSize: 12,
                        alignItems: 'flex-end',
                    },
                }}>
                    <Text size="xs">КРУГЛОСУТОЧНО</Text>
                    <Text fw={500} size="sm">+7 (993) 133-68-33</Text>
                </Stack>
                <ActionIcon
                    size={'lg'}
                    radius={'xl'}
                    onClick={() => window.open("https://t.me/+79931336833", "_blank")}
                >
                    <IconBrandTelegram size={22} />
                </ActionIcon>
            </Group>
        </Flex>
    );
}
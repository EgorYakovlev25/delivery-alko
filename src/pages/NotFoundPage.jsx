import { Container, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage(){
    const navigate = useNavigate();

    return (
        <Container justify="center" align="center" h="100vh">
            <Text>404</Text>
            <Text>Страница не найдена</Text>
            <Button onClick={() => navigate("/")}>На главную</Button>
        </Container>
    );
}
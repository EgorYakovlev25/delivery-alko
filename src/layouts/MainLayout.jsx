import Header from "../components/header/Header.jsx";
import { Outlet } from "react-router-dom";
import { Container } from "@mantine/core";

export default function MainLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
import { MantineProvider, Container, AppShell } from '@mantine/core';
import { theme } from './theme/colors';
import Main from './pages/Main';
import Router from './routes/routes';
import MainLayout from './layouts/MainLayout';
import Header from './components/header/Header';

export default function App() {
  return (
    <MantineProvider
      theme={theme}
    >
      <Container>
        <Router />
      </Container>
    </MantineProvider>
  );
}
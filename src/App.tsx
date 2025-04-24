import "./App.css";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Flex, Text, Image } from "@mantine/core";
import medicalLogo from "./assets/medical-svgrepo-com.svg";
import { Navigation } from "./components/Navigation.tsx";
import { Outlet } from "react-router";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Flex align="center" h="100%" ml="md" gap="md">
            <Image src={medicalLogo} h={40} w={40} />
            <Text size="lg" fw={700} span>
              Информационная система оценки риска болезни сахарным диабетом
            </Text>
          </Flex>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <Navigation />
        </AppShell.Navbar>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </>
  );
}

export default App;

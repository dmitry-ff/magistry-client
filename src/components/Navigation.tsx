import { Flex, Text } from "@mantine/core";
import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <Flex direction="column" align="flex-start">
      <NavLink to="/poll">
        <Text size="lg">Анкета</Text>
      </NavLink>
      <NavLink to="/history">
        <Text size="lg">Оценка динамики</Text>
      </NavLink>
    </Flex>
  );
};

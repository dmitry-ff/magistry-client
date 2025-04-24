import { FC, useState } from "react";
import { Autocomplete, Button, Flex, NumberInput, Radio } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { FormType } from "../Poll.tsx";

type Props = {
  getInputProps: UseFormReturnType<FormType>["getInputProps"];
  insertListItem: UseFormReturnType<FormType>["insertListItem"];
};

export const DiabetesPedigreeFunction: FC<Props> = ({ getInputProps }) => {
  const [hasBMI, setHasBMI] = useState("2");

  const handleChangeKapimetrExistance = (value: string) => {
    setHasBMI(value);
  };

  return (
    <Flex direction="column" gap="md">
      <Radio.Group onChange={handleChangeKapimetrExistance} value={hasBMI}>
        <Flex gap="md" direction="column">
          <Radio
            label="Я знаю коэффициент наследственной принадлежности к группе риска"
            value={"1"}
          />
          <Radio
            label="Я не знаю коэффициент наследственной принадлежности к группе риска"
            value={"2"}
          />
        </Flex>
      </Radio.Group>
      {hasBMI === "1" ? (
        <NumberInput placeholder="Укажите индекс массы тела" suffix=" мм" />
      ) : (
        <Flex gap="md" w="100%" direction="column">
          <Autocomplete
            label="степень родства"
            placeholder="Укажите степерь одства"
            data={["0.5", "0.4", "0.25"]}
          />
          <Button w="fit-content">Добавить родственника</Button>
        </Flex>
      )}
    </Flex>
  );
};

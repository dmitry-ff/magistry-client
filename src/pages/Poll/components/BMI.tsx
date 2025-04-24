import { UseFormReturnType } from "@mantine/form";
import { FC, useState } from "react";
import { Flex, NumberInput, Radio } from "@mantine/core";
import { FormType } from "../Poll.tsx";

type Props = {
  getInputProps: UseFormReturnType<FormType>["getInputProps"];
};

export const BMI: FC<Props> = ({ getInputProps }) => {
  const [hasBMI, setHasBMI] = useState("2");

  const handleChangeKapimetrExistance = (value: string) => {
    setHasBMI(value);
  };

  return (
    <Flex direction="column" gap="md">
      <Radio.Group onChange={handleChangeKapimetrExistance} value={hasBMI}>
        <Flex gap="md">
          <Radio label="Я знаю индекс массы тела" value={"1"} />
          <Radio label="Я не знаю индекс массы тела" value={"2"} />
        </Flex>
      </Radio.Group>
      {hasBMI === "1" ? (
        <NumberInput placeholder="Укажите индекс массы тела" suffix=" мм" />
      ) : (
        <Flex gap="md" w="100%" direction="column" pl="md">
          <NumberInput
            w="100%"
            hideControls
            placeholder="Измерьте свой рост в см"
            suffix=" см"
            {...getInputProps("height")}
          />
          <NumberInput
            w="100%"
            hideControls
            placeholder="Измерьте талию в см"
            suffix=" см"
            {...getInputProps("waist")}
          />
          <NumberInput
            w="100%"
            hideControls
            placeholder="Измерьте окружность шеи в см"
            suffix=" см"
            {...getInputProps("neck")}
          />
          <NumberInput
            w="100%"
            hideControls
            placeholder="Измерьте окружность бёдер в см"
            suffix=" см"
            {...getInputProps("hips")}
          />
        </Flex>
      )}
    </Flex>
  );
};

import { FC, useState } from "react";
import { Flex, NumberInput, Radio } from "@mantine/core";

type SkinThicknessProps = {
  hasKapimetr: boolean;
};

export const SkinThickness: FC<SkinThicknessProps> = ({ hasKapimetr }) => {
  const [hasKapimeter, setHasKapimetr] = useState(hasKapimetr ? "1" : "2");

  const handleChangeKapimetrExistance = (value: string) => {
    setHasKapimetr(value);
  };

  return (
    <Flex direction="column" gap="md">
      <Radio.Group
        onChange={handleChangeKapimetrExistance}
        value={hasKapimeter}
      >
        <Flex gap="md">
          <Radio label="Измерить с помощью капиметра" value={"1"} />
          <Radio label="Измерить с помощью параметров тела" value={"2"} />
        </Flex>
      </Radio.Group>
      {hasKapimeter === "1" ? (
        <NumberInput
          placeholder="Укажите толщину кожной складки"
          suffix=" мм"
        />
      ) : (
        <Flex gap="md" w="100%">
          <NumberInput
            w="100%"
            hideControls
            placeholder="Укажите обхват талии в см"
            suffix=" см"
          />
          <NumberInput
            w="100%"
            hideControls
            placeholder="Укажите обхват шеи в см"
            suffix=" см"
          />
          <NumberInput
            w="100%"
            hideControls
            placeholder="Укажите обхват бёдер в см"
            suffix=" см"
          />
        </Flex>
      )}
    </Flex>
  );
};

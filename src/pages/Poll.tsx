import { Autocomplete, Button, Flex, NumberInput, Radio } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FC, useState } from "react";
import { QuestionSegment } from "../components/QuestionSegment.tsx";

type FormType = {};

type SkinThicknessProps = {
  hasKapimetr: boolean;
};

const SkinThickness: FC<SkinThicknessProps> = ({ hasKapimetr }) => {
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

const BMI = () => {
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
          />
          <NumberInput
            w="100%"
            hideControls
            placeholder="Измерьте талию в см"
            suffix=" см"
          />
          <NumberInput
            w="100%"
            hideControls
            placeholder="Измерьте окружность шеи в см"
            suffix=" см"
          />
          <NumberInput
            w="100%"
            hideControls
            placeholder="Измерьте окружность бёдер в см"
            suffix=" см"
          />
        </Flex>
      )}
    </Flex>
  );
};

const DiabetesPedigreeFunction = () => {
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

export const Poll = () => {
  const {} = useForm({
    mode: "uncontrolled",
  });
  return (
    <Flex direction="column" w="100%" maw={800} justify="flex-start" gap="md">
      <QuestionSegment title="Количество беременностей">
        <NumberInput placeholder="Укажите число беременностей" />
      </QuestionSegment>
      <QuestionSegment title="Артериальное давление">
        <NumberInput
          placeholder="Укажите артериальное давление"
          hideControls
          suffix=" мм рт. ст."
        />
      </QuestionSegment>
      <QuestionSegment title="Толщина кожной складки">
        <SkinThickness hasKapimetr={false} />
      </QuestionSegment>
      <QuestionSegment title="Индекс массы тела">
        <BMI />
      </QuestionSegment>
      <QuestionSegment title="Наследственная принадлежность к группе риска">
        <DiabetesPedigreeFunction />
      </QuestionSegment>
      <QuestionSegment title="Возраст">
        <NumberInput
          placeholder="Укажите ваш возраст"
          defaultValue={20}
          allowNegative={false}
          allowLeadingZeros={false}
          min={20}
        />
      </QuestionSegment>
      <Button w="fit-content">Оценить риск диабета</Button>
    </Flex>
  );
};

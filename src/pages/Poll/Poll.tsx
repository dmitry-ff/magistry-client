import { Button, Flex, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { QuestionSegment } from "../../components/QuestionSegment.tsx";
import { BMI, DiabetesPedigreeFunction, SkinThickness } from "./components";
import { useMutation } from "@tanstack/react-query";

export type FormType = {
  pregnancies: number;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  BMI: number;
  diabetesPedigreeFunction: number[];
  age: number;
  height: number;
  waist: number;
  neck: number;
  hips: number;
};

export const Poll = () => {
  const { getInputProps, insertListItem } = useForm<FormType>({
    mode: "uncontrolled",
  });

  const { mutate } = useMutation({
    mutationFn: () => {
      fetch(
        {
          method: "POST",
          body: {},
          url: '"http://localhost:8080/*какой то роут*"',
        },
        {},
      );
    },
    mutationKey: ["TestMutation"],
  });

  return (
    <Flex direction="column" w="100%" maw={800} justify="flex-start" gap="md">
      <QuestionSegment title="Количество беременностей">
        <NumberInput
          placeholder="Укажите число беременностей"
          {...getInputProps("pregnancies")}
        />
      </QuestionSegment>
      <QuestionSegment title="Артериальное давление">
        <NumberInput
          {...getInputProps("bloodPressure")}
          placeholder="Укажите артериальное давление"
          hideControls
          suffix=" мм рт. ст."
        />
      </QuestionSegment>
      <QuestionSegment
        title="Толщина кожной складки"
        {...getInputProps("skinThickness")}
      >
        <SkinThickness hasKapimetr={false} />
      </QuestionSegment>
      <QuestionSegment title="Индекс массы тела">
        <BMI getInputProps={getInputProps} />
      </QuestionSegment>
      <QuestionSegment title="Наследственная принадлежность к группе риска">
        <DiabetesPedigreeFunction
          getInputProps={getInputProps}
          insertListItem={insertListItem}
        />
      </QuestionSegment>
      <QuestionSegment title="Возраст">
        <NumberInput
          placeholder="Укажите ваш возраст"
          defaultValue={20}
          allowNegative={false}
          allowLeadingZeros={false}
          min={20}
          {...getInputProps("age")}
        />
      </QuestionSegment>
      <Button w="fit-content">Оценить риск диабета</Button>
    </Flex>
  );
};

import { Flex, FlexProps, Text, TextProps } from "@mantine/core";
import { FC, PropsWithChildren, ReactNode } from "react";

type WrapperProps = Omit<FlexProps, "children">;
type TitleProps = Omit<TextProps, "children">;

interface Props extends PropsWithChildren {
  title: ReactNode;
  wrapperProps?: WrapperProps;
  titleProps?: TitleProps;
}

export const QuestionSegment: FC<Props> = ({
  children,
  title,
  wrapperProps,
  titleProps,
}) => {
  return (
    <Flex direction="column" gap="md" {...wrapperProps}>
      <Text component="h3" fw={700} size="xl" {...titleProps}>
        {title}
      </Text>
      {children}
    </Flex>
  );
};

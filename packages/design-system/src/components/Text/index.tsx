import * as React from "react";
import styled from "styled-components";
import type { Typograph } from "./index.type";

interface Props {
  className?: string;
  text: string;
  typography: Typograph;
}

const Text = ({ className, text, typography }: Props) => {
  return (
    <Container className={className} $typography={typography}>
      <span>{text}</span>
    </Container>
  );
};

export default Text;

const Container = styled.div<{ $typography: Typograph }>`
  span {
    ${({ theme, $typography }) => theme.typograph[$typography]}
  }
`;

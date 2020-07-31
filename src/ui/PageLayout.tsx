import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { color, ColorProps } from "styled-system";
import theme from "./theme";

interface PageLayoutProps {
  children: ReactNode;
}

const Box = styled.div<PageLayoutProps | ColorProps>`
  ${color}
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Box.defaultProps = {}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <Box bg={theme.colors.blue}>{children}</Box>;
};

export default PageLayout;

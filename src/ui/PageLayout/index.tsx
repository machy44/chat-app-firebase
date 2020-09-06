import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Checkbox } from "semantic-ui-react";
import { ColorProps } from "styled-system";
import Navigation from "ui/Menu";
// import theme from "./theme";

interface PageLayoutProps {
  children: ReactNode;
}

const Box = styled.div<PageLayoutProps | ColorProps>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <main>
      <Navigation />
      <Checkbox toggle />
      <Box>{children}</Box>
    </main>
  );
};

export default PageLayout;

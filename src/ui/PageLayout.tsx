import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Checkbox } from "semantic-ui-react";
import { color, ColorProps } from "styled-system";
// import theme from "./theme";

interface PageLayoutProps {
  children: ReactNode;
}

const Box = styled.div<PageLayoutProps | ColorProps>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Box.defaultProps = {}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div>
      <Checkbox toggle />
      <Box>{children}</Box>
    </div>
  );
};

export default PageLayout;

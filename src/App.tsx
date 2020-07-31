import React from "react";
import { ThemeProvider } from "emotion-theming";
import { Login } from "./auth";
import { PageLayout, theme } from "./ui";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Login />
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;

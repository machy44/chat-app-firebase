import React from "react";
import { ThemeProvider } from "emotion-theming";
import { Login } from "./auth";
import { PageLayout, lightTheme } from "./ui";

import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <PageLayout>
        <Login />
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;

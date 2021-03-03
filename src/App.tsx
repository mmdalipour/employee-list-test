import { ThemeProvider } from "@material-ui/core/styles";

import { QueryClient, QueryClientProvider } from "react-query";

// components
import Compose, { ComposeComponent } from "components/Compose";
import CssBaseline from "@material-ui/core/CssBaseline";

// templates
import DefualtTemplate from "templates/DefaultTemplate";

// pages
import HomePage from "pages/Home";

// providers
import { CompareProvider } from "providers/CompareProvider";

// themes
import theme from "themes/default";

const queryClient = new QueryClient();

// initial providers (only non dynamic providers)
const providers: ComposeComponent[] = [
  [ThemeProvider, { theme }],
  [QueryClientProvider, { client: queryClient }],
  CompareProvider,
];

function App() {
  return (
    <Compose components={providers}>
      <CssBaseline />
      <DefualtTemplate>
        <HomePage />
      </DefualtTemplate>
    </Compose>
  );
}

export default App;

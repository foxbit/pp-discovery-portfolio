import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Projeto from "./pages/Projeto";
import Metodologia from "./pages/Metodologia";
import Mercado from "./pages/Mercado";
import Usuarios from "./pages/Usuarios";
import Insights from "./pages/Insights";
import Funcionalidades from "./pages/Funcionalidades";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projeto" component={Projeto} />
      <Route path="/metodologia" component={Metodologia} />
      <Route path="/mercado" component={Mercado} />
      <Route path="/usuarios" component={Usuarios} />
      <Route path="/insights" component={Insights} />
      <Route path="/funcionalidades" component={Funcionalidades} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

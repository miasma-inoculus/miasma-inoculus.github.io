/*
 * THE INKWELL – App Router
 * Design: Gaslight & Shadow – dark theme, 
 * side navigation, all routes
 */

import { Toaster } from "sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import StoryPage from "./pages/StoryPage";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <div className="flex min-h-screen bg-transparent font-serif selection:bg-primary/20">
      <Navigation />
      <main className="flex-1 lg:pl-64">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/archive" component={Archive} />
          <Route path="/about" component={About} />
          <Route path="/subscribe" component={Subscribe} />
          <Route path="/story/:id" component={StoryPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <TooltipProvider>
          <Router />
          <Toaster position="bottom-right" theme="dark" />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

/*
 * THE INKWELL — App Router
 * Design: Gaslight & Shadow — dark theme, side navigation, all routes
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import StoryPage from "./pages/StoryPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/archive" component={Archive} />
      <Route path="/about" component={About} />
      <Route path="/subscribe" component={Subscribe} />
      <Route path="/story/:id" component={StoryPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          {/* Layout wrapper: side nav on desktop, top bar on mobile */}
          <div className="flex min-h-screen" style={{ background: 'oklch(0.09 0.008 300)' }}>
            <Navigation />
            {/* Main content area — offset for desktop side nav */}
            <main className="flex-1 lg:ml-56 min-w-0">
              <Router />
            </main>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;


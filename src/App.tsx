import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Route, Switch } from "wouter";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import StoryPage from "./pages/StoryPage";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/archive" component={Archive} />
      <Route path="/about" component={About} />
      <Route path="/subscribe" component={Subscribe} />
      <Route path="/story/:id" component={StoryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <div className="flex min-h-screen bg-background">
            <Toaster />
            <Navigation />
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

import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import NotFound from "./pages/not-found";
import Navigation from "./components/ui/Navigation";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import StoryPage from "./pages/StoryPage";

function Router() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Navigation />
      <main className="flex-1 lg:pl-56">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/archive" component={Archive} />
          <Route path="/story/:id" component={StoryPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

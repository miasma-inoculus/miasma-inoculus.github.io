import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import StoryPage from "./pages/StoryPage";
import Navigation from "./components/ui/Navigation";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-black">
        <Navigation />
        <main className="flex-1 lg:ml-56">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/archive" component={Archive} />
            <Route path="/about" component={About} />
            <Route path="/subscribe" component={Subscribe} />
            <Route path="/story/:id" component={StoryPage} />
            <Route>
              <div className="min-h-screen flex items-center justify-center text-gold/40 font-cinzel tracking-widest uppercase text-xs">
                404 — The page has vanished into the mist
              </div>
            </Route>
          </Switch>
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;

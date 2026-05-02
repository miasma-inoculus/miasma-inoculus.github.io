import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import StoryPage from "./pages/StoryPage";
import Navigation from "./components/Navigation";
// Re-importing the theme engine
import { ThemeProvider } from "./context/ThemeContext"; 

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-background">
        <Navigation />
        <main className="flex-1 lg:ml-56">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/archive" component={Archive} />
            <Route path="/about" component={About} />
            <Route path="/subscribe" component={Subscribe} />
            <Route path="/story/:id" component={StoryPage} />
            <Route>
              <div className="min-h-screen flex items-center justify-center bg-black text-gold/50 font-serif italic">
                404 — This page has vanished into the mist.
              </div>
            </Route>
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

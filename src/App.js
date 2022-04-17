import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Navigation } from "./components/nav/Navigation";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

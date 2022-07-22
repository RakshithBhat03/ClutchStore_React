import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Navigation, Footer } from "./components/";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getCartItems, getCategories } from "./actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.auth);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAllProducts());
  }, []);
  useEffect(() => {
    if (status) dispatch(getCartItems());
  }, [status]);
  return (
    <div className="App">
      <Navigation />
      <AllRoutes />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

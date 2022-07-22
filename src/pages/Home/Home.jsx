import { useDocumentTitle } from "../../hooks";
import { Hero, Collection } from "./components";
const Home = () => {
  useDocumentTitle("Home | Clutch Store");
  return (
    <div className="home-wrapper">
      <Hero />
      <Collection />
    </div>
  );
};
export { Home };

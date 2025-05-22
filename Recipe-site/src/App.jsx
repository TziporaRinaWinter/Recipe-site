import "./App.css";
import { useRef } from "react";
import CategoryRecipesPage from "./components/RecipeListDisplay/CategoryRecipesPage.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const scrollRef = useRef();

  return (
    <div ref={scrollRef} style={{ overflowY: "auto", height: "100vh" }}>
      <Header scrollContainerRef={scrollRef} />
      <CategoryRecipesPage />
      <Footer />
    </div>
  );
}

export default App;

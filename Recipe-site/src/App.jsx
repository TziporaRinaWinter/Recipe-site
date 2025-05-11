import "./App.css";
import CategoryRecipesPage from "./components/RecipeListDisplay/CategoryRecipesPage.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <CategoryRecipesPage></CategoryRecipesPage>
      <Footer />
    </>
  );
}

export default App;

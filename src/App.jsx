import Search from "./components/search/Search.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Search />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

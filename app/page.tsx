import BlogComponent from "./components/BlogComponent";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";

const Home = () => {
  return (
    <div>
      <Navigation />
      <main>
        <h1>The Accessibility Blog!</h1>
        <h3>The voice of the excluded</h3>
        {/* Add your home page content here */}
        <BlogComponent />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
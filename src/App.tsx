import Header from "@/scenes/header";
import Home from "@/scenes/home";
import Features from "@/scenes/features";
import Team from "@/scenes/team";
import GetStarted from "@/scenes/getstarted";
import Footer from "@/scenes/footer";

const App = () => {
  return (
    <div className="app bg-dark-blue-main">
      <Header />
      <Home />
      <Features />
      <Team />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
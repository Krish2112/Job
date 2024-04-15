import { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import Working from "./Working";
import Categories from "./Categories";
import Companies from "./Companies";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="homePage page">
        <HeroSection />
        <Working />
        <Categories />
        <Companies />
      </section>
    </>
  );
};

export default Home;
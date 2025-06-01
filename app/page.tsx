"use client";
import PlanPage from "./components/plan";
import PayoutPage from "./components/payouts";
import HeroPage from "./components/hero";
import Footer from "./components/footer";


const HomePage: React.FC = () => {
  return (
    <>
      <HeroPage />
      <PlanPage />
      <PayoutPage />
      <Footer/>
    </>
  );
};

export default HomePage;

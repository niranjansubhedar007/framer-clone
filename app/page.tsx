"use client";
import PlanPage from "./components/plan";
import PayoutPage from "./components/payouts";
import HeroPage from "./components/hero";


const HomePage: React.FC = () => {
  return (
    <>
      <HeroPage />
      <PlanPage />
      <PayoutPage />
    </>
  );
};

export default HomePage;

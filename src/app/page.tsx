import Header from "@/components/header";
import { PortfolioBody } from "@/components/portfolio-body";

export default function Page() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <PortfolioBody />
    </div>
  );
}

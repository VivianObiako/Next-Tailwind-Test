import LatestProducts from "../components/Products";
import Category from "@/components/Category";
import Designsnitch from "@/components/Designsnitch";
import Promo from "@/components/Promo";
import Review from "@/components/Review";
import Maker from "@/components/Maker";
import Insights from "@/components/Insights";
import FeaturedMaker from "@/components/FeaturedMaker";
import { favourites, LatestProductsData } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-1 max-w-1600 mx-auto flex-col items-center gap-24">
      <LatestProducts products={LatestProductsData} title="Latest Products" />

      <Category />

      <FeaturedMaker />

      <LatestProducts products={favourites} title="OUR FAVOURITES" />

      <Promo />

      <Designsnitch />

      <Review />

      <Maker />

      <Insights />
    </div>
  );
}

import { useLoaderData } from "react-router-dom";
import Banner from "../Head/Banner";
import Review from "./Review";
import Service from "./Service";
import Brand from "./Brand";

export default function Home() {
  const brands=useLoaderData();
  // console.log(brands);
  return (
    <div>
      <Banner></Banner>
      <div className="mx-10 lg:mx-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
  {
    brands.map(brand => <Brand key={brand._id} brand={brand} />)
  }
</div>
      <Review></Review>
      <Service></Service>
      </div>
    </div>
  )
}

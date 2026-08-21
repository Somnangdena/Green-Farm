import Header from "./Header";
import ProductsList from "./ProductsList";

const Products = () => {
  return (
    <section className="bg-primary/20">
      <div className="container mx-auto py-15">
        <div className="mb-10 text-center">
          <Header subtitle={"What we grow"} title={"Our Fresh Products"}/>
          <p className="mx-auto px-5 mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Fresh products carefully grown and harvested fron our farm
          </p>
        </div>
        <ProductsList />
        <div className="flex justify-center items-center m-5">
          <button className="rounded-full border border-primary px-8 py-3 font-semibold text-primary cursor-pointer transition hover:bg-primary hover:text-white duration-300">
              View All Products →
            </button>
        </div>
      </div>
    </section>
  );
};

export default Products;

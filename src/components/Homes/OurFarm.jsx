import Header from "./Header";
import img1 from "../../assets/images/vegetables.jpg";
import img2 from "../../assets/images/field.jpg";
import img3 from "../../assets/images/carrot-field.jpg";
import img4 from "../../assets/images/country-barns.jpg";
import img5 from "../../assets/images/tomatoes.jpeg";

const OurFarm = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-15">
        <div className="mb-10 text-center">
          <Header subtitle="our farm" title="life on the farm" />
        </div>

        <div className="grid grid-cols- gap-4 md:grid-cols-2 lg:grid-cols-4 px-5">
          {/* Large Image */}
          <div className="w-full sm:col-span-2 sm:row-span-1 md:col-span-2 lg:row-span-2">
            <img
              className="h-64 w-full rounded-2xl object-cover sm:h-80 md:h-full"
              src={img1}
              alt="Vegetables growing on the farm"
            />
          </div>

          {/* Image 2 */}
          <div className="w-full">
            <img
              className="h-64 w-full rounded-2xl object-cover sm:h-56"
              src={img2}
              alt="Farm field"
            />
          </div>

          {/* Image 3 */}
          <div className="w-full">
            <img
              className="h-64 w-full rounded-2xl object-cover sm:h-56"
              src={img4}
              alt="Country barn"
            />
          </div>

          {/* Image 4 */}
          <div className="w-full">
            <img
              className="h-64 w-full rounded-2xl object-cover sm:h-56"
              src={img3}
              alt="Carrot field"
            />
          </div>

          {/* Image 5 */}
          <div className="w-full">
            <img
              className="h-64 w-full rounded-2xl object-cover sm:h-56"
              src={img5}
              alt="Fresh vegetables"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFarm;

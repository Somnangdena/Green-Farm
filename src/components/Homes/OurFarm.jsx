import Header from "./Header";
import img1 from "../../assets/images/vegetables.jpg";
import img2 from "../../assets/images/field.jpg";
import img3 from "../../assets/images/carrot-field.jpg";
import img4 from "../../assets/images/country-barns.jpg";

const OurFarm = () => {
  return (
    <section className="container mx-auto">
      <div className="py-15">
        <div className="mb-10 text-center">
          <Header subtitle={"our farm"} title={"life on the farm"} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* image1 */}
          <div className="col-span-1 sm:col-span-2 w-full">
            <img className="w-full rounded-2xl" src={img1} alt="" />
          </div>
          {/* image 2 */}
          <div>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
          </div>
          {/* image 3 */}
          <div>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFarm;

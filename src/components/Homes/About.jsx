import image from "../../assets/images/farm.jpg";

const AboutMain = () => {
  return (
    <section className="container mx-auto">
      <article className="flex flex-col md:flex-row justify-center items-center gap-10 px-7 my-15">
        <div className="relative w-full md:w-1/2 transition">
          {/* images */}
          <img
            src={image}
            alt="Green Farm"
            className="h-64 w-full rounded-2xl object-cover sm:h-80 md:h-112.5"
          />
          {/* box */}
          <div className="absolute -bottom-5 -right-2 rounded-xl bg-primary brightness-125 px-5 py-4 shadow-3xl">
            <h3 className="text-xl font-semibold text-white">15+</h3>
            <p className="block text-white"> Years Experience</p>
          </div>
        </div>
        {/* content */}
          <div className="space-y-5 dark:text-gray-100">
            <p className="uppercase text-primary font-bold">About our farm</p>
            <h2 className="text-3xl font-bold">
              Farming With Passion
              <span className="block text-primary">For Good Life</span>
            </h2>
            <div className="max-w-xl space-y-4">
              <p className="text-sm">
                Green Farm is a family-owned farm dedicated to growing fresh,
                healthy, and high qualty agricultural products. We believe that
                good food starts with healthy soil and responsible farming.
              </p>
              <p className="text-sm">
                Our farmers work every day to bring naturally grown products
                directly from our farm to your family.
              </p>
            </div>
            <button className="rounded-full bg-primary/80 px-8 py-3 font-semibold text-white cursor-pointer transition hover:bg-primary">
              Discover Our Story →
            </button>
          </div>
      </article>
    </section>
  );
};

export default AboutMain;

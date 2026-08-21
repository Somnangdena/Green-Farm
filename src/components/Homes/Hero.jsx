import image from "../../assets/images/images.jpg"

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden pt-10 pb-20">
      {/* Background Image */}
      <img
        src= {image}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-start px-6 text-center">
        <div className="container mx-auto px-5 text-white text-start">
          <p className="text-sm font-semibold capitalize bg-white/10 text-center rounded-full inline-block px-3 py-1 text-white/80">
            100% Fresh farm Products
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Farm From Our
            <span className="block text-primary/80 brightness-150">Farm To Your Table</span>
          </h1>

          <p className="max-w-xl leading-7 text-white/80 sm:text-lg">
            We grow fresh and healthy food with care, passion, and sustainble farming methods for your family
          </p>

          <div className="mt-8 flex flex-wrap justify-start gap-4 sm:flex-row">
            <button className="rounded-full bg-primary/80 px-8 py-3 font-semibold cursor-pointer transition hover:bg-primary">
              Explore Products
            </button>

            <button className="rounded-full border border-white/40 bg-white/10 px-8 py-3 font-semibold cursor-pointer backdrop-blur-sm transition hover:bg-white/20">
              Learn Abouts Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

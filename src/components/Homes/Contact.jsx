const Contact = () => {
  return (
    <section className="bg-primary/20">
      <article className="container mx-auto">
        <div className="py-15 px-5 flex flex-col justify-center items-center gap-5">
          <h3 className="text-3xl font-bold dark:text-gray-200 text-center sm:text-4xl capitalize px-5">
            Want to know more about our farm?
          </h3>
          <p className="text-sm text-center dark:text-gray-300">come visit our contact us to learn more about our fresh product</p>
          <div className="flex justify-center items-center mt-4">
            <button className="rounded-full bg-white dark:bg-black dark:text-white px-8 py-3 font-semibold text-primary cursor-pointer transition hover:bg-primary hover:text-white duration-300">
              Contact Our Farm →
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;

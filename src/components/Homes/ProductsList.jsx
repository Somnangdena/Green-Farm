import { listProducts } from "../../data/data";

const ProductsList = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {listProducts.map((product) => (
        <div
          key={product.id}
          className="group overflow-hidden rounded-2xl bg-white shadow-sm dark:border dark:border-white/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Category */}
            <span className="absolute left-3 top-3 rounded-full bg-white/90 dark:bg-gray-600 px-3 py-1 text-xs font-semibold text-primary dark:text-white shadow">
              {product.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {product.name}
            </h3>
            <p className="text-sm text-gray-800 dark:text-white">
              {product.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xl font-bold text-primary brightness-150">
                {`$${product.price}`}
                <span className="text-sm font-normal text-gray-500">{product.id === 5 ? "/dozen" : "/kg"}</span>
              </span>

              <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/80">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;

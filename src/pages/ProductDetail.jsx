import { useParams, useNavigate, Link } from "react-router-dom";
import { listProducts } from "../data/data";
import { MdArrowBack } from "react-icons/md";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = listProducts.find((d) => d.id == id);

  const { name, price, image, category, description } = product;

  return (
    <section className="bg-primary/5">
      <div className="container mx-auto py-10">
        <div className="mx-5 sm:mx-10">
            <button
              onClick={() => navigate(-1)}
              className="mb-4 flex justify-center items-center gap-2 text-primary p-4 dark:brightness-150 font-semibold cursor-pointer"
            >
              <MdArrowBack/>Go Back
            </button>
          <div className="bg-white dark:bg-gray-800 w-full mx-auto p-8 rounded-2xl shadow-xl">

            <div className="flex flex-col justify-center items-center gap-10 md:flex-row">
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={image}
                  alt={name}
                  className="w-full lg:max-h-112 rounded-xl object-cover shadow-md"
                />
              </div>

              <div className="w-full md:w-1/2 space-y-5">
                <span className="rounded-full bg-primary/10 dark:brightness-150 px-3 py-1 text-xs font-semibold text-primary shadow">
                  {category}
                </span>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-3">
                  {name}
                </h3>

                <p className="text-sm text-gray-800 dark:text-gray-100 mt-2">
                  {description}
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xl font-bold text-primary dark:brightness-150">
                    ${price}
                    <span className="text-sm font-normal text-gray-500">
                      {Number(id) === 5 ? "/dozen" : "/kg"}
                    </span>
                  </span>
                </div>

                <Link
                  to={"/contact"}
                  className="rounded-full bg-primary hover:bg-primary/80 px-5 py-2 text-white cursor-pointer"
                >
                  Contact to Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

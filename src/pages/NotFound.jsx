import { Link } from "react-router-dom";

const NotFound = () => {
  
  return (
    <section className='container mx-auto'>
        <div className="min-h-dvh flex flex-col gap-5 justify-center items-center">
          <h1 className="text-4xl text-center font-bold dark:text-white">Page Not Found</h1>
          <Link 
              to={"/"}
              className="rounded-full font-semibold bg-primary hover:bg-primary/80 px-5 py-2 text-white cursor-pointer">
                Back to Home page
              </Link>
        </div>
    </section>
  )
}

export default NotFound;
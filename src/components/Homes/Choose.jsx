import { RiCertificateFill, RiPlantFill } from "react-icons/ri";
import { GiHealingShield } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import Header from "./Header";

const items = [
    {
        id: 1,
        icons: <RiPlantFill/>,
        title: "Fresh",
        desc: "Harvested fresh from our farm." ,
    },
    {
        id: 2,
        icons: <GiHealingShield />,
        title: "Healthy",
        desc: "Healthy products for your family." ,
    },
    {
        id: 3,
        icons: <RiCertificateFill />,
        title: "Quality",
        desc: "We care about every product" ,
    },
    {
        id: 4,
        icons: <BiWorld />,
        title: "Sustainble",
        desc: "Responsible farming for our future" ,
    },
]

const Choose = () => {
  return (
    <section className="container mx-auto">
      <div className="py-15">
        <div className="mb-10 text-center">
          <Header subtitle={"Why choose us"} title={"Farm You can trust"}/>
        </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-10">
        {
            items.map((i) =>(
                <div key={i.id} className="flex flex-col justify-center items-center gap-3 bg-primary/20 py-5 px-6 rounded-2xl" >
                    <div className="text-3xl flex justify-center items-center text-primary/80">{i.icons}</div>
                    <h3 className="font-bold dark:text-gray-200">{i.title}</h3>
                    <p className="text-center text-xs text-gray-600 dark:text-gray-400">{i.desc}</p>
                </div>
            ))
        }
       </div>
      </div>
    </section>
  )
}

export default Choose
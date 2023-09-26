import { useThemeContext } from "../context/theme";
import ItemCard from "./ItemCard";

const categories=[
    {
    id:"01",
    title:"Action Games"
},  {
    id:"02",
    title:"Sports Games"
},  {
    id:"03",
    title:"Adventure Games"
},  {
    id:"04",
    title:"Arcade Games"
},  {
    id:"05",
    title:"Fantasy Games"
},  {
    id:"06",
    title:"Strategy Games"
},  {
    id:"07",
    title:"Shooter Games"
},  {
    id:"View All",
    title:"All Categories"
},
]


const Categories = () => {
    const {theme}=useThemeContext()
   
  return (
    <div className=" pt-40 flex flex-col justify-start">
      <h1 className={`pl-16 lg:pl-44 text-xl  font-bold  ${theme?"text-gray-800 ":"text-white"}`}>
        Trending Categories</h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pt-16 lg:mx-36 px-2">
            {categories.map(item=>(
                <ItemCard data={item} key={item.id} />
            ))}
      </div>
      
    </div>
  );
};

export default Categories;

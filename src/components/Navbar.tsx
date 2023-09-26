import { useState } from "react";
import { useThemeContext } from "../context/theme";
import Moon from "../assets/moon-stars-svgrepo-com.svg";
import Sun from "../assets/sun-fog-svgrepo-com.svg";

const Navbar = () => {
  const { theme, setTheme } = useThemeContext();
  const [login, setLogin] = useState(false);

  return (
    <section>
      <div className="flex justify-around mb-10">
        <div className="hidden lg:flex lg:gap-3 ">
          <button className="text-lg font-bold text-indigo-500 dark:hover:text-white dark:text-orange-400">
            Home
          </button>
          <button
            className={`text-lg ${
              theme ? "text-gray-800" : "dark:text-gray-400"
            } `}
          >
            Streams
          </button>
          <button
            className={`text-lg ${
              theme ? "text-gray-800" : "dark:text-gray-400"
            } `}
          >
            Party
          </button>
          <button
            className={`text-lg ${
              theme ? "text-gray-800" : "dark:text-gray-400"
            } `}
          >
            Premium
          </button>
        </div>
        <h1
          className={`text-3xl font-bold ${
            theme ? "text-gray-800" : "text-white"
          } `}
        >
          Gamor
        </h1>
        <div className="flex gap-3">
          <button
            className={`rounded-full ${
              theme ? "text-gray-800" : "text-gray-400"
            } `}
            onClick={() => setTheme(!theme)}
          >
           {theme
           ?(<img className="h-6 text-slate-100" src={Moon} alt="" />)
           :(<img className="h-6 text-slate-100" src={Sun} alt="" />)
           } 
          </button>
          {login ? (
            <button
              className={`rounded-full hidden lg:flex lg:pt-2 ${
                theme ? "text-gray-800" : "text-gray-400"
              } `}
              onClick={() => setLogin(!login)}
            >
              
              Sign In
      
            </button>
          ) : (
            <button
              className={`rounded-full hidden lg:flex lg:pt-2 ${
                theme ? "text-gray-800" : "text-gray-400"
              } `}
              onClick={() => setLogin(!login)}
            >
              Sign Out
            </button>
          )}
          <button
            className={`rounded-full bg-gray-800 text-white  ${
              !theme && "border-2 border-slate-100"
            } 
            py-2 px-3`}
          >
            Create account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

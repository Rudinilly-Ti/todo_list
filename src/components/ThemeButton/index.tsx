import useThemeContext from "@/context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export default function ThemeButton() {
    const { theme, setTheme } = useThemeContext();

    return (
        <button 
            onClick={() => { setTheme(theme === "light" ? "dark" : "light") }} 
            className="absolute text-2xl rounded top-5 right-16 p-2 border border-double border-purple-600 text-white dark:text-purple-600 bg-purple-600 dark:bg-transparent">
            {theme === "light" ? <FaMoon /> : <MdOutlineWbSunny />}
        </button>
    )
}
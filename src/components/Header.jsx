import { useState } from "react"
import { close, logo, menu } from "../assets"
import { navLinks } from "../constants";

function Header() {
    const [drop, setDrop] = useState(false);
    const [menuLogo, setMenuLogo] = useState(false);
    return <>
        <div className="container m-auto py-5 max-sm:px-1">
            <div className="flex items-center">
                <div className="flex items-center gap-1">
                    <img src={logo} alt="logo" className="w-10" />
                    <h1 className="font-bold text-white">Nova<span className="text-cyan-400">Bank</span></h1>
                </div>
                <div className="flex-1 text-right">
                    <button className="sm:hidden">
                        <img src={menuLogo == false ? menu : close} alt="menu" className="hidden max-sm:block" onClick={() => {
                            if (drop == true || menuLogo == true) {
                                setDrop(false);
                                setMenuLogo(false)
                            } else {
                                setDrop(true)
                                setMenuLogo(true);
                            }
                        }} />
                    </button>
                    {drop == true && <ul className="text-white flex gap-1 items-center justify-end max-sm:absolute max-sm:right-0 max-sm:flex-col max-sm:py-2 bg-gray-gradient max-sm:w-1/4 text-center rounded-xl max-sm:mt-4 max-sm:items-start max-sm:px-1 max-sm:transition max-sm:duration-500 sm:hidden max-sm:z-50">
                        {navLinks.map((nav) => {
                            return <li className="cursor-pointer hover:text-cyan-300" key={nav.id}><a href={`#${nav.id}`}>{nav.title}</a></li>
                        })}
                    </ul>}
                    <ul className="text-white flex gap-4 items-center justify-end max-sm:hidden" id="drop">
                        {navLinks.map((nav) => {
                            return <li className="cursor-pointer hover:text-cyan-300" key={nav.id}><a href={`#${nav.id}`}>{nav.title}</a></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </>
}
export default Header
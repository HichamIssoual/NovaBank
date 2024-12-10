import { arrowUp, discount, robot } from "../assets";
import { hero, navLinks } from "../constants";

function Hero() {
    return <>
        <div className="flex justify-between container ml-auto max-lg:flex-col" id={navLinks.at(0).id}>
            <div className="w-96 rounded-3xl box-shadow absolute white__gradient right-20 top-11"></div>
            <div className="relative w-1/2 max-lg:w-full">
                <div className="flex flex-col gap-6">
                    <div className="bg-discount-gradient w-fit p-1 rounded-3xl text-gray-500 flex gap-1 items-center">
                        <img src={discount} alt="discount" />
                        <p>{hero[0].textDiscount}</p>
                    </div>
                    <h1 className="text-6xl max-sm:text-4xl font-extrabold text-white">
                        {hero[0].titleHeading.t1} <br />
                        <span className="text-gradient">
                            {hero.at(0).titleHeading.t2}
                        </span> <br />
                        {hero[0].titleHeading.t3}
                    </h1>
                    <p className="text-sm sm:text-2xl w-3/4 text-left text-gray-500">
                        {hero.at(0).description}
                    </p>
                </div>
                <div className="absolute top-16 right-0 pd-1px rounded-full bg-blue-gradient max-sm:hidden lg:hidden xl:block">
                    <div className="w-36 h-36 flex flex-col justify-center items-center z-20 bg-black-gradient-2 rounded-full text-lg cursor-pointer">
                        <span className="flex text-gradient">get <img src={arrowUp} alt="" /></span>
                        <span className="text-gradient">Started</span>
                    </div>
                </div>
            </div>
            <div className="w-1/2 max-lg:w-full">
                <img src={robot} alt="robot" className="w-full" />
            </div>
        </div>
    </>;
}
export default Hero;
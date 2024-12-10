import { card } from "../assets";

function Business() {
    return (
        <div className="container m-auto mt-20">
            <div className="flex items-center max-md:flex-col max-md:justify-center">
                <div className="text-white flex-1">
                    <h1 className="text-6xl font-bold leading-relaxed max-lg:text-4xl">Find a better card deal
                        in few easy steps.</h1>
                    <p className="text-gray-700 leading-normal mb-4">With the right credit card, you can unlock opportunities to build a stronger financial future, enjoy exclusive perks, and manage your expenses effectively. Explore options tailored to your needs
                    </p>
                    <button className="p-4 bg-blue-gradient rounded-xl text-gray-700 font-bold">Get Started</button>
                </div>
                <img src={card} alt="Business" className="w-1/2 max-md:w-full" />
            </div>
        </div>
    );
}
export default Business;
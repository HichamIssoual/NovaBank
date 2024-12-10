import { apple, bill, google } from "../assets";
import { navLinks } from "../constants";

function Product() {
    return (
        <div className="flex mt-28 items-center max-md:flex-col max-md:justify-center" id={navLinks.at(2).id}>
            <img src={bill} alt="Bill" className="w-1/2 max-md:w-full" />
            <div className="flex-1 text-white">
                <h1 className="text-6xl font-bold leading-relaxed">Easily control your
                    billing & invoicing</h1>
                <p className="text-gray-500 mb-5">With the right credit card, you can unlock opportunities to build a stronger financial future, enjoy exclusive perks, and manage your expenses effectively. Explore options tailored to your needs</p>
                <div className="flex gap-3 flex-wrap">
                    <img src={apple} alt="apple" className="cursor-pointer"/>
                    <img src={google} alt="google" className="cursor-pointer"/>
                </div>
            </div>
        </div>
    );
}
export default Product;
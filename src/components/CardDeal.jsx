import { navLinks } from "../constants";

function CardDeal() {
    return (
        <div className="container m-auto mt-20" id={navLinks.at(3).id}>
            <div className="flex items-center max-md:flex-col text-center">
                <h1 className="font-bold text-6xl max-md:text-3xl text-white">What People are
                    saying about us</h1>
                <p className="text-gray-700 text-lg">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
        </div>
    )
}
export default CardDeal;
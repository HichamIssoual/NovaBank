import { features, navLinks } from "../constants";

function Features() {
    return (
        <div className="container m-auto mt-36" id={navLinks.at(1).id}>
            <div className="flex gap-5 flex-wrap max-lg:flex-col items-center">
                <div className="flex-1 text-white">
                    <h1 className="text-6xl max-md:text-3xl font-bold mb-4 leading-loose">You do the business,
                        we’ll handle the money.</h1>
                    <p className="text-gray-600 mb-4">With the right credit card, you can unlock opportunities to build a stronger financial future, enjoy exclusive perks, and manage your expenses effectively. Explore options tailored to your needs</p>
                    <button className="p-4 bg-blue-gradient rounded-xl text-gray-700 font-bold">Get Started</button>
                </div>
                <div className="flex gap-14 flex-col flex-1">
                    {features.map((feature) => {
                        return (
                            <div className="flex items-center gap-2 p-4 transition duration-500 feature-card rounded-xl" key={feature.id}>
                                <img src={feature.icon} alt={feature.title} className="w-10"/>
                                <div className="text-white">
                                    <h1 className="font-bold">{feature.title}</h1>
                                    <p className="max-sm:text-sm">{feature.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default Features;
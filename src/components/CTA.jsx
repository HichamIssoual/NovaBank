import { clients } from "../constants";

function CTA() {
    return (
        <div className="container m-auto mt-20">
            <div className="flex justify-between items-center flex-wrap max-sm:flex-col max-sm:justify-center">
                {clients.map(client => {
                    return (
                        <div key={client.id} className="w-3/12 max-sm:w-full max-sm:mb-5">
                            <img src={client.logo} alt={client.id} className="w-4/5 max-sm:w-11/12 m-auto"/>
                        </div>
                    )
                })}
            </div>
            <div className="mt-6 flex gap-3 bg-discount-gradient p-5 rounded-lg items-center justify-center max-sm:flex-col box-shadow">
                <div className="flex-1 text-white">
                    <h1 className="font-bold text-6xl leading-loose max-lg:leading-normal max-md:text-4xl">Let’s try our service now!</h1>
                    <p className="text-lg leading-relaxed w-2/5 text-slate-300 max-md:w-full">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
                <button className="p-4 bg-blue-gradient rounded-xl text-gray-700 font-bold">Get Started</button>
            </div>
        </div>
    )
}
export default CTA;
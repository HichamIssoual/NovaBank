import { quotes } from "../assets";
import { feedback } from "../constants";

function Clients() {
    return (
        <div className="container m-auto mt-20">
            <div className="flex justify-between items-center flex-wrap">
                {feedback.map((client)=>{
                    return (
                        <div className="text-white p-2 w-1/3 max-sm:w-full mb-5 transition duration-500 feature-card rounded-lg" key={client.id}>
                            <img src={quotes} alt="quote" className="mb-8"/>
                            <p className="mb-8">{client.content}</p>
                            <div className="flex items-center gap-2">
                                <img src={client.img} alt="profile" width={"45px"}/>
                                <div className="">
                                    <h2 className="font-bold">{client.name}</h2>
                                    <span className="text-gray-500 text-sm">{client.title}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Clients;
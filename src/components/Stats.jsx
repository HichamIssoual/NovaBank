import { stats } from "../constants";

function Stats() {
    return <>
        <div className="container m-auto">
            <div className="flex justify-evenly gap-2 flex-wrap text-3xl">
                {stats.map((state) => {
                    return (
                        <div key={state.id} className="flex gap-3 items-center text-center">
                            <span className="text-white">{state.value}</span>
                            <span className="text-gradient max-sm:text-sm">{state.title}</span>
                        </div>)
                })}
            </div>
        </div>
    </>
}
export default Stats;
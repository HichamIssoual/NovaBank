import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
    return (
        <div className="container m-auto mt-24">
            <div className="flex max-md:flex-col items-start pb-4 lg:border-b lg:border-solid lg:border-slate-400">
                <div className="max-md:m-auto">
                    <div className="flex items-center gap-1">
                        <img src={logo} alt="logo" className="w-16" />
                        <h1 className="font-bold text-2xl text-white">Nova<span className="text-cyan-400">Bank</span></h1>
                    </div>
                    <p className="text-slate-400 text-lg mt-4">A new way to make the payments easy, <br /> reliable and secure.</p>
                </div>
                <div className="text-white flex-1 max-md:w-full max-md:mt-10">
                    <div className="flex justify-evenly items-start max-md:justify-between max-sm:flex-wrap">
                        {footerLinks.map((title => {
                            return (
                                <div key={title.title} className="">
                                    <h1 className="text-lg font-bold">{title.title}</h1>
                                    {title.links.map((link, index) => {
                                        return (
                                            <div key={link.name} className={"text-slate-400 mt-5 hover:text-cyan-400"}>
                                                <a href={link.link}>{link.name}</a>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-4 mt-5 text-white pb-4 max-sm:flex-col max-sm:text-center">
                <h3>Copyright Ⓒ 2022 Novabank. All Rights Reserved.</h3>
                <div className="flex gap-2 max-sm:m-auto">
                    {socialMedia.map(media => {
                        return (
                            <div key={media.id}>
                                <a href="#">
                                    <img src={media.icon} alt={media.id} />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Footer;

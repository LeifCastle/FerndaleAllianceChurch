import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    
    const Pathname = usePathname();
    
    
    //--Styles
    const linkStyle = `text-xl duration-500`;
    
    return (
        <div className={"fixed top-0 flex w-full items-center justify-between px-12 bg-black/25 transition-translate duration-500"} id={"Header"}>
            <div className={"basis-1/3"}>
                <Image src={"/images/FACLogoGradient.png"} alt={"logo"} height={90} width={90}/></div>
            <div className={"basis-1/3"}></div>
            <div className={"basis-1/3 flex gap-10"}>
                <Link className={`${linkStyle} ${Pathname === "/" ? 'text-blue-300' : 'text-white hover:text-gray-400'}`} href={"/"}>Home</Link>
                <Link className={`${linkStyle} ${Pathname === "/connect" ? 'text-blue-300' : 'text-white hover:text-gray-400'}`} href={"/connect"}>Connect</Link>
                <Link className={`${linkStyle} ${Pathname === "/ministries" ? 'text-blue-300' : 'text-white hover:text-gray-400'}`} href={"/ministries"}>Ministries</Link>
                <Link className={`${linkStyle} ${Pathname === "/give" ? 'text-blue-300' : 'text-white hover:text-gray-400'}`} href={"/give"}>Give</Link>
            </div>
        </div>
    )
}
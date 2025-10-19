import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className={"fixed flex w-full items-center justify-between px-12 bg-black/20 text-xl"}>
            <div className={"basis-1/3"}>
                <Image src={"/images/FACLogoGradient.png"} alt={"logo"} height={90} width={90}/></div>
            <div className={"basis-1/3"}></div>
            <div className={"basis-1/3 flex gap-10"}>
                <Link href={"/"}>Home</Link>
                <Link href={"/connect"}>Connect</Link>
                <Link href={"/ministries"}>Ministries</Link>
                <Link href={"/give"}>Give</Link>
            </div>
        </div>
    )
}
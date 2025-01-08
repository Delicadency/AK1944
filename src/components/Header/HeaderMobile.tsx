import HeaderMenuIcon from "@/icons/HeaderMenuIcon"
import { HeaderLogo } from "./HeaderLogo"

export const HeaderMobile = () => {
return (
    <div className="flex content-center">
        <HeaderLogo />
        <p className="font-courier text-14 text-white text-center w-[135px] h-8">Światowy Związek Żołnierzy AK</p>
        <HeaderMenuIcon className="text-white" />
    </div>
)
}
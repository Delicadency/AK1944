import { HeaderLogo } from "./HeaderLogo"
import FontSwitcher from "../Switcher/FontSwitcher"
import ContrastSwitcher from "../Switcher/ContrastSwitcher"
import { Button } from "../shared/Button/Button"

export const HeaderTabAndDesktop = () => {
    return (
        <div className=" ">
            <HeaderLogo />
            <div>
              <nav></nav>
              <nav></nav>
            </div>
            <div>
              <div className="w-[124px] h-[42px]">
                <FontSwitcher />
                <ContrastSwitcher />
              </div>
              <Button
                label="Wesprzyj"
                ariaDescription="Kliknij, aby wesprzeć fundację"
                href="#"
              />
            </div>
        </div>
    )
}
import LogoutComponent from "../../components/login/LogoutComponent"
import Basicmenu from "../../components/menus/Basicmenu"

const LogoutPage = () => {
    return (
        <div className="fixed top-0 left-0 z-[1055] flex flex-col h-full w-full">
            <Basicmenu/>
            <div className="w-full flex flex-wrap h-full justify-center items-center border-2">
                <LogoutComponent/>
            </div>
        </div>
    )
}

export default LogoutPage
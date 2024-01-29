import Basicmenu from "../components/menus/Basicmenu";
import CartComponent from "../components/menus/CartComponent";

const BasicLayout = ({children}) => {
    return (
        <>
        <Basicmenu></Basicmenu>
    
        <div className="bg-white my-5 w-full flex flex-col space-y-1 md:flex-row md:space-x-4 md:space-y-0">
            <main className="bg-sky-300 md:w-4/5 lg:w-3/4 px-5 py-5">
                {children}
            </main>

            <aside className="bg-green-300 md:w-1/5 lg:w-1/4 px-5">
                <CartComponent/>
            </aside>
        </div>
        </>
    );
}

export default BasicLayout
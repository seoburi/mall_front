import { useNavigate, useParams } from "react-router-dom";
import ModifyComponent from "../../components/todo/ModifyCompenent";

const ModifyPage = () => {

    const {tno} = useParams()

    const navigate = useNavigate()

    const moveToRead = () => {
        navigate({pathname:'/todo/read/${tno}'})
    }
    
    const moveToList = () => {
        navigate({pathname:'/todo/list'})
    }
    
    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Todo Modify Page {tno}
            </div>

            <ModifyComponent tno={tno}/>
        </div>
        
    );
}

export default ModifyPage
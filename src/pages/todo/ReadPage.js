import { useCallback } from "react";
import { useNavigate, useParams,createSearchParams, useSearchParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {

    const { tno } = useParams()

    return (
        <div className="w-full bg-white mt-6 font--extrabold">
            <div className="text-2xl">
                Todo Read Component {tno}
            </div>
            <ReadComponent tno={tno}></ReadComponent>
        </div>
    );
}

export default ReadPage

import { lazy, Suspense} from "react"
import { Navigate } from "react-router-dom"

const Loading = <div>Loading..........</div>
const ProductsList = lazy(() => import("../pages/products/ListPage"))
const ProductsAdd = lazy(() => import("../pages/products/AddPage"))
const ProductRead = lazy(() => import("../pages/products/ReadPage"))
const ProductModify = lazy(() => import("../pages/products/ModifyPage"))

const productRouter = () => {
    return [
        {
            path:"list",
            element: <Suspense fallback={Loading}><ProductsList/></Suspense>
        },
        {
            path:"",
            element: <Navigate replace to ="list"/>
        },
        {
            path:"add",
            element: <Suspense fallback={Loading}><ProductsAdd/></Suspense>
        },
        {
            path:"read/:pno",
            element: <Suspense fallback={Loading}><ProductRead/></Suspense>
        },
        {
            path:"modify/:pno",
            element: <Suspense fallback={Loading}><ProductModify/></Suspense>
        }
    ]
}

export default productRouter
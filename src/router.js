import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import { createAction, deleteAction, updateAction } from "./actions";
import App from "./App"
import { indexLoader, showLoader } from "./loaders";
import About from "./pages/About";
import Index from "./pages/Index";
import ShowItem from "./pages/SingleItem";


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>

                <Route path="" element={<Index />} loader={indexLoader}/>
                <Route path="about" element={<About/>} />
                <Route path="item/:id" element={<ShowItem/>} loader={showLoader}/>
                <Route path="create" action={createAction}/>
                <Route path="update/:id" action={updateAction}/>
                <Route path="delete/:id" action={deleteAction}/>

        </Route>
    </>
))

export default router 
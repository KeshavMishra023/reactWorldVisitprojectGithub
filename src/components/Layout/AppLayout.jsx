import { Outlet } from "react-router-dom";

import { Headers } from "../Ui/Headers";
import { Footers } from "../Ui/Footers";


 export const AppLayout = () => {
    return <>
        <Headers/>
        <Outlet/>
        <Footers/>
    </>
};
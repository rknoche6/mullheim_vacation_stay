import CalendarComponent from "./fetchData";
import Paypal from "../checkout/PayPalButton";
import { useEffect, useState } from "react";


const Checkout=()=>{
    return(
        <div>
        <CalendarComponent/>
        <Paypal />
        </div>
    )
}
export default Checkout
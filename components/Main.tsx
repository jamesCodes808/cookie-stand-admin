import CreateForm from "@/components/CreateForm";
import ReportTable from "@/components/ReportTable";
import Footer from "@/components/Footer";
import {useState} from "react";
import {store} from "next/dist/build/output/store";
import {hours} from "@/data";
export default function Main() {

     const [listOfStores, setStoreInfo] = useState([]);

    function handleSubmit(event:any) {
        event.preventDefault()
        let newStoreInfo = {
            id: listOfStores.length + 1,
            location: (event.target as any).location.value,
            minCustPerHour: (event.target as any).min_cust.value,
            maxCustPerHour: (event.target as any).max_cust.value,
            avgCookiesPerHour: (event.target as any).avg_cookies.value,
            totalSoldPerHour: getTotalSoldPerHour((event.target as any).max_cust.value, (event.target as any).min_cust.value, (event.target as any).avg_cookies.value),
        }
        setStoreInfo([...listOfStores, newStoreInfo]);
    }

    function getTotalSoldPerHour(maxCust:number, minCust:number, avgCookies:number) {
        const totalSoldPerHour = [];
        for (let hour of hours) {
            totalSoldPerHour.push(Math.round(Math.round((Math.random() * (maxCust - minCust)+ minCust)) * avgCookies))
        }
        return totalSoldPerHour
    }


    return (
    <>
        <div className='bg-white flex flex-col h-screen justify-between m-auto p-auto'>
            <CreateForm onFormSubmit={handleSubmit}></CreateForm>
            <ReportTable listOfStores={listOfStores}></ReportTable>
            <Footer></Footer>
        </div>
    </>
    )
}
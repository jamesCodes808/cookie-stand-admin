import {hours} from "@/data";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
import React, { useEffect} from "react";

// @ts-ignore
export default function ReportTable( { stores, loading, deleteResource } ){

    function getBottomTotals() {
       let hourlyTotalsList = new Array(hours.length).fill(0)
       // let hourlyTotalsList = Array.from({ length: hours.length }, () => 0)
        for (let store of stores) {
            store.hourly_sales.forEach((sale:number, hourIndex:number) => {
                hourlyTotalsList[hourIndex] += sale
            })
        }
        return hourlyTotalsList
    }
    function getHourlySales() {

        for (let store of stores) {
            const totalSoldPerHour = [];
            if (store.hourly_sales.length < hours.length) {
                for (let hour of hours) {
                    totalSoldPerHour.push(Math.round(Math.round((Math.random() * (store.maximum_customers_per_hour - store.minimum_customers_per_hour) + store.minimum_customers_per_hour)) * store.average_cookies_per_sale))
                }
                store.hourly_sales = Array.from(totalSoldPerHour)
            }
        }
    }
    function getGrandTotal() {
        let grandTotal = 0
        for (let store of stores) {
            grandTotal += store.hourly_sales.reduce((acc:number, sale:number) => acc + sale, 0)
        }
        return grandTotal
    }

   if (loading) {<text className='font-medium'>Report Table Coming Soon...</text>;}
   else {
        getHourlySales()
   }

    console.log(stores)

    return (
    <>
     <div className='flex container mx-auto w-max'>
         {!loading ?

             <table className='table-auto'>
                 <thead className='bg-green-400 p-2'>
                    <tr>
                    <th>Location</th>
                    {hours.map(hour => (
                     <th key={hour}>{hour}</th>
                     ))
                    }
                    <th>Totals</th>
                    </tr>
                 </thead>
                 <tbody>
                 {stores.map((store: { id: number, location: string, hourly_sales: number[], minimum_customers_per_hour: number, maximum_customers_per_hour: number, average_cookies_per_sale: number }) => (
                    <tr key={store.id} className='even:bg-[#35D298] odd:bg-[#6EE7B7]'>
                        <td>{store.location} <text onClick={()=> deleteResource(store.id)}>[x]</text></td>
                        {store.hourly_sales.map((sale: number) => (
                            <td key={store.id}>{sale}</td>
                        ))}
                        <td>{store.hourly_sales.reduce((acc:number, sale:number) => acc + sale, 0)}</td>
                    </tr>
                 ))
                 }
             </tbody>
               <tfoot className='bg-[#15B981]'>
                   <th>Totals</th>

                       {getBottomTotals().map((total,idx) => (
                           <td key={idx}>{total}</td>
                       ))}
                       <td>{getGrandTotal()}</td>

               </tfoot>
            </table>
             :
             <text className='font-medium'>Report Table Coming Soon...</text>
         }

     </div>
    </>
    )
}
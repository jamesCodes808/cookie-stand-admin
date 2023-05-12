import {hours} from "@/data";

// @ts-ignore
export default function ReportTable( { stores, loading } ){

   if (loading) {<text className='font-medium'>Report Table Coming Soon...</text>;}

    function getBottomTotals() {
        let hourlyTotalsList = Array.from({ length: hours.length }, () => 0)

        for (let store of stores) {
            for (let [hourIndex, sale] of store.hourly_sales.entries()){
                hourlyTotalsList[hourIndex] += sale
            }
        }
        return hourlyTotalsList
    }

    function getHourlySales() {
        for (let store of stores) {
            console.log(store)
            const totalSoldPerHour = [];
            for (let hour of hours) {
                totalSoldPerHour.push(Math.round(Math.round((Math.random() * (store.maximum_customers_per_hour - store.minimum_customers_per_hour) + store.minimum_customers_per_hour)) * store.average_cookies_per_sale))
            }
            store.hourly_sales = Array.from(totalSoldPerHour)
        }
    }
    function getGrandTotal() {
        let grandTotal = 0
        for (let store of stores) {
            grandTotal += store.hourly_sales.reduce((acc:number, sale:number) => acc + sale, 0)
        }
        return grandTotal
    }

    getHourlySales()
    // for (let store in stores) {
    //         getHourlySales(store.maximum_customers_per_hour, store.minimum_customers_per_hour, store.average_cookies_per_sale)
    // }


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
                 {stores.map((store: { pk: number, location: string, hourly_sales: number[], minimum_customers_per_hour: number, maximum_customers_per_hour: number, average_cookies_per_sale: number }) => (
                    <tr key={store.pk} className='even:bg-[#35D298] odd:bg-[#6EE7B7]'>
                        <td>{store.location}</td>
                        {store.hourly_sales.map((sale: number) => (
                            <td key={store.pk}>{sale}</td>
                        ))}
                        <td>{store.hourly_sales.reduce((acc:number, sale:number) => acc + sale, 0)}</td>
                    </tr>
                 ))
                 }
             </tbody>
               <tfoot className='bg-[#15B981]'>
                   <th>Totals</th>
                   {getBottomTotals().map(total => (
                       <td key={total}>{total}</td>
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
import {hours} from "@/data";

export default function ReportTable( {listOfStores} ){

    console.log(listOfStores)

    function getBottomTotals() {
        let hourlyTotalsList = Array.from({ length: hours.length }, () => 0)

        for (let store of listOfStores) {
            for (let [hourIndex, sale] of store.totalSoldPerHour.entries()){
                hourlyTotalsList[hourIndex] += sale
            }
        }
        return hourlyTotalsList
    }

    function getGrandTotal() {
        let grandTotal = 0
        for (let store of listOfStores) {
            grandTotal += store.totalSoldPerHour.reduce((acc:number, sale:number) => acc + sale, 0)
        }
        return grandTotal
    }

    return (
    <>
     <div className='flex container mx-auto w-max'>
         {listOfStores.length ?

             <table className='table-auto'>
                 <thead className='bg-green-400 p-2'>
                    <tr>
                    <th>Location</th>
                    {hours.map(hour => (
                     <th>{hour}</th>
                     ))
                    }
                    <th>Totals</th>
                    </tr>
                 </thead>
                 <tbody>
                 {listOfStores.map((store: { id: number, location: string, totalSoldPerHour: number[] }) => (
                    <tr key={store.id} className='even:bg-[#35D298] odd:bg-[#6EE7B7]'>
                        <td>{store.location}</td>
                        {store.totalSoldPerHour.map((sale: number) => (
                            <td>{sale}</td>
                        ))}
                        <td>{store.totalSoldPerHour.reduce((acc:number, sale:number) => acc + sale, 0)}</td>
                    </tr>
                 ))
                 }
             </tbody>
               <tfoot className='bg-[#15B981]'>
                   <th>Totals</th>
                   {getBottomTotals().map(total => (
                       <td>{total}</td>
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
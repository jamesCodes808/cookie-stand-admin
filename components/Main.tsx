import CreateForm from "@/components/CreateForm";
import ReportTable from "@/components/ReportTable";
import Footer from "@/components/Footer";
// import {useState} from "react";
// import {hours} from "@/data";
import { useAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResources";

export default function Main() {

    // const [listOfStores, setStoreInfo] = useState([]);
    const { user, login } = useAuth()
    const { resources, loading } = useResource();

    // function handleSubmit(event: React.FormEvent<HTMLFormElement>):void {
    //     event.preventDefault()
    //     const target = event.target as typeof event.target & {
    //         location: { value: string };
    //         min_cust: { value: number };
    //         max_cust: { value: number };
    //         avg_cookies: { value: number };
    //     }
    //
    //     let newStoreInfo = {
    //         id: listOfStores.length + 1,
    //         location: target.location.value,
    //         minCustPerHour: target.min_cust.value,
    //         maxCustPerHour: target.max_cust.value,
    //         avgCookiesPerHour: target.avg_cookies.value,
    //         totalSoldPerHour: getTotalSoldPerHour(target.max_cust.value, target.min_cust.value, target.avg_cookies.value),
    //     }
    //     // @ts-ignore
    //     setStoreInfo([...listOfStores, newStoreInfo]);
    // }

    function handleLogin(event: React.FormEvent<HTMLFormElement>):void {
        event.preventDefault()
        const target = event.target as typeof event.target & {
             username: { value: string };
             password: { value: string };
         }
        login(target.username.value, target.password.value)
    }


    return (
    <>
        <div className="flex flex-col min-h-screen">
            <div className='bg-white flex flex-col h-screen justify-center items-center'>
                {user ? (
                <>
                    <CreateForm></CreateForm>
                    <ReportTable
                        stores={resources}
                        loading={loading}
                    ></ReportTable>
                </>
                )
                :
                    (
                        <>
                         <div className='container text-center w-auto'>
                            <form className='bg-[#A9F4D1] rounded-md'
                                  onSubmit={handleLogin}

                            >

                                <div className='flex flex-col items-center'>
                                    <label className='font-bold' htmlFor='username'>USER NAME</label>
                                    <input id='username' type='text' className=''/>
                                </div>

                                <div className='flex flex-col items-center m-5'>
                                    <label className='font-bold' htmlFor='password'>PASSWORD</label>
                                    <input id='password' type='password' className=''/>
                                </div>

                                <button className='bg-[#15B880] rounded-md w-11/12 h-10 mb-5'
                                // onClick={()=> login('admin', 'password')}
                                >SIGN IN</button>
                            </form>
                         </div>
                        </>
                    )}

            </div>
                <Footer></Footer>
        </div>
    </>
    )
}
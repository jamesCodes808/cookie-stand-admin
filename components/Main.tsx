import CreateForm from "@/components/CreateForm";
import ReportTable from "@/components/ReportTable";
import Footer from "@/components/Footer";
// import {useState} from "react";
// import {hours} from "@/data";
import { useAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResources";
import LoginForm from "@/components/LoginForm";

export default function Main() {

    // const [state, setStoreInfo] = useState([]);
    const { user, login } = useAuth()
    const { resources, loading, createResource, deleteResource } = useResource();

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

         console.log(target.username.value, target.password.value)
        login(target.username.value, target.password.value)
    }


    // @ts-ignore
    return (
    <>
        <div className="flex flex-col min-h-screen">
            <div className='bg-white flex flex-col h-screen justify-center items-center'>
                {user ? (
                <>
                    <CreateForm
                        createResource={createResource}
                    ></CreateForm>
                    <ReportTable
                        stores={resources || []}
                        loading={loading}
                        deleteResource={deleteResource}
                    ></ReportTable>
                </>
                )
                :
                    (
                        <>
                            <LoginForm handleLogin={handleLogin}></LoginForm>
                        </>
                    )}

            </div>
                <Footer></Footer>
        </div>
    </>
    )
}
import {useAuth} from "@/contexts/auth";


export default function Header() {

    const { user, logout } = useAuth()

    return (
        <header className='bg-green-600 grid grid-cols-6'>
            <h1 className='col-start-1 col-end-3 text-5xl text-black font-medium p-5'>Cookie Stand Admin</h1>
            {user ?
                <>
                    <button className='col-end-7 col-span-2 rounded-md bg-green-200 h-10 w-1/4 m-10'
                        onClick={logout}>Logout</button>
                </>
                    :
                <>
                    <button className='hidden'></button>
                </>
            }
        </header>
    )
}

// @ts-ignore
export default function LoginForm({ handleLogin }) {

    return (
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

                    <button className='bg-[#15B880] rounded-md w-11/12 h-10 mb-5'>SIGN IN</button>
                </form>
             </div>
        </>
    )
}
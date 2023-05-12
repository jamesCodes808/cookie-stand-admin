import { hours } from '@/data';
import { useState } from 'react';
import ReportTable from "@/components/ReportTable";

// @ts-ignore
export default function CreateForm(){

    return (
    <>
        <div className='text-center'>
            <form className='bg-green-300 m-20 py-3 rounded-md'>
                <div>
                    <text className='text-3xl p-2'>Create Cookie Stand</text>
                </div>
                <br/>

                <label htmlFor='location' className='w-1/12 pr-3 font-medium'>Location</label>
                <input id='location' type='text' className='w-10/12' />

                <div className='grid grid-cols-4 gap-1 m-10'>

                    <div className='bg-green-200'>
                        <label htmlFor='min_cust' className='font-medium'>Minimum Customers per Hour</label>
                        <input id='min_cust' type='number' className='w-3/4' />
                    </div>

                    <div className='bg-green-200'>
                        <label htmlFor='max_cust' className='font-medium'>Maximum Customers per Hour</label>
                        <input id='max_cust' type='number' className='w-3/4' />
                    </div>

                    <div className='bg-green-200'>
                        <label htmlFor='avg_cookies' className='font-medium'>Average Cookies per Sale</label>
                        <input id='avg_cookies' type='number' className='w-3/4' />
                    </div>

                    <div>
                        <button type='submit' className='rounded-md bg-green-600 h-20 w-3/4'>Create</button>
                    </div>

                </div>
            </form>
        </div>
    </>
    )
}
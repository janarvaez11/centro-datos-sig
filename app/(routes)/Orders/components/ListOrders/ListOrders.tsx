import {redirect} from 'next/navigation'
import {auth} from '@clerk/nextjs'
import { db } from '@/lib/db'
import { DataTable } from './data-table'
import { columns } from '@/app/(routes)/components/CustomersTable'



export async function ListOrders(){

    const{userId} = auth()


    if(!userId){
        return redirect("/")
    }

    const orders = await db.order.findMany({
        where:{
            userId,
        },
        orderBy:{
            createdAt: "desc"
        }

    })



    return(

        <DataTable columns={columns} data={orders}/>
    )
}
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Pencil } from 'lucide-react'
import { Order } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import Image from "next/image"


export const columns: ColumnDef<Order>[] = [
    {
<<<<<<< HEAD
        accessorKey: "profile Image",
        header: "Profile Image",
=======
        accessorKey: "profileImage",
        header: "Imagen",
>>>>>>> cbe7eb7130fd6a196709b947e4b7799ba8bf236d
        cell: ({ row }) => {
            const image = row.getValue("profileImage")
            return (
                <div className="px-3">
                    <Image src={typeof image === "string" ? image : "/images/order-icon.png"}
                        width={40} height={40} alt="Image" className="h-auto w-auto" />
                </div>
            )
        }
    },
    {
<<<<<<< HEAD
        accessorKey: "name",
=======
        accessorKey: "order",
>>>>>>> cbe7eb7130fd6a196709b947e4b7799ba8bf236d
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Orden
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
<<<<<<< HEAD
    {
        accessorKey: "order",
        header: "Order",
    },
=======

>>>>>>> cbe7eb7130fd6a196709b947e4b7799ba8bf236d
    {
        accessorKey: "estado",
        header: "Estado",
    },
    {
        accessorKey: "tipoInspeccion",
<<<<<<< HEAD
        header: "tipoInspeccion",
    },
    {
        accessorKey: "fechaProgramada",
        header: "fechaProgramada",
    },
    {
        accessorKey: "procesoProduccion",
        header: "procesoProduccion",
    },
    {
        accessorKey: "especificacionProceso",
        header: "especificacionProceso",
    },
    {
=======
        header: "Tipo de Inspeccion",
    },
    {
        accessorKey: "fechaProgramada",
        header: "Fecha Programada",
    },
    {
        accessorKey: "procesoProduccion",
        header: "Proceso de Produccion",
    },
    {
        accessorKey: "especificacionProceso",
        header: "Especificacion de Proceso",
    },
    {
        accessorKey: "responsableCT",
        header: "Responsable Centro Trabajo",
    },
    {
        accessorKey: "responsableInspeccion",
        header: "Responsable de Inspección",
    },
    {
        accessorKey: "lote",
        header: "Lote",
    },
    {
        accessorKey: "cliente",
        header: "Cliente",
    },
    {
        accessorKey: "fig",
        header: "Fig",
    },
    {
        accessorKey: "proyecto",
        header: "Proyecto",
    },
    {
        accessorKey: "area",
        header: "Area",
    },

    {
>>>>>>> cbe7eb7130fd6a196709b947e4b7799ba8bf236d
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const { id } = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="ghost" className="w-8 h-4 p-0">
                            <span className="sr-only">
                                Open Menu
                            </span>
                            <MoreHorizontal className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">

<<<<<<< HEAD
                        <Link href={'/order/${id}'}>
=======
                        <Link href={`/Orders/${id}`}>
>>>>>>> cbe7eb7130fd6a196709b947e4b7799ba8bf236d
                            <DropdownMenuItem>
                                <Pencil className="w-4 h-4" mr-2 />
                                Editar
                            </DropdownMenuItem>
                        </Link>

                    </DropdownMenuContent>

                </DropdownMenu>
            )

        }

    },

]
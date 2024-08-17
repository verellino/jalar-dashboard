import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/server'
import { getAllItems } from '@/queries/get-all-items'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const data = [
    {
      "id": 1,
      "user_id": 123,
      "process": "pending",
      "payment_status": "completed",
      "paid_amount": 29.99,
      "order_by": "2023-12-25",
      "deadline": "2024-01-05",
      "customer_name": "John Doe",
      "customer_mail": "johndoe@example.com",
      "customer_phone": "123-456-7890",
      "customer_address": "123 Main St, City, State, ZIP"
    },
    {
      "id": 2,
      "user_id": 456,
      "process": "in_progress",
      "payment_status": "pending",
      "paid_amount": 0,
      "order_by": "2024-01-10",
      "deadline": "2024-01-15",
      "customer_name": "Jane Smith",
      "customer_mail": "janesmith@example.com",
      "customer_phone": "987-654-3210",
      "customer_address": "456 Elm St, City, State, ZIP"
    },
  ]
export default async function OrderPage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
//   const { data: items } = await supabase.from('item').select()
  
  if (data){
    return (
      <>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-8 md:p-0">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          {/* <BreadCrumb items={breadcrumbItems} /> */}
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Link href="/dashboard/inventory/create">
                  <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Create Item
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Orders</CardTitle>
                  <CardDescription>
                    Manage your orders and edit their details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Process</TableHead>
                        <TableHead>
                          Order Date
                        </TableHead>
                        <TableHead>
                          Order Due
                        </TableHead>
                        <TableHead>
                          Payment Status
                        </TableHead>
                        <TableHead>
                          Paid Amount
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data?.map((item: any) => (
                        <TableRow
                          key={item.id}
                        >
                          <TableCell className="font-medium">
                            <Link href={`/dashboard/inventory/${item.id}`}>
                              <h3 className='text-base'>{item.customer_name}</h3>
                              <p className='text-xs text-gray-400'>
                                {item.customer_phone}
                              </p>
                            </Link>
                          </TableCell>
                          <TableCell>
                            {item.process}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {item.order_by}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {item.deadline}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                          <Badge variant="secondary">{item.payment_status}</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Rp.{item.paid_amount}
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    orders
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </>
    )
  }
  else {
    return (
      <main className="flex flex-col gap-2 lg:gap-2 min-h-[90vh] w-full">
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no items
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Items will show when you insert data to the database
            </p>
            <Button><Link href="/dashboard/inventory/create">Create Item</Link></Button>
          </div>
        </div>
      </main>
    )
  }
}

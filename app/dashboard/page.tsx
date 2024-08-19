import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { BarChartComponent } from "./_components/bar-chart";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BarChartBetter } from "./_components/bar-chart-better";
import AreaChartComponent from "./_components/area-chart";
import { Progress } from "@/components/ui/progress";
import { DollarSign } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const user = await currentUser();
  if (!user) return <div>Not signed in</div>;
  return (
    <div className="flex flex-col justify-center items-start px-4 pt-4 gap-4">
      <div className="pb-2">
        <h1 className="text-4xl font-bold">Welcome back, {user?.firstName}</h1>
        <p>Here is a brief summary of your business!</p>
      </div>
      <div className="w-full flex gap-2">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp. 1,329,000</div>
            <p className="text-xs text-muted-foreground">+25% from last week</p>
          </CardContent>
          <CardFooter>
            <Progress value={25} aria-label="25% increase" />
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp. 5,420,000</div>
            <p className="text-xs text-muted-foreground">+40% from last week</p>
          </CardContent>
          <CardFooter>
            <Progress value={40} aria-label="40% increase" />
          </CardFooter>
        </Card>
      </div>
      <div className="w-full flex gap-2">
        <AreaChartComponent />
        <BarChartBetter />
      </div>
      <div className="w-full grid sm:grid-cols-1 gap-3">
        <Card className="">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Your Orders</CardTitle>
              <CardDescription>Recent orders</CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/dashboard/projects">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div style={{ maxHeight: "320px", overflowY: "auto" }}>
              {" "}
              {/* Adjust maxHeight according to your design */}
              <main className="flex flex-col gap-2 lg:gap-2 h-[300px] w-full">
                <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-xl font-bold tracking-tight">
                      You have no orders
                    </h1>
                    <p className="text-sm text-muted-foreground mb-3">
                      Orders will show after the database is connected
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { ReactNode } from "react";
import DashboardSideBar from "./_components/dashboard-side-bar";
import DashboardTopNav from "./_components/dashbord-top-nav";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <DashboardSideBar />
      <DashboardTopNav>
        <main className="flex flex-col gap-4 p-4 lg:gap-6">{children}</main>
        <Toaster richColors />
      </DashboardTopNav>
    </div>
  );
}

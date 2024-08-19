"use client";

import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import { Banknote, Folder, HomeIcon, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTasks } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/public/jalar-logo-w.png";
import { Badge } from "@/components/ui/badge";

export default function DashboardSideBar() {
  const pathname = usePathname();

  return (
    <div className="lg:block hidden border-r h-full">
      <div className="flex h-full max-h-screen flex-col gap-2 ">
        <div className="flex h-[80px] items-center justify-between border-b px-4 w-full">
          <Link
            className="flex items-center justify-center gap-2 font-semibold ml-1"
            href="/"
          >
            <Image
              src={Logo}
              alt="Jalar"
              height={40}
              className="w-full h-full"
            />
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2 ">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                {
                  "flex items-center gap-2 rounded-lg bg-orange-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-orange-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard",
                }
              )}
              href="/dashboard"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                <HomeIcon className="h-3 w-3" />
              </div>
              Home
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                {
                  "flex items-center gap-2 rounded-lg bg-orange-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-orange-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/projects",
                }
              )}
              href="/dashboard/projects"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                <Folder className="h-3 w-3" />
              </div>
              Projects
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                {
                  "flex items-center gap-2 rounded-lg bg-orange-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-orange-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/orders",
                }
              )}
              href="/dashboard/orders"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                <Folder className="h-3 w-3" />
              </div>
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                {
                  "flex items-center gap-2 rounded-lg bg-orange-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-orange-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/inventory",
                }
              )}
              href="/dashboard/inventory"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                <Folder className="h-3 w-3" />
              </div>
              Inventory
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                {
                  "flex items-center gap-2 rounded-lg bg-orange-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-orange-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/finance",
                }
              )}
              href="/dashboard/finance"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                <Banknote className="h-3 w-3" />
              </div>
              Finance
            </Link>
            <Separator className="my-3" />
            <Link
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                {
                  "flex items-center gap-2 rounded-lg bg-orange-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-orange-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/settings",
                }
              )}
              href="/dashboard/settings"
              id="onboarding"
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                <Settings className="h-3 w-3" />
              </div>
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

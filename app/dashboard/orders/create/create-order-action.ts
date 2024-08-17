"use server"


import { createClient } from "@/utils/supabase/server";
import { Database } from "@/utils/database.types";
import { cookies } from 'next/headers';
import { z } from 'zod';
import { auth } from "@clerk/nextjs/server";
import { toast } from "sonner";

const CreateProductForm = z.object({
  name: z.string().min(3, {
      message: "Product name is required",
  }),
  desc: z.string().min(3, {
    message: "Product description is required",
  }),
  stock: z.preprocess(
      (args) => (args === "" ? undefined : args),
    z.coerce
      .number({ invalid_type_error: "Price must be a number" })
      .positive("Stock must be positive")
  ),
  price: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({ invalid_type_error: "Price must be a number" })
      .positive("Price must be positive")
    ),
});

export async function addProduct(data: z.infer<typeof CreateProductForm>) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { userId } = auth();

    if (!userId) {
        return "You must be signed in";
    }
    
    
    console.log(data);
      const { data: insertedData, error } = await supabase
      .from('item')
      .insert(data)
      .select();
    
      if (error) {
        console.error("Error inserting product:", error);
      } else {
        toast.success("Successfully added product!");
        console.log("Product inserted successfully:", insertedData);
    }
  };

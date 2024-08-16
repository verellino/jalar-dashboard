"use server";

import { createClient } from "@/utils/supabase/server";
import { auth } from "@clerk/nextjs/server";
import { cookies } from "next/headers";

export async function insertItem(data: z.infer<typeof CreateProductForm>) {
  const { userId } = auth();

  if (!userId) {
    return "You must be signed in";
  }
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)    
    let { data: insertedData, error } = await supabase
        .from('item')
        .insert(data)
        .select('*')
    
    return item;
  } catch (error) {
    return {
      error,
    };
  }
}

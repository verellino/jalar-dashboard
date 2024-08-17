"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function getAllItems() {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)    
    let { data: item, error } = await supabase
    .from('item')
    .select('*')
    .eq('id', params.id)
    
    return item;
  } catch (error) {
    return {
      error,
    };
  }
}

import React, { useState, useRef, useEffect } from "react";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export const revalidate = 0;

export default async function Item({
  params: { id },
}: {
  params: { id: string };
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: item } = await supabase
    .from("item")
    .select()
    .match({ id })
    .single();

  if (!item) {
    notFound();
  }

  return <pre>{JSON.stringify(item, null, 2)}</pre>;
}

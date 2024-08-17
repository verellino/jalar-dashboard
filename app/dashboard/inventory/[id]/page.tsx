import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

const cookieStore = cookies();
const supabase = createClient(cookieStore);
export const revalidate = 0

export async function generateStaticParams() {
  const { data: items } = await supabase.from('item').select('id')

  return items?.map(({ id }) => ({
    id,
  }))
}

export default async function Item({ params: { id } }: { params: { id: string } }) {
  const { data: item } = await supabase.from('item').select().match({ id }).single()

  if (!item) {
    notFound()
  }

  return <pre>{JSON.stringify(item, null, 2)}</pre>
}
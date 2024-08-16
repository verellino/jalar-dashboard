import { TypedSupabaseClient } from '@/utils/supabase/types'

export function getAllItems(client: TypedSupabaseClient) {
  return client
    .from('item')
    .select()
    .throwOnError()
    .single()
}
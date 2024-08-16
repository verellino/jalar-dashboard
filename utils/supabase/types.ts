import { SupabaseClient } from '@supabase/supabase-js'
// import type { Database } from '@/utils/database.types'

export type TypedSupabaseClient = SupabaseClient<Database>
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      brand: {
        Row: {
          desc: string | null
          id: number
          name: string
        }
        Insert: {
          desc?: string | null
          id?: number
          name: string
        }
        Update: {
          desc?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      category: {
        Row: {
          desc: string | null
          id: number
          name: string
        }
        Insert: {
          desc?: string | null
          id?: number
          name: string
        }
        Update: {
          desc?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          address: string | null
          email: string
          id: number
          name: string
          phone: string
          user_id: number
        }
        Insert: {
          address?: string | null
          email: string
          id?: number
          name: string
          phone: string
          user_id: number
        }
        Update: {
          address?: string | null
          email?: string
          id?: number
          name?: string
          phone?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "customers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      item: {
        Row: {
          brand_id: number | null
          category_id: number | null
          desc: string | null
          id: number
          name: string
          price: number
          product_type: string
          stock: string
          variant_id: number | null
        }
        Insert: {
          brand_id?: number | null
          category_id?: number | null
          desc?: string | null
          id?: number
          name: string
          price: number
          product_type: string
          stock: string
          variant_id?: number | null
        }
        Update: {
          brand_id?: number | null
          category_id?: number | null
          desc?: string | null
          id?: number
          name?: string
          price?: number
          product_type?: string
          stock?: string
          variant_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "item_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brand"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "item_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "item_variant_id_fkey"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "variant"
            referencedColumns: ["id"]
          },
        ]
      }
      order_detail: {
        Row: {
          id: number
          item_id: number
          order_id: number
          price: number
          quantity: number
          variant_id: number | null
        }
        Insert: {
          id?: number
          item_id: number
          order_id: number
          price: number
          quantity: number
          variant_id?: number | null
        }
        Update: {
          id?: number
          item_id?: number
          order_id?: number
          price?: number
          quantity?: number
          variant_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "order_detail_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "item"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_detail_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_detail_variant_id_fkey"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "variant"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          customer_address: string | null
          customer_mail: string
          customer_name: string
          customer_phone: string
          deadline: string | null
          id: number
          order_by: string
          paid_amount: number
          payment_status: string
          process: string
          updated_at: string
          user_id: number
        }
        Insert: {
          created_at?: string
          customer_address?: string | null
          customer_mail: string
          customer_name: string
          customer_phone: string
          deadline?: string | null
          id?: number
          order_by: string
          paid_amount: number
          payment_status: string
          process: string
          updated_at?: string
          user_id: number
        }
        Update: {
          created_at?: string
          customer_address?: string | null
          customer_mail?: string
          customer_name?: string
          customer_phone?: string
          deadline?: string | null
          id?: number
          order_by?: string
          paid_amount?: number
          payment_status?: string
          process?: string
          updated_at?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          id: number
          role: string
          username: string
        }
        Insert: {
          created_at?: string
          id?: number
          role: string
          username: string
        }
        Update: {
          created_at?: string
          id?: number
          role?: string
          username?: string
        }
        Relationships: []
      }
      variant: {
        Row: {
          desc: string | null
          id: number
          name: string
          price: number
          stock: string
        }
        Insert: {
          desc?: string | null
          id?: number
          name: string
          price: number
          stock: string
        }
        Update: {
          desc?: string | null
          id?: number
          name?: string
          price?: number
          stock?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
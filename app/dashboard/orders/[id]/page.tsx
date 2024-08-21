"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function EditOrderPage({ params }: { params: { id: string } }) {
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchOrder() {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) {
        console.error("Error fetching order:", error);
      } else {
        setOrder(data);
        setStatus(data.status);
      }
    }

    fetchOrder();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("orders")
      .update({ status })
      .eq("id", params.id);

    if (error) {
      console.error("Error updating order:", error);
    } else {
      router.push("/dashboard/orders");
    }
  };

  if (!order) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit Order {params.id}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="received">Received</option>
            <option value="in_production">In Production</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Order
        </button>
      </form>
    </div>
  );
}

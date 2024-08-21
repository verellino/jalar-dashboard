import { Badge } from "@/components/ui/badge";

type OrderStatus =
  | "Received"
  | "Production"
  | "Shipment"
  | "Delivered"
  | "Lead";

interface OrderStatusBadgeProps {
  status: OrderStatus;
}

export default function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  const variantMap: Record<
    OrderStatus,
    "default" | "success" | "secondary" | "destructive" | "outline"
  > = {
    Received: "outline",
    Lead: "outline",
    Production: "secondary",
    Shipment: "default",
    Delivered: "success",
  };

  return <Badge variant={variantMap[status]}>{status.replace("_", " ")}</Badge>;
}

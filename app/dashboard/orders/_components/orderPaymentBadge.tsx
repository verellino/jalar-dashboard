import { Badge } from "@/components/ui/badge";

type OrderPayment = "Completed" | "Downpayment" | "Pending" | "None";

interface OrderPaymentBadgeProps {
  status: OrderPayment;
}

export default function OrderPaymentBadge({ status }: OrderPaymentBadgeProps) {
  const variantMap: Record<
    OrderPayment,
    "default" | "success" | "secondary" | "destructive" | "outline"
  > = {
    None: "destructive",
    Pending: "secondary",
    Completed: "success",
    Downpayment: "default",
  };

  return <Badge variant={variantMap[status]}>{status.replace("_", " ")}</Badge>;
}

"use client";
import { NumericFormat } from "react-number-format";

interface PaymentAmount {
  amount: number;
}

export default function RupiahConverter({ amount }: PaymentAmount) {
  return (
    <NumericFormat
      value={amount}
      displayType={"text"}
      thousandSeparator=","
      prefix={"Rp "}
    />
  );
}

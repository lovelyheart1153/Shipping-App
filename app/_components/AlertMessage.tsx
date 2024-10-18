"use client";

import { cn } from "@/lib/utils";

interface Props {
  type: "error" | "success";
  message: string;
}

const AlertMessage = ({ message, type }: Props) => {
  return (
    <div
      className={cn(
        "text-sm px-4 py-2 rounded",
        type === "success" && "bg-green-100 text-green-600",
        type === "error" && "bg-red-100 text-red-500"
      )}
    >
      {message}
    </div>
  );
};

export default AlertMessage;

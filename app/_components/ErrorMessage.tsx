"use client";

import { CircleAlert } from "lucide-react";

interface Props {
  children?: string;
}

const ErrorMessage = ({ children }: Props) => {
  if (!children) return null;

  return (
    <div className="flex gap-2 items-center text-red-500">
      <CircleAlert className="size-4" /> <p>{children}</p>
    </div>
  );
};

export default ErrorMessage;

"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
  href: string;
}

const BackButton = ({ href }: Props) => {
  const router = useRouter();

  return (
    <div className="absolute top-4 left-4">
      <Button onClick={() => router.push(href)} variant="outline">
        Back
      </Button>
    </div>
  );
};

export default BackButton;

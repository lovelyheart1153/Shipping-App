import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="w-full h-[70vh] grid place-items-center gap-4">
      <div className="flex gap-3 items-center flex-col">
        <h2 className="text-red-500 text-2xl md:text-4xl">
          Invalid Tracking Number
        </h2>
        <Button asChild>
          <Link href="/">Back to homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;

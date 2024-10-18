"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

const TrackSearch = () => {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = ref.current?.value;
    if (!value) return;

    router.push(`/tracking/${value}`);
    router.refresh();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="border bg-neutral-600/50 border-neutral-600 w-full rounded-[50px] md:w-[500px] flex focus:ring focus:right-2 focus:ring-sky-300 focus:ring-offset-2"
    >
      <input
        ref={ref}
        type="text"
        className="bg-transparent outline-0 border-0 flex-1 px-2 sm:px-6"
      />
      <button
        type="submit"
        className="btn bg-sky-600 text-neutral-100 transition-all rounded-3xl m-1 hover:bg-sky-500"
      >
        Track
      </button>
    </form>
  );
};

export default TrackSearch;

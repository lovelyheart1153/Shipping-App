import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type DatePickerProps = {
  defaultValue?: Date;
  onChange?: (date: Date | undefined) => void;
  placeHolder?: string;
};

export default function DatePicker({
  defaultValue,
  onChange,
  placeHolder = "",
}: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(defaultValue);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeHolder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            setDate(date);
            onChange?.(date);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

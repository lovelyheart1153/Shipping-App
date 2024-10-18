"use client";

import ErrorMessage from "@/app/_components/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePicker from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import { RouteFormData, RouteSchema } from "@/schemas/route";
import { Route } from "@prisma/client";
import { createRoute, updateRoute } from "@/actions/routes";
import { Dispatch, SetStateAction, useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Props {
  route?: Route;
  shippmentId: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const RouteForm = ({ route, shippmentId, setOpen }: Props) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  // const [error, setError] = useState("");

  const update = route?.id;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RouteFormData>({
    resolver: zodResolver(RouteSchema),
    defaultValues: route
      ? {
          arrivalDate: route.arrivalDate || undefined,
          expectedArrivalDate: route.expectedArrivalDate,
          location: route.location,
          message: route.message || undefined,
          status: route.status,
        }
      : undefined,
  });

  const onSubmit = async (values: RouteFormData) => {
    try {
      setLoading(true);
      if (update) {
        await updateRoute(values, route.id);
        if (setOpen) setOpen(false);
      } else {
        await createRoute(values, shippmentId);
      }
      setLoading(false);
    } catch (e) {
      const error = (e as Error).message;
      toast({
        variant: "destructive",
        title: "Error",
        description: error,
      });
      if (setOpen) setOpen(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit((values) => onSubmit(values))}
      className="space-y-4 max-w-[500px] w-full"
    >
      <div className="">
        <Label>Location</Label>
        <Input {...register("location")} placeholder="eg. Port of Bombei" />
        <ErrorMessage>{errors.location?.message}</ErrorMessage>
      </div>

      <div className="">
        <Label>Status</Label>
        <Select
          onValueChange={(value: RouteFormData["status"]) =>
            setValue("status", value)
          }
          defaultValue={route ? route.status : undefined}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="IN_TRANSIT">In Transit</SelectItem>
            <SelectItem value="ARRIVED">Arrived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col space-y-1">
        <Label>Expected Arrival Date</Label>
        <DatePicker
          onChange={(date) => {
            if (date) setValue("expectedArrivalDate", date);
          }}
          placeHolder="Estimated Delivery Date"
          defaultValue={route ? route?.expectedArrivalDate : undefined}
        />
        <ErrorMessage>{errors.expectedArrivalDate?.message}</ErrorMessage>
      </div>

      <div className="flex flex-col space-y-1">
        <Label>Arrival Date</Label>
        <DatePicker
          onChange={(date) => {
            if (date) setValue("arrivalDate", date);
          }}
          placeHolder="Arrival Date"
          defaultValue={route ? route.arrivalDate! : undefined}
        />
        <ErrorMessage>{errors.arrivalDate?.message}</ErrorMessage>
      </div>

      <div className="">
        <Label>Message</Label>
        <Input
          {...register("message")}
          placeholder="eg. At customs check point"
        />
        <ErrorMessage>{errors.message?.message}</ErrorMessage>
      </div>

      <div className="flex gap-4">
        {update && setOpen && (
          <Button
            onClick={() => setOpen(false)}
            type="button"
            variant="outline"
          >
            Cancel
          </Button>
        )}
        <Button type="submit" size="lg" className="w-full">
          {loading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : update ? (
            "Update Route"
          ) : (
            "Create Route"
          )}
        </Button>
      </div>
    </form>
  );
};

export default RouteForm;

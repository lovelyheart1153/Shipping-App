"use client";

import ErrorMessage from "@/app/_components/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShippmentFormData, ShippmentSchema } from "@/schemas/shippment";
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
import { Shippment } from "@prisma/client";
import { createShippment, updateShippment } from "@/actions/shippment";
import { useState } from "react";
import AlertMessage from "@/app/_components/AlertMessage";
import { Loader2 } from "lucide-react";

// const defaultValues = {
//   content: "",
//   deliveryMode: "BY_SHIP",
//   destination: "",
//   estimatedDeliveryDate: new Date(),
//   origin: "",
//   receiversAddress: "",
//   receiversName: "",
//   sendersAddress: "",
//   sendersName: "",
// };

interface Props {
  shippment?: Shippment;
}

const ShippmentForm = ({ shippment }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update = shippment?.id;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ShippmentFormData>({
    resolver: zodResolver(ShippmentSchema),
    defaultValues: shippment
      ? {
          content: shippment.content || "",
          deliveryMode: shippment.deliveryMode,
          destination: shippment.destination,
          estimatedDeliveryDate: shippment.estimatedDeliveryDate,
          origin: shippment.origin,
          receiversAddress: shippment.receiversAddress,
          receiversName: shippment.receiversName,
          sendersAddress: shippment.sendersAddress,
          sendersName: shippment.sendersName,
          status: shippment.status,
        }
      : undefined,
  });

  const onSubmit = async (values: ShippmentFormData) => {
    try {
      setLoading(true);
      if (update) {
        await updateShippment(values, shippment.id);
      } else {
        await createShippment(values);
      }
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit((values) => onSubmit(values))}
      className="space-y-4 max-w-[500px] w-full"
    >
      {error && <AlertMessage type="error" message={error} />}
      <div className="">
        <Label>Senders Name</Label>
        <Input {...register("sendersName")} placeholder="eg. Karl Jeff" />
        <ErrorMessage>{errors.sendersName?.message}</ErrorMessage>
      </div>
      <div className="">
        <Label>Receivers Name</Label>
        <Input {...register("receiversName")} placeholder="eg. John Doe" />
        <ErrorMessage>{errors.receiversName?.message}</ErrorMessage>
      </div>
      <div className="">
        <Label>Senders Address</Label>
        <Input
          {...register("sendersAddress")}
          placeholder="eg. 23 Abafun crescent"
        />
        <ErrorMessage>{errors.sendersAddress?.message}</ErrorMessage>
      </div>
      <div className="">
        <Label>Receivers Address</Label>
        <Input
          {...register("receiversAddress")}
          placeholder="eg. 54 Lashibi street"
        />
        <ErrorMessage>{errors.receiversAddress?.message}</ErrorMessage>
      </div>
      <div className="">
        <Label>County of Origin</Label>
        <Input {...register("origin")} placeholder="eg. Malawi" />
        <ErrorMessage>{errors.origin?.message}</ErrorMessage>
      </div>
      <div className="">
        <Label>County of Destination</Label>
        <Input {...register("destination")} placeholder="eg. United Kingdom" />
        <ErrorMessage>{errors.destination?.message}</ErrorMessage>
      </div>
      <div className="">
        <Label>Content of Shippment</Label>
        <Input {...register("content")} placeholder="eg. Fibre optic cables" />
        <ErrorMessage>{errors.content?.message}</ErrorMessage>
      </div>
      <div className="">
        <Label>Mode of Delivery</Label>
        <Select
          onValueChange={(value: ShippmentFormData["deliveryMode"]) =>
            setValue("deliveryMode", value)
          }
          defaultValue={shippment ? shippment.deliveryMode : undefined}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Mode of delivery" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="BY_SHIP">By Ship</SelectItem>
            <SelectItem value="BY_AIR">By Air</SelectItem>
          </SelectContent>
        </Select>
        <ErrorMessage>{errors.deliveryMode?.message}</ErrorMessage>
      </div>
      <div className="flex flex-col space-y-1">
        <Label>Estimated Delivery Date</Label>
        <DatePicker
          onChange={(date) => {
            if (date) setValue("estimatedDeliveryDate", date);
          }}
          placeHolder="Estimated Delivery Date"
          defaultValue={
            shippment ? shippment?.estimatedDeliveryDate : undefined
          }
        />
        <ErrorMessage>{errors.estimatedDeliveryDate?.message}</ErrorMessage>
      </div>

      <div className="">
        <Label>Shippment Status</Label>
        <Select
          onValueChange={(value: ShippmentFormData["status"]) =>
            setValue("status", value)
          }
          defaultValue={shippment ? shippment.status : undefined}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="IN_TRANSIT">In Transit</SelectItem>
            <SelectItem value="ARRIVED">Arrived</SelectItem>
          </SelectContent>
        </Select>
        <ErrorMessage>{errors.status?.message}</ErrorMessage>
      </div>

      <Button size="lg" className="w-full">
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : update ? (
          "Update Shippment"
        ) : (
          "Create Shippment"
        )}
      </Button>
    </form>
  );
};

export default ShippmentForm;

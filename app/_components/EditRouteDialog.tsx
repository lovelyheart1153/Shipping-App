"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Route } from "@prisma/client";
import RouteForm from "../(auth)/route/RouteForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Props {
  route: Route;
}

const EditRouteDialog = ({ route }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button>Edit</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Update Route</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
          <div className="">
            <RouteForm
              shippmentId={route.shippmentId!}
              route={route}
              setOpen={setOpen}
            />
          </div>
        </AlertDialogHeader>
        {/* <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500"
            onClick={() => handleDelete()}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditRouteDialog;

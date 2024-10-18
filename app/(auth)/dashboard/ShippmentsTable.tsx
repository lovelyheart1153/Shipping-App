"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Shippment } from "@prisma/client";
import Link from "next/link";

interface Props {
  shippments: Shippment[];
}

const ShippmentsTable = ({ shippments }: Props) => {
  return (
    <div className="max-w-[1140px] w-full p-2">
      <Table className=" border border-neutral-200">
        <TableHeader>
          <TableRow>
            <TableHead className="">Tracking Number</TableHead>
            <TableHead>Origin</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Estimated Delivery Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shippments.map((shippment) => (
            <TableRow key={shippment.id}>
              <TableCell>
                <Link href={`/dashboard/shippment/${shippment.id}`}>
                  {shippment.trackingNumber}
                </Link>
              </TableCell>
              <TableCell>{shippment.origin}</TableCell>
              <TableCell>{shippment.destination}</TableCell>
              <TableCell>
                {shippment.estimatedDeliveryDate.toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ShippmentsTable;

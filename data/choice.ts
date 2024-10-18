import {
  Banknote,
  LoaderPinwheel,
  LucideIcon,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { ScanEye } from "lucide-react";

export interface Choice {
  title: string;
  description: string;
  icon: LucideIcon;
}

const choices: Choice[] = [
  {
    title: "Easy Tracking",
    description:
      "We provide easy tracking with detailed information to help you monitor the progress of your shippment.",
    icon: ScanEye,
  },
  {
    title: "Free Tax on US Shipping",
    description:
      "Ship your goods with us and avoid any extra costs from sales taxes when using our USA address.",
    icon: LoaderPinwheel,
  },
  {
    title: "Speed and Safety",
    description:
      "We are fast, reliable and safe. We ensure that your shippment is delivered on time and in a safe manner.",
    icon: ShieldCheck,
  },
  {
    title: "Cost Effective",
    description:
      "Our rates are competitive and transparent. We provide the best prices in the market to meet your affordabilty",
    icon: Banknote,
  },
  {
    title: "Stress Free",
    description:
      "We handle customs clearance and all applicable taxes for you. Just ship and worry not. We got your back",
    icon: LoaderPinwheel,
  },
  {
    title: "Destination Delivery",
    description:
      "We deliver to your door, business and residence. Just provide us with the destination and we have covered",
    icon: Truck,
  },
];

export default choices;

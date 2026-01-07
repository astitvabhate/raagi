import { IconType } from "react-icons";
import { FiBox, FiCreditCard, FiRotateCcw, FiHeadphones } from "react-icons/fi";

export const features: {
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    title: "Free Shipping",
    description: "You will love at great low prices",
    icon: FiBox,
  },
  {
    title: "Flexible Payment",
    description: "Pay with multiple credit cards",
    icon: FiCreditCard,
  },
  {
    title: "7 Day Returns",
    description: "Within 7 days for an exchange",
    icon: FiRotateCcw,
  },
  {
    title: "Premium Support",
    description: "Outstanding premium support",
    icon: FiHeadphones,
  },
];

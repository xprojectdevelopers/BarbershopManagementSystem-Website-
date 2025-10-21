import React from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { At, Phone } from "phosphor-react";
import SubscribeDialog from "./SubscribeDialog";
import QuickMessageDialog from "./QuickMessage";

export default function ContactSheet() {
  return (
    <Sheet>
      {/* Ito yung lalabas sa Navbar as trigger */}
      <SheetTrigger className="hover:border-b border-black transition cursor-pointer">
        Contact Us
      </SheetTrigger>

      {/* Ito yung content ng Sheet */}
      <SheetContent
        side="left"
        className="!max-w-none !w-[340px] sm:!w-[500px] lg:!w-[730px] py-15 sm:py-17 lg:py-20 px-4 lg:px-20"
      >
        <SheetHeader style={{ fontFamily: "satoshi-medium" }}>
          <SheetTitle className={"text-sm lg:text-base tracking-[0.4px] mb-10"}>
            Contact Us
          </SheetTitle>
          <SheetDescription className={"text-sm lg:text-base tracking-[0.4px]"}>
            From the shop to your screen, we're always within reach.
          </SheetDescription>
        </SheetHeader>

        <div
          className="flex flex-col gap-4 tracking-[0.4px] pl-4 text-sm lg:text-base"
          style={{ fontFamily: "satoshi-bold" }}
        >
          <div className="flex items-center gap-2">
            <At size={20} weight="bold" />
            <span>molavestreetsbarbers@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} weight="bold" />
            <span>09496209911</span>
          </div>
        </div>

        <hr className="my-4 mx-3 border-black" />

        <div className="flex flex-col gap-2 px-4 ">
          <Link
          to="/FaqPage"
          className="text-sm lg:text-base tracking-[0.4px] underline"
          style={{ fontFamily: "satoshi-medium" }}
        >
          FAQs
        </Link>

        <QuickMessageDialog />

        <SubscribeDialog
          trigger={
            <span
              className="text-sm lg:text-base tracking-[0.4px] underline cursor-pointer"
              style={{ fontFamily: "satoshi-medium" }}
            >
              Subscribe for Exclusive Email
            </span>
          }
        />
        </div>

        <div className="mt-25 lg:mt-43">
          <h6
            className="text-xl lg:text-2xl text-center uppercase mb-4"
            style={{ fontFamily: "oswald" }}
          >
            Molave Street Barbers
          </h6>
          <p
            className="text-sm lg:text-base text-center tracking-[0.4px]"
            style={{ fontFamily: "satoshi-medium" }}
          >
            Location: 112 Upper Molave Street Payatas B. 1119 Quezon City, Philippines
            <br />
            Working Hours: Monday to Sunday 10:00am to 8:00pm
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

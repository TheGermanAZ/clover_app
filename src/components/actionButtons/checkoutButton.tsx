"use client";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { deleteCart, resetMap } from "../../../server/data/action";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const CheckoutButton = (props: Props) => {
  const router = useRouter();
  const promise = new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <Button
      onClick={async () => {
        resetMap();
        toast.success("Checkout Successful", {
          action: {
            label: "Close",
            onClick: () => toast.dismiss(),
          },
        });
        await deleteCart();
        // await promise.then(() => {
        //   router.push("/");
        // });
      }}
    >
      <Link href="/">{props.children}</Link>
    </Button>
  );
};

export default CheckoutButton;

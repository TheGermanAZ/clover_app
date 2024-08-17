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
  // const router = useRouter();
  // const promise = new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <Link href="/" passHref>
      <Button
        onClick={async () => {
          resetMap();
          try {
            await deleteCart();
          } catch (error) {
            toast.error("Error deleting cart");
            console.error("Error deleting cart:", error);
            throw error;
          }
          toast.success("Checkout Successful");
          // await promise.then(() => {
          //   router.push("/");
          // });
        }}
      >
        {props.children}
      </Button>
    </Link>
  );
};

export default CheckoutButton;

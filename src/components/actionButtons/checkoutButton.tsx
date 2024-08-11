"use client";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const CheckoutButton = (props: Props) => {
  const router = useRouter();
  const promise = new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <Button
      onClick={() => {
        toast.success("Checkout Successful", {
          action: {
            label: "Close",
            onClick: () => toast.dismiss(),
          },
        });
        promise.then(() => router.push("/"));
      }}
    >
      {props.children}
    </Button>
  );
};

export default CheckoutButton;

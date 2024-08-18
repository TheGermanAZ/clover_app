"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { deleteCart, resetMap } from "../../../server/data/action";
import Link from "next/link";
import CheckoutForm from "../actionForms/CheckoutForm";

type Props = {
  children: React.ReactNode;
};

const CheckoutButton = (props: Props) => {
  // const router = useRouter();
  // const promise = new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <CheckoutForm action={deleteCart.bind(null, { status: null })}>
      <Button>{props.children}</Button>
    </CheckoutForm>
  );
};

export default CheckoutButton;

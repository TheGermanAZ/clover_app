"use client";

import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const CheckoutForm = ({ action, message, ...props }: any) => {
  const [state, formAction] = useFormState(action, { status: null });

  useEffect(() => {
    if (state.status === "success") {
      toast.success(`Checkout successful`);
    }
    if (state.status === "error") {
      toast.error(`Checkout failed`);
    }
  }, [state]);
  return <form action={formAction} {...props} />;
};

export default CheckoutForm;

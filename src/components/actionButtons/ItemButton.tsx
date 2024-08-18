"use client";
import React from "react";
import { Button } from "../ui/button";
import { addtoCart } from "../../../server/data/action";
import { toast } from "sonner";

type Props = {
  children: React.ReactNode;
  product: {
    id: number;
    title: string;
    price: string;
    description: string;
    imageRef: string;
  };
};

const ItemButton = ({ children, product }: Props) => {
  return (
    <form action={addtoCart.bind(null, product.id)}>
      <Button
        variant="outline"
        size="sm"
        onClick={async () => {
          try {
            await addtoCart(product.id);
          } catch (error: unknown) {
            if (error instanceof Error) {
              toast.error(error.message);
            }
          }
          toast.success(`Added ${product.title} to cart`);
        }}
      >
        {children}
      </Button>
    </form>
  );
};

export default ItemButton;

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
        onClick={() => toast.success(`Added ${product.title} to Cart`)}
      >
        {children}
      </Button>
    </form>
  );
};

export default ItemButton;

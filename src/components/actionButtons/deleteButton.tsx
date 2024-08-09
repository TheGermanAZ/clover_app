import React from "react";
import { Button } from "../ui/button";
import { removeFromCart } from "../../../server/data/action";

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

const DeleteButton = ({ children, product }: Props) => {
  return (
    <form action={removeFromCart.bind(null, product.id)}>
      <Button variant="ghost" size="icon">
        {children}
      </Button>
    </form>
  );
};

export default DeleteButton;

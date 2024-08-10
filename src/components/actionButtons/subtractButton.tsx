import React from "react";
import { Button } from "../ui/button";
import { removeProduct } from "../../../server/data/action";

type Props = {
  children: React.ReactNode;
  product: {
    id: number;
    title: string;
    price: string;
    description: string;
    imageRef: string;
  };
  disabled: boolean;
};

const SubtractButton = ({ children, product, disabled }: Props) => {
  return (
    <form action={removeProduct.bind(null, product.id)}>
      <Button variant="outline" size="icon" disabled={disabled}>
        {children}
      </Button>
    </form>
  );
};

export default SubtractButton;

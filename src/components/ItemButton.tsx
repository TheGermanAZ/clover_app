import React from "react";
import { Button } from "./ui/button";
import { addtoCart } from "../../server/data/action";

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
      <Button variant="outline" size="sm">
        {children}
      </Button>
    </form>
  );
};

export default ItemButton;

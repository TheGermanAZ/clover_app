import React from "react";
import { Button } from "../ui/button";
import { addProduct } from "../../../server/data/action";

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

const AddButton = ({ children, product }: Props) => {
  return (
    <form action={addProduct.bind(null, product.id)}>
      <Button variant="outline" size="icon">
        {children}
      </Button>
    </form>
  );
};

export default AddButton;

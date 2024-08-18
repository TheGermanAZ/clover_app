import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SelectCart } from "../../server/db/schema";
import Image from "next/image";
import { getCart, getProduct } from "../../server/data/queries";
import AddButton from "./actionButtons/addButton";
import Link from "next/link";
import DeleteButton from "./actionButtons/deleteButton";
import SubtractButton from "./actionButtons/subtractButton";
import CheckoutButton from "./actionButtons/checkoutButton";

export async function CartPage() {
  // const [cart, setCart] = useState<SelectCart[]>([]);

  // const updateQuantity = (id: number, quantity: number) => {
  //   setCart(
  //     cart.map((item) => (item.id === id ? { ...item, quantity } : item))
  //   );
  // };
  // const removeItem = (id: number) => {
  //   setCart(cart.filter((item) => item.id !== id));
  // };
  const cart = await getCart();
  const total = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );
  return (
    <div className="bg-background p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {cart.map(async (item) => (
          <div key={item.id} className="flex items-center gap-4">
            <Image
              src={(await getProduct(item.itemId))?.imageRef ?? ""}
              alt={(await getProduct(item.itemId))?.title ?? ""}
              width={80}
              height={80}
              className="rounded-md object-cover"
              style={{ aspectRatio: "80/80", objectFit: "cover" }}
            />
            <div className="flex-1">
              <h3 className="font-semibold">
                {(await getProduct(item.itemId))?.title ?? ""}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <SubtractButton
                  product={(await getProduct(item.itemId))!}
                  // onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  <MinusIcon className="h-4 w-4" />
                </SubtractButton>
                <span>{item.quantity}</span>
                <AddButton
                  product={(await getProduct(item.itemId))!}
                  // onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <PlusIcon className="h-4 w-4" />
                </AddButton>
              </div>
            </div>
            <div className="font-semibold">
              $
              {(
                Number((await getProduct(item.itemId))?.price) * item.quantity
              ).toFixed(2)}
            </div>
            <DeleteButton product={(await getProduct(item.itemId))!}>
              <Trash2Icon className="h-5 w-5 text-muted-foreground" />
            </DeleteButton>
          </div>
        ))}
      </div>
      <Separator className="my-4" />
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground">Total:</span>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <Link href="/">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
        <CheckoutButton>Proceed to Checkout</CheckoutButton>
      </div>
    </div>
  );
}

function MinusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function Trash2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}

"use server";
import { eq, sql } from "drizzle-orm";
import { db } from "../db";
import { cart, items } from "../db/schema";
import { revalidatePath, unstable_noStore } from "next/cache";
import { idMap } from "@/state/cartState";
import { log } from "console";

export const addtoCart = async (productId: number) => {
  unstable_noStore();
  try {
    const product = await db.query.items.findFirst({
      where: eq(items.id, productId),
    });

    if (!product) {
      throw new Error("Product not found");
    }

    console.log("putting cart item in map", idMap);

    if (idMap.has(productId)) {
      const [product] = await db
        .select()
        .from(cart)
        .where(eq(cart.itemId, productId));

      await db
        .update(cart)
        .set({ quantity: product.quantity + 1 })
        .where(eq(cart.itemId, productId));
    } else {
      idMap.set(productId, true);
      await db.insert(cart).values({
        itemId: productId,
        quantity: 1,
        price: product.price,
      });
    }
    return product;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

export const addProduct = async (productId: number) => {
  try {
    const product = await db.query.items.findFirst({
      where: eq(items.id, productId),
    });

    if (!product) {
      throw new Error("Product not found");
    }

    const [producttoAdd] = await db
      .select()
      .from(cart)
      .where(eq(cart.itemId, productId));

    await db
      .update(cart)
      .set({ quantity: producttoAdd.quantity + 1 })
      .where(eq(cart.itemId, productId));

    revalidatePath("/cart");
    return product;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

export const removeProduct = async (productId: number) => {
  try {
    const product = await db.query.items.findFirst({
      where: eq(items.id, productId),
    });

    if (!product) {
      throw new Error("Product not found");
    }

    const [producttoSubtract] = await db
      .select()
      .from(cart)
      .where(eq(cart.itemId, productId));

    await db
      .update(cart)
      .set({ quantity: producttoSubtract.quantity - 1 })
      .where(eq(cart.itemId, productId));
    revalidatePath("/cart");
    return product;
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};

// TODO: pop up the removed item
export const removeFromCart = async (productId: number) => {
  try {
    await db.delete(cart).where(eq(cart.itemId, productId));
    idMap.delete(productId);
    revalidatePath("/cart");
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};

export const deleteCart = async (state: { status: string | null }) => {
  try {
    console.log("deleting cart");
    resetMap();
    await db.delete(cart);
    revalidatePath("/cart");
    // TODO: instead of revalidating both pages make a tag and revalidate it
    revalidatePath("/");
    return { status: "success" };
  } catch (error) {
    console.error("Error deleting cart:", error);
    return { status: "error" };
  }
};

export const resetMap = () => {
  console.log("resetting map", idMap);

  idMap.clear();
  console.log("reset map", idMap);
};

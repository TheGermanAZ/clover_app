"use server";
import { eq, sql } from "drizzle-orm";
import { db } from "../db";
import { cart, items } from "../db/schema";
import { revalidatePath } from "next/cache";
import { log } from "console";

const idMap = new Map<number, boolean>();

export const addtoCart = async (productId: number) => {
  try {
    const product = await db.query.items.findFirst({
      where: eq(items.id, productId),
    });

    if (!product) {
      throw new Error("Product not found");
    }

    if (idMap.get(productId)) {
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
    revalidatePath("/cart");
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};

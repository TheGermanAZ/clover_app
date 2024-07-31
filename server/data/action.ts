"use server";
import { eq, sql } from "drizzle-orm";
import { db } from "../db";
import { cart, items } from "../db/schema";

export const addtoCart = async (productId: number) => {
  try {
    const product = await db.query.items.findFirst({
      where: eq(items.id, productId),
    });

    if (!product) {
      throw new Error("Product not found");
    }

    const productCount = db
      .$with("product_count")
      .as(
        db
          .select({ product_quantity: cart.quantity })
          .from(cart)
          .where(eq(cart.itemId, productId))
      );

    await db
      .with(productCount)
      .insert(cart)
      .values({
        itemId: productId,
        quantity: 1,
        price: product.price,
      })
      .onConflictDoUpdate({
        target: cart.itemId,
        set: {
          quantity: Number(productCount) + 1,
        },
      });
    return product;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

// TODO: pop up the removed item
export const removeFromCart = async (productId: number) => {
  try {
    const product = await db
      .delete(cart)
      .where(eq(cart.id, productId))
      .returning();
    return product;
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};

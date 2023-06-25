import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Orders } from "./Orders";
import { Products } from "./Products";

@Index("PK_ORDER_ITEMS", ["orderId", "itemId"], { unique: true })
@Entity("ORDER_ITEMS")
export class OrderItems {
  @Column("number", {
    primary: true,
    name: "ORDER_ID",
    precision: 12,
    scale: 0,
  })
  orderId: number;

  @Column("number", { primary: true, name: "ITEM_ID", precision: 12, scale: 0 })
  itemId: number;

  @Column("number", { name: "QUANTITY", precision: 8, scale: 2 })
  quantity: number;

  @Column("number", { name: "UNIT_PRICE", precision: 8, scale: 2 })
  unitPrice: number;

  @ManyToOne(() => Orders, (orders) => orders.orderItems, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ORDER_ID", referencedColumnName: "orderId" }])
  order: Orders;

  @ManyToOne(() => Products, (products) => products.orderItems, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "PRODUCT_ID", referencedColumnName: "productId" }])
  product: Products;
}

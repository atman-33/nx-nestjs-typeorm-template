import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Products } from "./Products";
import { Warehouses } from "./Warehouses";

@Index("PK_INVENTORIES", ["productId", "warehouseId"], { unique: true })
@Entity("INVENTORIES")
export class Inventories {
  @Column("number", {
    primary: true,
    name: "PRODUCT_ID",
    precision: 12,
    scale: 0,
  })
  productId: number;

  @Column("number", {
    primary: true,
    name: "WAREHOUSE_ID",
    precision: 12,
    scale: 0,
  })
  warehouseId: number;

  @Column("number", { name: "QUANTITY", precision: 8, scale: 0 })
  quantity: number;

  @ManyToOne(() => Products, (products) => products.inventories, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "PRODUCT_ID", referencedColumnName: "productId" }])
  product: Products;

  @ManyToOne(() => Warehouses, (warehouses) => warehouses.inventories, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "WAREHOUSE_ID", referencedColumnName: "warehouseId" }])
  warehouse: Warehouses;
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Inventories } from "./Inventories";
import { OrderItems } from "./OrderItems";
import { ProductCategories } from "./ProductCategories";

@Index("SYS_C008248", ["productId"], { unique: true })
@Entity("PRODUCTS")
export class Products {
  @PrimaryGeneratedColumn({ type: "number", name: "PRODUCT_ID" })
  productId: number;

  @Column("varchar2", { name: "PRODUCT_NAME", length: 255 })
  productName: string;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 2000 })
  description: string | null;

  @Column("number", {
    name: "STANDARD_COST",
    nullable: true,
    precision: 9,
    scale: 2,
  })
  standardCost: number | null;

  @Column("number", {
    name: "LIST_PRICE",
    nullable: true,
    precision: 9,
    scale: 2,
  })
  listPrice: number | null;

  @OneToMany(() => Inventories, (inventories) => inventories.product)
  inventories: Inventories[];

  @OneToMany(() => OrderItems, (orderItems) => orderItems.product)
  orderItems: OrderItems[];

  @ManyToOne(
    () => ProductCategories,
    (productCategories) => productCategories.products,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "CATEGORY_ID", referencedColumnName: "categoryId" }])
  category: ProductCategories;
}

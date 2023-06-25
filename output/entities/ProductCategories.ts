import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";

@Index("SYS_C008244", ["categoryId"], { unique: true })
@Entity("PRODUCT_CATEGORIES")
export class ProductCategories {
  @PrimaryGeneratedColumn({ type: "number", name: "CATEGORY_ID" })
  categoryId: number;

  @Column("varchar2", { name: "CATEGORY_NAME", length: 255 })
  categoryName: string;

  @OneToMany(() => Products, (products) => products.category)
  products: Products[];
}

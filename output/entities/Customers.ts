import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contacts } from "./Contacts";
import { Orders } from "./Orders";

@Index("SYS_C008252", ["customerId"], { unique: true })
@Entity("CUSTOMERS")
export class Customers {
  @PrimaryGeneratedColumn({ type: "number", name: "CUSTOMER_ID" })
  customerId: number;

  @Column("varchar2", { name: "NAME", length: 255 })
  name: string;

  @Column("varchar2", { name: "ADDRESS", nullable: true, length: 255 })
  address: string | null;

  @Column("varchar2", { name: "WEBSITE", nullable: true, length: 255 })
  website: string | null;

  @Column("number", {
    name: "CREDIT_LIMIT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  creditLimit: number | null;

  @OneToMany(() => Contacts, (contacts) => contacts.customer)
  contacts: Contacts[];

  @OneToMany(() => Orders, (orders) => orders.customer)
  orders: Orders[];
}

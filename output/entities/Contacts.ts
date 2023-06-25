import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers";

@Index("SYS_C008257", ["contactId"], { unique: true })
@Entity("CONTACTS")
export class Contacts {
  @PrimaryGeneratedColumn({ type: "number", name: "CONTACT_ID" })
  contactId: number;

  @Column("varchar2", { name: "FIRST_NAME", length: 255 })
  firstName: string;

  @Column("varchar2", { name: "LAST_NAME", length: 255 })
  lastName: string;

  @Column("varchar2", { name: "EMAIL", length: 255 })
  email: string;

  @Column("varchar2", { name: "PHONE", nullable: true, length: 20 })
  phone: string | null;

  @ManyToOne(() => Customers, (customers) => customers.contacts, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "CUSTOMER_ID", referencedColumnName: "customerId" }])
  customer: Customers;
}

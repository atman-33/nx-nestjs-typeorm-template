import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers";
import { Employees } from "./Employees";
import { OrderItems } from "./OrderItems";

@Index("SYS_C008263", ["orderId"], { unique: true })
@Entity("ORDERS")
export class Orders {
  @PrimaryGeneratedColumn({ type: "number", name: "ORDER_ID" })
  orderId: number;

  @Column("varchar2", { name: "STATUS", length: 20 })
  status: string;

  @Column("date", { name: "ORDER_DATE" })
  orderDate: Date;

  @ManyToOne(() => Customers, (customers) => customers.orders, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "CUSTOMER_ID", referencedColumnName: "customerId" }])
  customer: Customers;

  @ManyToOne(() => Employees, (employees) => employees.orders, {
    onDelete: "SET NULL",
  })
  @JoinColumn([{ name: "SALESMAN_ID", referencedColumnName: "employeeId" }])
  salesman: Employees;

  @OneToMany(() => OrderItems, (orderItems) => orderItems.order)
  orderItems: OrderItems[];
}

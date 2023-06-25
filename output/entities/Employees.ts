import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Orders } from "./Orders";

@Index("SYS_C008240", ["employeeId"], { unique: true })
@Entity("EMPLOYEES")
export class Employees {
  @PrimaryGeneratedColumn({ type: "number", name: "EMPLOYEE_ID" })
  employeeId: number;

  @Column("varchar2", { name: "FIRST_NAME", length: 255 })
  firstName: string;

  @Column("varchar2", { name: "LAST_NAME", length: 255 })
  lastName: string;

  @Column("varchar2", { name: "EMAIL", length: 255 })
  email: string;

  @Column("varchar2", { name: "PHONE", length: 50 })
  phone: string;

  @Column("date", { name: "HIRE_DATE" })
  hireDate: Date;

  @Column("varchar2", { name: "JOB_TITLE", length: 255 })
  jobTitle: string;

  @ManyToOne(() => Employees, (employees) => employees.employees, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "MANAGER_ID", referencedColumnName: "employeeId" }])
  manager: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager)
  employees: Employees[];

  @OneToMany(() => Orders, (orders) => orders.salesman)
  orders: Orders[];
}

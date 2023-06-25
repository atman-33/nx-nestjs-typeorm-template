import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Countries } from "./Countries";
import { Warehouses } from "./Warehouses";

@Index("SYS_C008228", ["locationId"], { unique: true })
@Entity("LOCATIONS")
export class Locations {
  @PrimaryGeneratedColumn({ type: "number", name: "LOCATION_ID" })
  locationId: number;

  @Column("varchar2", { name: "ADDRESS", length: 255 })
  address: string;

  @Column("varchar2", { name: "POSTAL_CODE", nullable: true, length: 20 })
  postalCode: string | null;

  @Column("varchar2", { name: "CITY", nullable: true, length: 50 })
  city: string | null;

  @Column("varchar2", { name: "STATE", nullable: true, length: 50 })
  state: string | null;

  @ManyToOne(() => Countries, (countries) => countries.locations, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COUNTRY_ID", referencedColumnName: "countryId" }])
  country: Countries;

  @OneToMany(() => Warehouses, (warehouses) => warehouses.location)
  warehouses: Warehouses[];
}

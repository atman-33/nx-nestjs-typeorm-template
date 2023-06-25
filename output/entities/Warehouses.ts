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
import { Locations } from "./Locations";

@Index("SYS_C008231", ["warehouseId"], { unique: true })
@Entity("WAREHOUSES")
export class Warehouses {
  @PrimaryGeneratedColumn({ type: "number", name: "WAREHOUSE_ID" })
  warehouseId: number;

  @Column("varchar2", { name: "WAREHOUSE_NAME", nullable: true, length: 255 })
  warehouseName: string | null;

  @OneToMany(() => Inventories, (inventories) => inventories.warehouse)
  inventories: Inventories[];

  @ManyToOne(() => Locations, (locations) => locations.warehouses, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "LOCATION_ID", referencedColumnName: "locationId" }])
  location: Locations;
}

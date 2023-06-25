import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Countries } from "./Countries";

@Index("SYS_C008222", ["regionId"], { unique: true })
@Entity("REGIONS")
export class Regions {
  @Column("varchar2", { name: "REGION_NAME", length: 50 })
  regionName: string;

  @PrimaryGeneratedColumn({ type: "number", name: "REGION_ID" })
  regionId: number;

  @OneToMany(() => Countries, (countries) => countries.region)
  countries: Countries[];
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Regions } from "./Regions";
import { Locations } from "./Locations";

@Index("SYS_C008224", ["countryId"], { unique: true })
@Entity("COUNTRIES")
export class Countries {
  @Column("char", { primary: true, name: "COUNTRY_ID", length: 2 })
  countryId: string;

  @Column("varchar2", { name: "COUNTRY_NAME", length: 40 })
  countryName: string;

  @ManyToOne(() => Regions, (regions) => regions.countries, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "REGION_ID", referencedColumnName: "regionId" }])
  region: Regions;

  @OneToMany(() => Locations, (locations) => locations.country)
  locations: Locations[];
}

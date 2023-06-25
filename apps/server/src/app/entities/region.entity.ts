import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity("REGIONS")
export class Region {
  @Column("varchar2", { name: "REGION_NAME", length: 50 })
  regionName: string;

  @PrimaryGeneratedColumn({ type: "number", name: "REGION_ID" })
  regionId: number;

  @Column({ name: "Note" , nullable: true})
  note: string;
}

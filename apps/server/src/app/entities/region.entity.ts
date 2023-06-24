import { Column, Entity, PrimaryColumn } from 'typeorm';

/* Note: The table names of Oracle are Upper. */

@Entity({name: "REGIONS"})
export class Region{
    @PrimaryColumn({name: "REGION_ID"})
    regionId: number

    @Column({name: "REGION_NAME"})
    regionName: string

    @Column({name: "NOTE"})
    note: string
}
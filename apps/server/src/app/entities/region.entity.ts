import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: "regions"})
export class Region{
    @PrimaryColumn({name: "region_id"})
    regionId: number

    @Column({name: "region_name"})
    regionName: string
}
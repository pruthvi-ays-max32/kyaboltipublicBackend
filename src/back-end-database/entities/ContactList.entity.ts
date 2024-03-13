import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class contactList{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    Name : string

    @Column()
    ContactNo : string
}
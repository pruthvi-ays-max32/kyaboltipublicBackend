import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { message} from "./Messages.entity";

@Entity()
export class contactList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    ContactNo: string;

    @OneToMany(() => message, message => message.sendBy)
    sentMessages: message[];

    @OneToMany(() => message, message => message.sendTo)
    receivedMessages: message[];
}

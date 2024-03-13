import { PrimaryGeneratedColumn, Column, ManyToOne, Entity, JoinTable  } from "typeorm";
import { contactList } from "./ContactList.entity";

@Entity()
export class messages{
    @PrimaryGeneratedColumn()
    Msgid : number;

    @Column()
    msg : string

    @ManyToOne(()=>contactList)
    @JoinTable()
    send_by : contactList

    @ManyToOne(()=>contactList)
    @JoinTable()
    send_to : contactList

    @Column({ type: 'datetime' })
    created_time : Date

    @Column({ type: 'datetime' })
    delivered_time : Date

    @Column({ type: 'datetime' })
    read_time : Date
}



import { PrimaryGeneratedColumn, Column, ManyToOne, Entity, JoinColumn } from "typeorm";
import { contactList } from "./ContactList.entity";

@Entity()
export class message {
    @PrimaryGeneratedColumn()
    msgId: number;

    @Column()
    msg: string;

    @ManyToOne(() => contactList, contactList => contactList.sentMessages)
    @JoinColumn({name:'sendBy', referencedColumnName:'id'})
    sendBy: contactList;

    @ManyToOne(() => contactList, contactList => contactList.receivedMessages)
    @JoinColumn({name:'sendTo', referencedColumnName:'id'})
    sendTo: contactList;

    @Column({ type: 'datetime', nullable: false })
    createdTime: Date;

    @Column({ type: 'datetime', nullable: true })
    deliveredTime: Date;

    @Column({ type: 'datetime', nullable: true })
    readTime: Date;
}

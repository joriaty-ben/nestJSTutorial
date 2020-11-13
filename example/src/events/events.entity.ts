import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EventsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
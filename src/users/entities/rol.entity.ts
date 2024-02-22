import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import User from './user.entity';

@Entity('roles')
export class Role {
  // ... other fields

  @PrimaryGeneratedColumn()
  uid: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}

import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './rol.entity';
import Dog from 'src/dogs/entities/dog.entity';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, default: '' })
  lasname: string;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @OneToMany(() => Dog, (dog) => dog.owner)
  dogs: Dog[];

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  address?: string;
}
export default User;

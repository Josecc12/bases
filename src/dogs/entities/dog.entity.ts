import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from '../enums/enums';
import User from 'src/users/entities/user.entity';

@Entity('dogs')
class Dog {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.dogs)
  owner: User;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar' })
  race: string;

  @Column({ type: 'integer' })
  age: number;

  @Column({ type: 'numeric' })
  weight: number;

  @Column({ type: 'enum', enum: Gender, default: Gender.OTHER }) // Aquí se usa el enum Gender
  gender: Gender;
}

export default Dog;

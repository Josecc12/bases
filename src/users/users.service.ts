import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import User from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import UpdateUserDto from './dtos/UpdateUserDto';

@Injectable()
export class UsersService {
  private records = [];
  constructor(
    @InjectRepository(User)
    private readonly useRepository: Repository<User>,
  ) {}

  findAll() {
    return this.useRepository.find();
  }

  findOne(id: number) {
    const record = this.useRepository.findOne({ where: { id } });

    if (!record) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return record;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.useRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

  create(new_user) {
    const user = this.useRepository.create(new_user);
    return this.useRepository.save(user);
  }

  async update(id: number, update_user: UpdateUserDto) {
    const user = await this.findOne(id);
    this.useRepository.merge(user, update_user);
    return this.useRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.useRepository.remove(user);
  }
}

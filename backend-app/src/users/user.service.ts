import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async create(name: string, email: string): Promise<User> {
    const user = this.userRepo.create({ name, email });
    return this.userRepo.save(user);
  }
}

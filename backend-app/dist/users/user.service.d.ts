import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    findAll(): Promise<User[]>;
    create(name: string, email: string): Promise<User>;
}

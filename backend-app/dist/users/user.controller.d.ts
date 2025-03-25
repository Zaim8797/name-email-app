import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("./user.entity").User[]>;
    createUser(body: {
        name: string;
        email: string;
    }): Promise<import("./user.entity").User>;
}

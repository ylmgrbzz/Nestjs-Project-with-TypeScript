import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [
        {
            username: 'yalım',
            email: 'yalım@gmail.com',
        },
        {
            username: 'yalım2',
            email: 'yalım2@gmail.com',
        },
        {
            username: 'yalım3',
            email: 'yalı3m@gmail.com',
        }
    ]
    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(userDetails: CreateUserType) {
        this.fakeUsers.push(userDetails);
    }
    fetchUserById(id: number) {
        return { id, username: 'yalım', email: 'yalım@email.com' };
    }

}

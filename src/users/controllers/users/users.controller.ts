import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }
    // @Get()
    // getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    //     console.log(sortDesc);
    //     return [{
    //         username: 'yalım',
    //         email: 'yalım@gmail.com',
    //     }]
    // }
    @Get()
    // @UseGuards(AuthGuard)
    getUsers() {
        return this.userService.fetchUsers();
    }

    // @Get('posts')
    // getUsersPosts() {
    //     return [{
    //         username: 'yalım',
    //         email: 'yalım@gmail.com',
    //         posts: [
    //             {
    //                 id: 1,
    //                 title: 'yalım',
    //             },
    //             {
    //                 id: 2,
    //                 title: 'yalım2',
    //             }
    //         ]
    //     }
    //     ]
    // }

    // @Post('create')
    // createUser(@Req() request: Request, @Res() response: Response) {
    //     console.log(request.body);
    //     response.send('User created successfully');
    //     return {
    //         message: 'User created successfully'
    //     }
    // }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData);
        return this.userService.createUser(userData);
        // return {
        //     message: 'User created successfully'
        // }
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.fetchUserById(id);
        if (!user)
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        return user;
        console.log(id);
    }
}

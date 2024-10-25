import { Injectable } from '@nestjs/common';
import { UserDto, UpdateUserDto, UpdateInvestorPasswordDto } from 'src/core/dtos/request/ipo-investor.dto';
import { UserModel } from 'src/core/models/ipo-investor.model';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: UserDto) {
    const user = new UserModel();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return user;
  }

  updateInvestor(updateAdminDto: UpdateUserDto) {
    const newUser = new UserModel();
    newUser.name = updateAdminDto.name;
    newUser.avatar = updateAdminDto.avatar;
    return newUser;
  }

  updateInvestorPassword(updateAdminPasswordDto: UpdateInvestorPasswordDto) {
    const newUser = new UserModel();
    newUser.password = updateAdminPasswordDto.newPassword;
    return newUser;
  }
}

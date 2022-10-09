import { Injectable } from '@nestjs/common';
import { CreateTrackInput } from './dto/input/create-track.input';
import { v4 as uuidv4 } from 'uuid';
import { GetTrackArgs } from './dto/args/get-track.args';
import { PrismaClient } from '@prisma/client';
import { Track } from '../../models/track.model';

@Injectable()
export class TracksService {
  private prisma = new PrismaClient();

  public async createTrack(createTrackData: CreateTrackInput): Promise<Track> {
    try {
      const id = uuidv4();
      await this.prisma.track.create({ data: { ...createTrackData, id } });

      return this.getTrack({ id });
    } catch (err) {
      console.log('Error on creating User | ', err);
    }
  }

  //   public updateUser(updateUserData: UpdateUserInput): User {
  //     const user = this.users.find(
  //       (user) => user.userId === updateUserData.userId,
  //     );

  //     Object.assign(user, updateUserData);

  //     return this.users.find((user) => user.userId === updateUserData.userId);
  //   }

  public async getTrack(getTrackArgs: GetTrackArgs): Promise<Track> {
    const track = await this.prisma.track.findUnique({
      where: { id: getTrackArgs.id },
    });
    return track;
  }

  //   public getUsers(getUsersArgs: GetUsersArgs): User[] {
  //     return getUsersArgs.userIds.map((userId) => this.getUser({ userId }));
  //   }

  //   public deleteUser(deleteUserData: DeleteUserInput): User {
  //     const userIndex = this.users.findIndex(
  //       (user) => user.userId === deleteUserData.userId,
  //     );

  //     const user = this.users[userIndex];

  //     this.users.splice(userIndex);

  //     return user;
  //   }
}

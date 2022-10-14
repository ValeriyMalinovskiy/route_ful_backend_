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
      return await this.prisma.track.create({
        data: { ...createTrackData, id },
      });
    } catch (err) {
      console.log('Error on creating User | ', err);
    }
  }

  public async getTrack(getTrackArgs: GetTrackArgs): Promise<Track> {
    const track = await this.prisma.track.findUnique({
      where: { id: getTrackArgs.id },
    });
    return track;
  }
}

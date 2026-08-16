import { BaseHttp } from './BaseHttp.ts';

export interface JoinRoomResponse {
    success: boolean;
    message: string;
}

export class RoomService extends BaseHttp {

    public async joinRoom(
        playerName: string,
        roomCode: string
    ): Promise<JoinRoomResponse> {

        return await this.post<JoinRoomResponse>(
            '/rooms/join',
            {
                playerName,
                roomCode,
            }
        );
    }
}
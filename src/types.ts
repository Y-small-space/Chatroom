interface Friend {
  _id?: string;
  friendId: string;
  remark?: string;
  phoneNumber?: number;
  email?: string;
  avatar?: string;
  roomId?: string;
  gender?: string;
  occupation?: string;
  birthday?: Date;
}

interface User {
  _id: string;
  phoneNumber: number;
  password: string;
  email?: string;
  avatar?: string;
  roomId?: string;
  gender?: string;
  occupation?: string;
  birthday?: string;
  friends?: Friend[];
}

interface Message {
  _id?: string;
  sender: string;
  receiver: string;
  sender_username: string;
  receiver_username: string;
  content: string;
  roomId: string;
  timestamp?: Date;
  avatar_sender?: string;
  avatar_receiver?: string;
}

interface ChatRoom {
  roomId: string;
  users: string[];
}

type RoomId = {
  myid: string;
  otherid: string;
  roomid: string;
}

export type {
  User,
  Message,
  ChatRoom,
  Friend,
  RoomId
};

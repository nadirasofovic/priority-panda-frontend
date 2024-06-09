import {UserDto} from "./user-dto.interface";

export interface WorkspaceDto {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  members: UserDto[];
}

export interface TaskDto {
  taskId: number;
  userId: number;
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
  creationDate: Date;
  status: string;
  label: string;
  workspaceId?: number;
}

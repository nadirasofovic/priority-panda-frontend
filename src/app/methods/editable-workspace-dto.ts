import {WorkspaceDto} from "./workspace-dto.interface";

export interface EditableWorkspaceDto extends WorkspaceDto {
  isEditing: boolean;
}

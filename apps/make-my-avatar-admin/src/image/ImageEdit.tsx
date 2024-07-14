import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProjectTitle } from "../project/ProjectTitle";
import { AvatarTitle } from "../avatar/AvatarTitle";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="prompt" multiline source="prompt" />
        <div />
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <ReferenceInput source="avatar.id" reference="Avatar" label="Avatar">
          <SelectInput optionText={AvatarTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

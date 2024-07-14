import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProjectTitle } from "../project/ProjectTitle";
import { AvatarTitle } from "../avatar/AvatarTitle";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

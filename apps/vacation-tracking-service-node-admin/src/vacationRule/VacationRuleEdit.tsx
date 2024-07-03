import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VacationRuleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="policy" source="policy" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const VacationRuleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="policy" source="policy" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};

import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  TextInput,
  ReferenceInput,
} from 'react-admin'

export const PostList = () => {
  const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source='userId' label='Yser' reference="users" alwaysOn />
]

  return (
    <List filters={postFilters}>
      <Datagrid>
        <ReferenceField source="userId" reference="users" />
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
      </Datagrid>
    </List>
  )
}

import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['MangoDB', 'Node js', 'Next js'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['Javascript', 'React js','Vue js'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['PHP', 'Laravel'],
  },
];
const Addwork = () => (
  
  <Table dataSource={data}>
    <ColumnGroup >
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
   
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <button>Edit </button>
          <button>Delete</button>
        </Space>
      )}
     />
    
  </Table>
  
  

);
export default Addwork;



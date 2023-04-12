import {  Button, Modal, Space, Table, Tag } from 'antd';
import  {UsergroupAddOutlined } from '@ant-design/icons'
import "../style/addwork.scss"
import  {useState}  from 'react';
import {   Form, Input } from 'antd';




const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


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

];
const Addwork = () =>{ 
  ///////////////Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

/////
  
  
  
  
  
  return(

  
  <>
  <div className='row'>
    <h2>Specialist</h2> 
     <Space wrap>
    <Button type="primary" onClick={showModal}><UsergroupAddOutlined /> Add </Button>
  </Space>
  </div>
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

<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <Form
    name="basic"
    labelCol={{
      span: 24,
    }}
    wrapperCol={{
      span: 24,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="FistName"
      name="FistName"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input  />
    </Form.Item>

    <Form.Item
      label="LastName"
      name="LastName"
      rules={[
        {
          required: true,
          placeholder: "salom",
          
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Address"
      name="Address"
      rules={[
        {
          required: true,
         
          
        },
      ]}
    >
      <Input />
    </Form.Item>
 

  </Form>
      </Modal>
  
  </>

)};
export default Addwork;



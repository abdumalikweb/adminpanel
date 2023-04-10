import React from 'react'
import {  Modal } from 'antd';
import { useState } from 'react';
import {Card, Button, Space } from 'antd';
import "../style/order.scss"

const Order = () => {
   const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [ setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
    <div className='order_title'>
      <h2>Zakaz Berish</h2>
        <Space wrap>
    <Button type="primary"   onClick={showModal}>
      Add work
    </Button>
  </Space>
    </div>
 
 <div className='card_order'>
 <Card

    title="FronEnd"
    bordered={true}
    style={{
     width: "25%"
    }}
  >
   
    <span className='card_link'>UI Link : <a href="https://www.figma.com/file/Wvw73e8IRXtTEw0GSaJ26O/%D0%9A%D1%83%D0%B4%D0%B0-%D0%9F%D0%B8%D1%86%D1%86%D0%B0?node-id=0-1"> Cargo site</a></span>
    <p className='card_desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, aliquam?</p>
    <div className='card_info'>
        <p>Dateline  <br /> <span>12/12/2002</span></p>
      <p>Price <br /> <span>1800$</span></p>
    </div>
  </Card>
<Card

    title="Backend"
    bordered={true}
    style={{
   width: "24%"
    }}
  >
   
    <span className='card_link'>UI Link : <a href="https://www.figma.com/file/Wvw73e8IRXtTEw0GSaJ26O/%D0%9A%D1%83%D0%B4%D0%B0-%D0%9F%D0%B8%D1%86%D1%86%D0%B0?node-id=0-1"> Cargo site</a></span>
    <p className='card_desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, aliquam?</p>
    <div className='card_info'>
        <p>Dateline  <br /> <span>12/12/2002</span></p>
      <p>Price <br /> <span>1800$</span></p>
    </div>
</Card>
<Card

    title="Database"
    bordered={true}
    style={{
   width: "24%"
    }}
  >
   
    <span className='card_link'>UI Link : <a href="https://www.figma.com/file/Wvw73e8IRXtTEw0GSaJ26O/%D0%9A%D1%83%D0%B4%D0%B0-%D0%9F%D0%B8%D1%86%D1%86%D0%B0?node-id=0-1"> Cargo site</a></span>
    <p className='card_desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, aliquam?</p>
    <div className='card_info'>
        <p>Dateline  <br /> <span>12/12/2002</span></p>
      <p>Price <br /> <span>1800$</span></p>
    </div>
</Card>
<Card

    title="FronEnd"
    bordered={true}
    style={{
   width: "24%"
    }}
  >
   
    <span className='card_link'>UI Link : <a href="https://www.figma.com/file/Wvw73e8IRXtTEw0GSaJ26O/%D0%9A%D1%83%D0%B4%D0%B0-%D0%9F%D0%B8%D1%86%D1%86%D0%B0?node-id=0-1"> Cargo site</a></span>
    <p className='card_desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, aliquam?</p>
    <div className='card_info'>
        <p>Dateline  <br /> <span>12/12/2002</span></p>
      <p>Price <br /> <span>1800$</span></p>
    </div>
</Card>
 </div>
  
  <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, libero?</p>
        
      </Modal>
 

   
  </>
  )
}

export default Order
import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Cascader,
    Button,
    Card,
    Select,
    Upload
} from 'antd';

import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import { useHistory } from "react-router-dom";
import { AddUser, GetUsers, UpdateUser } from 'api/Shared/Master/UserController'
import { Add_user, Get_User, update_user, Delete_user } from './action'
import {  Row, Col, message } from "antd";
import { add } from 'lodash';
import {successNotification,updatedNotification,errorNotification} from 'components/Notification';
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        md: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

// const product_id =null
// let filter = { status: true }

const UserProfileSettingForm = () => {
    const history = useHistory()
    const [form] = Form.useForm();

    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [editView, setEditView] = useState(false);
    let location = history.location.pathname
    console.log("location",location)
    let user_id = location.substring(location.lastIndexOf('/') + 1)
    console.log("id", user_id)

    // const apiInit = () => {
    //     GetUsers(user_id, (res, err) => {
    //         console.log(res)     
    //     })
    // }

    useEffect(() => {
        editForm()
        console.log('test')
    }, [])

    const editForm = () => {
        if (user_id) {
            setEditView(true)
            Get_User().then(result=> 
                form.setFieldsValue(result.res.data))
        }
    }

    const handleChange = () => {

    }

    // const addData = data => {
    //     AddUser(data, (res, err) => {
    //         console.log(data)
    //         if (res.Status === 200) {
    //             message.success("Suceessfully Record Added");
    //             apiInit()
    //         } else {
    //             console.log(err)
    //             message.warning("Something went to wrong");
    //         }
    //     })
    // }

    const onFinish = values => {
        values['company_id'] = "212435446"
        values['store_id'] = "1"
        values['profile_image_url'] = "test"
        values['status'] = true;
        
        if (editView) {
            update_user(user_id, values).then(results=>{
                if (results.err) {
                    errorNotification()
                }
                else {
                    updatedNotification()
                    form.resetFields();
                }
            })
            }
            else {
                Add_user(values).then(result => {
                    if (result.err) {
                        errorNotification()
                    }
                    else {
                        successNotification()
                        form.resetFields();
                    }
                })
            }
        }

    return (
        <Card className="gx-card" title="User Profile">
            <Form
                {...formItemLayout}
                form={form}
                name="UserProfile"
                onFinish={onFinish}
                initialValues={{
                }}
                scrollToFirstError
                labelAlign="left"
            >
                <Form.Item
                    name="email_id"
                    label="Email_id"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email_id!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="user_name"
                    label="UserName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your user_name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="first_name"
                    label="FirstName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your firstName!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="last_name"
                    label="LastName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your LastName!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="user_type"
                    label="UserType"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your user_type!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="company_name"
                    label="companyName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your companyName!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="store_name"
                    label="storeName"
                    rules={[
                        {
                            required: false,
                            message: 'Please input your companyName!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="profile_image_url"
                    label="Product Image"
                    rules={[
                        {
                            required: false,
                            message: 'Please input your Product Image!',
                        },
                    ]}
                >
                    <Upload
                        action="//jsonplaceholder.typicode.com/posts/"
                        listType="picture-card"
                        onChange={handleChange}
                    >
                        <div>
                            <PlusOutlined />
                            <div className="ant-upload-text">Product Image</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default UserProfileSettingForm;


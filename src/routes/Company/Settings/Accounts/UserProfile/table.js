import React, { useState, useEffect } from 'react'
import { Input, Badge, Card, Avatar, Statistic, Row, Col, Table, Button, Tooltip, Space } from 'antd';
import { Pagination } from 'appConfig.json';
import { Get_User } from './action'
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import PageHeaderWithSearchNoBack from 'components/PageHeaderWithSearchNoBack';

const Search = Input.Search;

const TableView = () => {
    const history = useHistory()
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        Get_User().then(result => {
            console.log(result)
            if (result.err === null) {
                setUsers(result.res.data)
            }
        })
    }, [])

    const columns = [
        {
            title: 'userName',
            dataIndex: 'user_name',
            key: 'user_name',
        },

        {
            title: 'CompanyName',
            dataIndex: 'company_name',
            key: 'company_name',
        },
        {
            title: 'Email',
            dataIndex: 'email_id',
            key: 'email_id',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text) => {
                return (
                    <Space size="middle">
                        <Tooltip title="View">
                            <span className="gx-text-info gx-pointer" onClick={() => onViewPanel(text)}>
                                <i className="icon icon-forward gx-fs-xl gx-mr-2" />
                            </span>
                        </Tooltip>
                    </Space>
                )
            },
        },
    ];

    const onViewPanel = data => {
        history.push(`${history.location.pathname}/view/${data.user_id}`)
    }

    return (
        <>
            <PageHeaderWithSearchNoBack title="Brand" subtitle="Product" islist={true} isadd={false} />
            <Row className="gx-main-content-wrapper">
                <Col span={24}>
                    <Table className="gx-table-responsive" columns={columns} dataSource={Users} pagination={{ pageSize: Pagination }}
                        scroll={{ y: 240 }} />
                </Col>
            </Row>
        </>
    )
}

export default TableView
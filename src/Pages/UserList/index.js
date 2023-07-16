import React, {useState, useEffect} from 'react';
import "./style.scss";
import { Table } from 'antd';
import {columns} from './columns';

const UserList = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                rowKey={'id'}
                bordered
                size='middle'
                expandable={{
                    expandedRowRender: (elem) => (
                        <div className='expanded-table'>
                            <table>
                                <tr>
                                    <th>Company</th>
                                    <th>Adress</th>
                                </tr>
                                <tr>
                                    <td>{elem.company.name}</td>
                                    <td>{elem.address.city} {elem.address.street} {elem.address.suite}</td>
                                </tr>
                            </table>
                        </div>
                    ),
                  }}
            />
        </div>
    );
};

export default UserList;
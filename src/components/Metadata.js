
import {React, useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';

const Metadata = properties => {
    const [metaData, changeMetaData]=useState({});
    useEffect(()=> {
        async function getData() {
            let data = await window.account.state();
            console.log(data);
            changeMetaData(data);
        };
        getData();
    }, []);

    return (
        <div>
            <Table striped border hover variant="dark">
                <thead>
                    <tr>
                        <th>Data Title</th>
                        <th>Data Value</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>Amount</td>
                        <td>{metaData.amount}</td>
                    </tr>
                    <tr>
                        <td>Locked</td>
                        <td>{metaData.Locked}</td>
                    </tr>
                    <tr>
                        <td>Code Hash</td>
                        <td>{metaData.code_hash}</td>
                    </tr>
                    <tr>
                        <td>Storage Usage</td>
                        <td>{metaData.storage_usage}</td>
                    </tr>
                    <tr>
                        <td>Storage Paid At</td>
                        <td>{metaData.storage_paid_at}</td>
                    </tr>
                    <tr>
                        <td>Block Height</td>
                        <td>{metaData.block_height}</td>
                    </tr>
                    <tr>
                        <td>Block Hash</td>
                        <td>{metaData.block_hash}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
};

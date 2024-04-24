import React, { useState } from "react";
import { title } from "process";
import { Table, Button} from "antd";
import { text } from "stream/consumers";
const Test1 = () => {
    const [searchText, setSearchText] = useState('');
    const columns = [
        { title: 'Id', dataIndex: 'id', key: 'id' },
        { title: 'Student Code', dataIndex: 'studentCode', key: 'studentCode' },
        { title: 'Student Name', dataIndex: 'studentName', key: 'studentName' },
        { title: 'Final Test', dataIndex: 'result', key: 'result' },
        { title: 'Home Town', dataIndex: 'hometown', key: 'hometown' }]

    const data = [
        { id: 1, studentCode: '0909001', studentName: 'Le Van Thang', result: 8, hometown: 'TPHCM' },
        { id: 2, studentCode: '0909002', studentName: 'Tran Minh Tan', result: 7.5, hometown: 'Dong Nai' },
        { id: 3, studentCode: '0909003', studentName: 'Ly Uyen Nhi', result: 8.6, hometown: 'TPHCM' },
        { id: 4, studentCode: '0909004', studentName: 'Trinh Thi Thu Thao', result: 6, hometown: 'Tien Giang' },
        { id: 5, studentCode: '0909005', studentName: 'Le Van Thang', result: 8, hometown: 'Khanh Hoa' },
    ]
    const myProvinces = ['TPHCM', 'Dong Nai'];
    const [searchData, setSearchData] = useState(data);

    return (
        //<Table columns = {columns} dataSource={data.filter(x=>x.studentName.includes('Thu'))}/>(dung de tim kiem)
        <div>
            <div style={{ display: 'inline' }}>
                Find student by name:<input type="text" style={{ width: '20%' }}
                    value={searchText} onChange={(e) => setSearchText(e.currentTarget.value)}
                    onKeyPress={(e) => {
                        if (e.key == 'Enter') {
                            setSearchData(data.filter(x => x.studentName.toLowerCase().includes(searchText.toLowerCase().trim())))
                        }
                    }}
                />&nbsp;
                <input type = "checkBox" onChange = {(e)=>{
                    if (e.currentTarget.checked){

                    }
                    else {

                    }
                }} />&nbsp;TPHCM&nbsp;
                <input type="checkBox" />&nbsp; TPHCM&nbsp;
                <input type="checkBox" />&nbsp; Dong Nai&nbsp;
                <input type="checkBox" />&nbsp; Khanh Hoa&nbsp;
                {/* <Button style={{backgroundColor:"blue"}}>Loc du lieu </Button> */}
                <Button type ="primary">Loc du lieu </Button>
            </div>
            <Table columns={columns} dataSource={searchData} />
        </div>

    )

}
export default Test1;
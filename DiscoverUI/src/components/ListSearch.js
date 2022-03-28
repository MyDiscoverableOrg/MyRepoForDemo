import { Input, Space } from 'antd';

const { Search } = Input;

const onSearch = value => console.log(value);

const ListSearch = (props) => {
        return (
            <Space  direction="vertical">
            <Search placeholder="input search text" onSearch={onSearch} 
            style={props.searchStyle} />
            </Space>
        )
}

export default ListSearch
import { Alert, Button, Space } from 'antd';

const TopSection = () => {
  return (
    <Space direction='horizontal'>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert message='Form invalid' type='error' />
      </Space>
      <div>
        <Button type='text'>Cancel</Button>
        <Button type='primary' disabled>Save</Button>
      </div>
    </Space>
  );
};

export default TopSection;

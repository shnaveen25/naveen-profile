import React, { Fragment } from 'react';
import { 
  Drawer, Timeline, Typography, Divider, Tag, Row, Col
} from 'antd';

const { Text } = Typography;

const Experience = ({ onClose, visible }) => {
  return (
    <Drawer
      title="Experience & Skills"
      width={window.innerWidth < 768 ? ((window.innerWidth / 4) * 3) : 500}
      placement="right"
      closable={true}
      onClose={onClose}
      visible={visible === 'experience'}
    >
      <Fragment>
        <Timeline>
          <Timeline.Item color="green">
            <p>Senior Software Engineer</p>
            <p><Text type="secondary">Apr`2019 – Present</Text></p>
            <p><Text type="secondary">Bangalore, India</Text></p>
          </Timeline.Item>
          <Timeline.Item color="red">
            <p>Software Engineer</p>
            <p><Text type="secondary">Jan`2017 – Mar`2019</Text></p>
            <p><Text type="secondary">Bangalore, India</Text></p>
          </Timeline.Item>
        </Timeline>
        <Divider plain>Primary Skills</Divider>
        <Timeline>
          <Timeline.Item color="green">
            <p>Java</p>
            <p><Text type="secondary">Spring Boot, Hibernet, MicroServices</Text></p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <p>ReactJs</p>
            <p><Text type="secondary">Redux, HTML, CSS</Text></p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <p>DB</p> 
            <p><Text type="secondary">Mysql, MongoDB, Postgress</Text></p>
          </Timeline.Item>
        </Timeline>
        <Divider plain>Other Skills</Divider>
        <Row gutter={[14, 14]}>
          <Col span={window.innerWidth < 768 ? 12 : 6}>
            <Tag color="default">Spring MVC</Tag>
          </Col>
          <Col span={window.innerWidth < 768 ? 12 : 6}>
            <Tag color="default">Spring Jpa</Tag>
          </Col>
          <Col span={window.innerWidth < 768 ? 12 : 6}>
            <Tag color="default">Swagger</Tag>
          </Col>
          <Col span={window.innerWidth < 768 ? 12 : 6}>
            <Tag color="default">RestFull API</Tag>
          </Col>
          <Col span={window.innerWidth < 768 ? 12 : 6}>
            <Tag color="default">Elasticsearch</Tag>
          </Col>
          <Col span={window.innerWidth < 768 ? 12 : 6}>
            <Tag color="default">Redis</Tag>
          </Col>
          <Col span={window.innerWidth < 768 ? 12 : 6}>
            <Tag color="default">OAuth</Tag>
          </Col>
          <Col span={window.innerWidth < 768 ? 12 : 6}>
            <Tag color="default">D3, Antd</Tag>
          </Col>
        </Row>
        <Row gutter={[14, 14]}>
          <Col span={12}>
            <Tag color="default">AWS (EC2, RDS, S3, Rout 53)</Tag>
          </Col>
        </Row>
        <Row gutter={[14, 14]}>
          <Col span={12}>
            <Tag color="default">Progressive Web App</Tag>
          </Col>
        </Row>
        <Row gutter={[14, 14]}>
          <Col span={12}>
            <Tag color="default">Dynamic Subdomain Provisioning</Tag>
          </Col>
        </Row>
      </Fragment>
    </Drawer>
  );
};

export default Experience;
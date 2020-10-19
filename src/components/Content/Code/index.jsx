import React, { Fragment } from 'react';
import { 
  Drawer, Statistic, Row, Col, Card, Divider, List, Typography
} from 'antd';
import PWA_LOGO from '../../../assets/images/pwa.png';
import EUREKA from '../../../assets/images/sp_eureka.png';
import JAVA from '../../../assets/images/java-logo.jpg';
import ATOM from '../../../assets/images/atom-logo.png';

const { Paragraph } = Typography;

const npmListData = [
  {
    href: 'http://bit.ly/react-pwa-installer-prompt',
    title: 'react-pwa-installer-prompt',
    avatar: '',
    description: 'NPM Package which Provide your own custom install flow, directly within your app.',
    logo: PWA_LOGO,
    content:
      'In-app install flow : Even though most of the browser provides an option to Add to home screen, some users don\'t realize that they can install a PWA. It can be helpful to provide an in-app experience. So, that you can promote and enable installation of your PWA.',
  },
  {
    href: 'http://bit.ly/scrabble_atom_shnaveen',
    title: 'scrabble',
    avatar: '',
    description: 'Atom snippets responsible for generating boilerplat code for React.',
    logo: ATOM,
    content: 'The pain of having to write way too much boilerplate code, this package will reduce your effort generating the boilerplate.',
  }
];

const gitListData = [
  {
    href: 'https://github.com/shnaveen25/spring-boot-eureka-seed',
    title: 'spring-boot-eureka-seed',
    avatar: '',
    description: 'Microservice Starter',
    logo: EUREKA,
    content:
      'Eureka is a REST (Representational State Transfer) based service that is primarily used in the AWS cloud for locating services for the purpose of load balancing and failover of middle-tier servers. We call this service, the Eureka Server.',
  },
  {
    href: 'https://github.com/shnaveen25/prnewsextractor',
    title: 'prnewsextractor',
    avatar: '',
    description: 'Harvest the NEWS realised by Industry & Markets from PR News Wire',
    logo: JAVA,
    content:
      'Quick summary : PR Newswire is a distributor of press releases based in New York City. By PR Newswire we can find news by industry or search for the topics that matter. In the current application we harvested the News Releases by Industry & Markets their are many categories as I chosen one. I used MongoDb to store the harvested data.',
  }
];

const Experience = ({ onClose, visible }) => {
  return (
    <Drawer
      title="Code & Packages"
      width={window.innerWidth < 768 ? window.innerWidth : (window.innerWidth / 2)}
      placement="right"
      closable={true}
      onClose={onClose}
      visible={visible === 'code'}
    >
      <Fragment>
        <div className="site-statistic-demo-card">
          <Row gutter={16}>
            <Col span={12}>
              <Card title="GitHub" /* extra={<a href="https://bit.ly/github_shnaveen" target="_blank">Visit</a>} */>
                <Statistic title="Repositorie" value={7} suffix="+" valueStyle={{ color: '#3f8600' }} />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="NPM & Atom" /* extra={<a href="http://bit.ly/npm_shnaveen" target="_blank">Visit</a>} */>
                <Statistic title="Package" value={2} suffix="" valueStyle={{ color: '#3f8600' }} />
              </Card>
            </Col>
          </Row>
        </div>
        <Divider plain>Packages</Divider>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={npmListData}
            renderItem={item => (
              <List.Item
                key={item.title}
                extra={
                  <img
                    width="200"
                    height="130"
                    alt="logo"
                    src={item.logo}
                  />
                }
              >
                <List.Item.Meta
                  // avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href} target="_blank" style={{ color: "#1890ff" }}>{item.title}</a>}
                  description={item.description}
                />
                <p style={{ textAlign: 'justify' }}>
                  <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                    {item.content}
                  </Paragraph>
                </p>
              </List.Item>
            )}
          />
        <Divider plain>GitHub</Divider>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={gitListData}
            renderItem={item => (
              <List.Item
                key={item.title}
                extra={
                  <img
                    width="200"
                    height="130"
                    alt="logo"
                    src={item.logo}
                  />
                }
              >
                <List.Item.Meta
                  // avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href} target="_blank" style={{ color: "#1890ff" }}>{item.title}</a>}
                  description={item.description}
                />
                <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }} style={{ textAlign: 'justify' }}>
                  {item.content}
                </Paragraph>
              </List.Item>
            )}
          />
      </Fragment>
    </Drawer>
  );
};

export default Experience;
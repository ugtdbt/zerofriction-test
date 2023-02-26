import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';

import ConfigBody from './config-body/ConfigBody';
import css from './organisation-configuration.module.css';
import TopSection from './top-section/TopSection';

const OrganisationConfiguration = () => {
  return (
    <Layout className={css['layout']}>
      <Header className={css['header']}>
        <TopSection />
      </Header>
      <Content className={css['content']}>
        <ConfigBody />
      </Content>
    </Layout>
  );
};

export default OrganisationConfiguration;

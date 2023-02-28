import React, { memo } from "react";
import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";

import ConfigBody from "./config-body/ConfigBody";
import css from "./organisation-configuration.module.css";
import TopSection from "./top-section/TopSection";

const OrganisationConfiguration: React.FC = memo(() => {
  return (
    <Layout className={css["layout"]} data-testid="layout">
      <Header className={css["header"]}>
        <TopSection />
      </Header>
      <Content className={css["content"]}>
        <ConfigBody />
      </Content>
    </Layout>
  );
});

OrganisationConfiguration.displayName = "OrganisationConfiguration";
export default OrganisationConfiguration;

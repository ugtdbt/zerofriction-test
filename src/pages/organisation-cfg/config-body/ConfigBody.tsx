import React, { memo, useEffect, useState } from "react";
import { Col, Row } from "antd";

import AddressCard from "./cards/AddressCard";
import ContactDetailsCard from "./cards/ContactDetailsCard";
import OrganizationDetailsCard from "./cards/OrganizationDetailsCard";
import { actionCreators } from "../../../state";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const ConfigBody: React.FC = memo(() => {
  const [toched, setToched] = useState(false);
  const dispatch = useDispatch();

  const { isFormTouched } = bindActionCreators(actionCreators, dispatch);
  
  
  const handleClick = (e: any) => {
    setToched(true);
  };

  useEffect(() => {
    if (toched) {
      isFormTouched();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toched]);

  return (
    <Row gutter={16} onClick={handleClick}>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <OrganizationDetailsCard />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <AddressCard />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <ContactDetailsCard />
      </Col>
    </Row>
  );
});

ConfigBody.displayName = "ConfigBody";
export default ConfigBody;

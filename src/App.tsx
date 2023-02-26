import React, { memo } from "react";
import "./styles/App.css";

import OrganisationConfiguration from "./pages/organisation-cfg/OrganisationConfiguration";

const App: React.FC = memo(() => {
  return (
    <div className="App">
      <OrganisationConfiguration />
    </div>
  );
});

App.displayName = "App";
export default App;

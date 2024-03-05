import React from "react";

const Text = React.lazy(() => import("design_system/Text"));

const App = () => (
  <div className="container">
    <Text text="gkgk" typography="semibold12" />
  </div>
);

export default App;

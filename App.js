import React, { useState } from "react";

import { Provider } from "react-redux";
import store from "./app/redux/store";
import HomeScreens from "./app/screens/HomeScreens";

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreens />
    </Provider>
  );
}

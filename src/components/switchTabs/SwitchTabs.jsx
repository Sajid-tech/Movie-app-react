import React, { useState } from "react";

import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  // selectedTab state variable stores the index of the currently selected tab.
  const [selectedTab, setSelectedTab] = useState(0); //index pass kr rhe hai
  //positioning of tabs change || // left state variable stores the position of the moving background.
  const [left, setLeft] = useState(0);

  // activeTab function handles the logic of changing the selected tab and moving the background.
  const activeTab = (tab, index) => {
    // Set the position of the moving background to the width of the current tab.

    setLeft(index * 100); // index * width (width ya sabki same hai thats why we do on the basis of index)
    // After a short delay, set the selected tab index to the current index.
    setTimeout(() => {
      setSelectedTab(index);
    }, [300]);
    // Call the onTabChange callback function, passing in the current tab and index.

    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem  ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        {/* // when key and value both are same eg. left:left thann only you can write left it work */}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;

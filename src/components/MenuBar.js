import React, { Component } from "react";
import { TabMenu } from "primereact/tabmenu";
import { useState } from "react";

import "../assets/style/headerBar/headerBar.css";

const MenuBar = () => {
  const [activeTab, setActiveTab] = useState(null);

  var id;

  const onTabChange = (e) => {
    setActiveTab(e.value);
    console.log(e.value);
  };

  const renderTabContent = () => {
    if (id === 1) {
      return <div>Hello World</div>;
    } else {
      <div>blabla</div>;
    }
  };

  const items = [
    { id: 1, label: "Home", icon: "pi pi-fw pi-home" },
    { label: "Vegetables", icon: "pi pi-fw pi-calendar" },
    { label: "Fruits", icon: "pi pi-fw pi-pencil" },
    { label: "Rice/Grains", icon: "pi pi-fw pi-file" },
    { label: "Settings", icon: "pi pi-fw pi-cog" },
  ];

  return (
    <div className="card">
      <div className="relative card-container green-container menu-container">
        <div
          className="block font-bold text-center p-4 mb-3
          h-7rem"
        >
          <div className="card flex justify-content-center flex-wrap ">
            <TabMenu
              model={items}
              activeIndex={activeTab}
              onTabChange={onTabChange}
            />
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuBar;

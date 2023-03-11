import React, { Component } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Button } from "primereact/button";

class MenuBar extends Component {
  render() {
    const items = [
      { label: "Home", icon: "pi pi-fw pi-home" },
      { label: "Vegetables", icon: "pi pi-fw pi-calendar" },
      { label: "Fruits", icon: "pi pi-fw pi-pencil" },
      { label: "Rice/Grains", icon: "pi pi-fw pi-file" },
      { label: "Settings", icon: "pi pi-fw pi-cog" },
    ];

    return (
      <div className="card flex justify-content-center flex-wrap">
        <TabMenu model={items} />
      </div>
    );
  }
}

export default MenuBar;

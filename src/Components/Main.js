import Window from "./Window";

import React from "react";

function Main() {
  return (
    <main className="main container ">
      <div className="grid">
        <Window name="html" />

        <div id="grid-2">
          <Window name="output" />
        </div>

        <Window name="css" />
      </div>
    </main>
  );
}

export default Main;

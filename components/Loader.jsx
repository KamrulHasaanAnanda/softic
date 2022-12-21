import { Spin } from "antd";
import React from "react";

function Loader() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spin
        tip={
          <h3
            style={{
              width: 110,
              color: "black",
              marginTop: -18,
              marginLeft: 10,
            }}
          >
            Loading Data
          </h3>
        }
        size="large"
      >
        <div className="content" />
      </Spin>
    </div>
  );
}

export default Loader;

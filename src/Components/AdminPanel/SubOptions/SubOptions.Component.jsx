import React from "react";
import "./SubOptions.Style.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import TableData from "../TableData/TableData.Component";
import SearchBar from "../Search-bar/Search-box.Component";

export const SubOptions = (props) => {
  return (
    <div className="sub-options">
      <Tabs>
        <TabList>
          {props.SubOptionsA.map((subOpt) => (
            <Tab key={subOpt.id}>
              <SuboptName key={subOpt.id} subOpt={subOpt} is />
              {/* {props.SubOptionsA.map((subOpt) => (
              ))} */}
            </Tab>
          ))}
        </TabList>
        <SearchBar />

        {props.SubOptionsA.map((dataOpt) => (
          <TabPanel key={dataOpt.id}>
            <TableData key={dataOpt.id} />
          </TabPanel>
        ))}
      </Tabs>

      {/* {props.OptionsA.map((cardOptions) => (
        <Card key={cardOptions.id} cardOptions={cardOptions} />
      ))} */}
    </div>
  );
};

const SuboptName = (props) => {
  const bgColor = props.subOpt.notifiColor;
  return (
    <div className="suboptname">
      <span className="opt-count" style={{ backgroundColor: bgColor }}>
        {props.subOpt.notifiCount}
      </span>
      <span className="opt-name">{props.subOpt.name}</span>
    </div>
  );
};

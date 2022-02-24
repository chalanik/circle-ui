import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Header from "../../Layout/Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import './DashboardContainer.css';
import Benefits from "../Benefits/Benefits";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }} className="panel-box">
            {children}
          </Box>
        )}
      </div>
    );
  }

function DashboardContainer() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <>
            <Header dashboard={"true"} />
            <div className="">
                <div className="tab-container">
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Dashboard" />
                        <Tab label="Benefits and offers" />
                    </Tabs>
                </div>
                <TabPanel value={value} index={0}>
                    <Dashboard />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Benefits />
                </TabPanel>
            </div>
      </>
    );
}

export default DashboardContainer;
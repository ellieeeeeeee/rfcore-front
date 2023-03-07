import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box, Container, styled } from "@mui/material";

import TimeLine from "./TimeLine";
interface Props {
  content: any;
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
//content
function TabPanel(props: TabPanelProps) {
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
        <Box sx={{ p: 20 }}>
          {/* <Typography>{children}</Typography> */}
          <TimeLine />
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ content }: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <TabContainer>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {content.map((item: any) => (
              <Tab label={item.title} {...a11yProps(0)} key={item.title} />
            ))}
          </Tabs>
        </Box>
        {content.map((item: any, idx: number) => (
          <TabPanel value={value} index={idx} key={idx}>
            {item.title}
          </TabPanel>
        ))}
      </Box>
    </TabContainer>
  );
}
const TabContainer = styled(Box)(({ theme }) => ({
  ".MuiTabs-root": {
    maxWidth: "144rem",
    margin: "0 auto",
  },
  ".MuiTabs-flexContainer button": {
    flex: 1,
    maxWidth: "33.3%",
    fontSize: "2.4rem",
  },
  ".MuiTab-root": {
    color: theme.palette.secondary.contrastText,
    fontWeight: 500,
    padding: "2.2rem 0",
  },
  ".MuiTab-root.Mui-selected": {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  ".MuiTabs-indicator": {
    color: theme.palette.primary.main,
    height: "0.3rem",
  },
}));

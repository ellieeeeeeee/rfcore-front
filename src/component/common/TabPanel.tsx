import { Box } from "@mui/material";
import React from "react";

import TimeLine from "./TimeLine";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const content_first = [
    {
      year: 2021,
      description: [
        "• Participated in the project “development of Fanout Wafer Level Package (FOWLP)-based 28GHz millimeter wave band antenna integrated package module.",
        "• Participated in the project “development of weather radar signal processing technology”.",
        "• Participated in the project “development of technology for eVTOL flight stability and operability demonstration test evaluation and collision avoidance process.",
        "• Participated in the project “development of collision detection radar technology for eVTOL”.",
      ],
    },
    {
      year: 2020,
      description: [
        "Certified with MAIN-BIZ",
        "Certified with Best Family Friendly Management",
        "Participated in the project “development of 120GHz ultra-light and ultra-low-power radar SoC for Occupancy Monitoring System(OMS)”",
        "Participated in the project “development of marine environment real-time monitoring and prediction simulation for autonomous navigation ship”",
      ],
    },
    {
      year: 2019,
      description: [
        "Certified with AS 9100",
        "Selected as Small Giant company",
        "Developed “Management and Technology development of illegal fishing marine ecosystem based on multiple UAV “",
        "Developed “Development of digital transmitter based on tile conformation SoC/SIP for Active Phased Array system ”",
      ],
    },
    {
      year: 2018,
      description: [
        "Developed “ Broadband GaN PA MMIC and Export-Oriented Power Amplifier “",
        "Awarded with 19th Best Radio wave broadcasting technology",
        "Awarded $10 million Export Prize",
      ],
    },
  ];
  const content_second = [
    {
      year: 2014,
      description: [
        "• Participated in the project “development of Fanout Wafer Level Package (FOWLP)-based 28GHz millimeter wave band antenna integrated package module.",
        "• Participated in the project “development of weather radar signal processing technology”.",
        "• Participated in the project “development of technology for eVTOL flight stability and operability demonstration test evaluation and collision avoidance process.",
        "• Participated in the project “development of collision detection radar technology for eVTOL”.",
      ],
    },
  ];
  const content_third = [
    {
      year: 2000,
      description: [
        "• Participated in the project “development of Fanout Wafer Level Package (FOWLP)-based 28GHz millimeter wave band antenna integrated package module.",
        "• Participated in the project “development of weather radar signal processing technology”.",
        "• Participated in the project “development of technology for eVTOL flight stability and operability demonstration test evaluation and collision avoidance process.",
        "• Participated in the project “development of collision detection radar technology for eVTOL”.",
      ],
    },
  ];

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
          {value === 0 && <TimeLine content={content_first} />}
          {value === 1 && <TimeLine content={content_second} />}
          {value === 2 && <TimeLine content={content_third} />}
        </Box>
      )}
    </div>
  );
}

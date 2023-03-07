import React from "react";
import { Box, Container, styled } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function TimeLine() {
  const content = [
    {
      year: 2021,
      content: [
        "Participated in the project “development of Fanout Wafer Level Package (FOWLP)-based 28GHz millimeter wave band antenna integrated package module.",
        "Participated in the project “development of weather radar signal processing technology”.",
        "Participated in the project “development of technology for eVTOL flight stability and operability demonstration test evaluation and collision avoidance process.",
        "Participated in the project “development of collision detection radar technology for eVTOL”.",
      ],
    },
    {
      year: 2020,
      content: [
        "Certified with MAIN-BIZ",
        "Certified with Best Family Friendly Management",
        "Participated in the project “development of 120GHz ultra-light and ultra-low-power radar SoC for Occupancy Monitoring System(OMS)”",
        "Participated in the project “development of marine environment real-time monitoring and prediction simulation for autonomous navigation ship”",
      ],
    },
    {
      year: 2019,
      content: [
        "Certified with AS 9100",
        "Selected as Small Giant company",
        "Developed “Management and Technology development of illegal fishing marine ecosystem based on multiple UAV “",
        "Developed “Development of digital transmitter based on tile conformation SoC/SIP for Active Phased Array system ”",
      ],
    },
    {
      year: 2018,
      content: [
        "Developed “ Broadband GaN PA MMIC and Export-Oriented Power Amplifier “",
        "Awarded with 19th Best Radio wave broadcasting technology",
        "Awarded $10 million Export Prize",
      ],
    },
  ];
  return (
    <Box>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

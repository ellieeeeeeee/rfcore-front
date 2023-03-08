import React from "react";
import { Box, List, ListItem, ListItemText, styled } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

interface Props {
  content?: any;
}
export default function TimeLine({ content }: Props) {
  console.log("content", content);
  return (
    <TimelineBox>
      <Timeline position="alternate">
        {content.map((item: any) => (
          <TimelineItem key={item.year}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box className="content-box">
                <h4 className="title">{item.year}</h4>
                <List>
                  {item.description.map((item: any, idx: number) => (
                    <ListItem key={idx}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </TimelineBox>
  );
}
const TimelineBox = styled(Box)(({ theme }) => ({
  ".MuiTimeline-root, .MuiTimelineContent-root, .MuiTimelineItem-root::before":
    {
      padding: 0,
    },
  ".MuiTimelineItem-root:nth-of-type(odd) .content-box": {
    padding: "0 0 0 10rem",
  },
  ".MuiTimelineItem-root:nth-of-type(even) .content-box": {
    padding: "0 10rem 0 0",
    span: {
      //   textAlign: "right",
    },
  },
  ".MuiTimelineDot-root": {
    background: "#FEBC08;",
    width: "1.5rem",
    height: "1.5rem",
    margin: 0,
    padding: 0,
    boxShadow: "none",
  },
  ".MuiTimelineConnector-root": {
    width: "0.1rem",
    backgroundColor: theme.palette.info.dark,
  },
  ".MuiTimelineItem-root:last-child .MuiTimelineConnector-root": {
    display: "none",
  },
  ".MuiListItemText-root": {
    margin: "0 0 4rem 0",
    span: {
      color: theme.palette.info.contrastText,
      fontSize: "2rem",
      lineHeight: "3rem",
      fontWeight: 400,
    },
  },
  ".content-box": {
    h4: {
      fontSize: "4.8rem",
      lineHeight: "7.2rem",
      fontWeight: 700,
      marginBottom: "2rem",
      color: theme.palette.info.main,
    },
    "ul,li": {
      padding: 0,
    },
  },
}));

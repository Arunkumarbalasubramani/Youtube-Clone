import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../export";
const Videos = ({ videos }) => {
  return (
    <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="start">
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;

import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "../Feed/Feed.scss";
import { Sidebar, Videos } from "../export";
import { fetchFromAPI } from "../../utils/fetchAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setvideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      className="feedContainer"
      sx={{ flexDirection: { sx: "column", md: "row" } }}
    >
      <Box className=" category-box">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2">
          Copyright © 2022
        </Typography>
      </Box>
      <Box className="feed-videos">
        <Typography className="feed-title" variant="h4" sx={{ mb: "20px" }}>
          {selectedCategory}
          <span className="feed-title-text"> Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;

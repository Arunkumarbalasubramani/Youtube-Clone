import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import UserActivity from "./UserActivity";

const Navbar = () => {
  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          top: "0",
          justifyContent: "space-between",
          background: "#000",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="youtube-logo" height={45} />
        </Link>
        <SearchBar />
        <UserActivity />
      </Stack>
      ;
    </div>
  );
};

export default Navbar;

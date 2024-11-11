import * as React from "react";
import logo from "../../assets/images/D Dental.png";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = (props) => {
  return (
    <div
      className="flex px-6 mx-10 mt-4 rounded-md drop-shadow bg-sky-300 
            justify-between items-center"
    >
      <div div className="p-5">
        <img src={logo} className="w-36 h-16" />
      </div>
      <div className="flex gap-32 mr-10">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <div className="flex gap-3">
          <Button
            variant="text"
            href="#outlined-buttons"
            sx={{
              fontSize: "14px",
              fontFamily: "Roboto Slab, serif",
              fontWeight: "600",
              color: "black",
              borderRadius: "10px",
              "&:hover": {
                color: "white",
                background: "#2576d0",
              },
            }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            href="#outlined-buttons"
            sx={{
              color: "white",
              fontSize: "14px",
              fontFamily: "Roboto Slab, serif",
              fontWeight: "600",
              borderRadius: "10px",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

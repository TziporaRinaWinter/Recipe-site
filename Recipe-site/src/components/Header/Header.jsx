import React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import {
  getAllCategoryNames,
  getCategoriesWithSubcategories,
} from "../../utils/categoryUtils";

const Header = ({ scrollContainerRef }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoriesWithSub, setCategoriesWithSub] = useState({});

  const [showHeader, setShowHeader] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  const lastScrollY = useRef(0);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const allCategories = getAllCategoryNames("he");
    const categoriesWithSub = getCategoriesWithSubcategories("he");

    setCategories(allCategories);
    setCategoriesWithSub(categoriesWithSub);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef?.current || window;

    const handleScroll = () => {
      const currentY =
        container === window ? window.scrollY : container.scrollTop;
      setScrolling(currentY > 0);

      if (currentY > lastScrollY.current && currentY > 100) {
        setShowHeader(false);
      } else if (currentY < lastScrollY.current) {
        setShowHeader(true);
      }

      lastScrollY.current = currentY;
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  const handleOpen = (event, menuId) => {
    clearTimeout(closeTimeoutRef.current);
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menuId);
  };

  const handleClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
      setCurrentMenu("");
    }, 100);
  };

  const cancelClose = () => {
    clearTimeout(closeTimeoutRef.current);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: showHeader ? 0 : "-80px",
        transition: "top 0.3s ease, background-color 0.3s ease",
        backgroundColor: scrolling ? "rgba(116, 95, 55, 0.45)" : "#7a61329c",
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" sx={{ marginLeft: 2 }}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {categories.map((category) => {
            const isDropdown = categoriesWithSub[category.id] !== undefined;

            return (
              <div
                key={category.id}
                onMouseEnter={(e) => {
                  if (isDropdown) {
                    handleOpen(e, category.id);
                    cancelClose();
                  }
                }}
                onMouseLeave={() => {
                  if (isDropdown) handleClose();
                }}
                style={{ display: "inline-block" }}
              >
                <Link
                  href={isDropdown ? undefined : `#${category.id}`}
                  sx={{
                    marginLeft: 4,
                    textDecoration: "none",
                    color: "white",
                    position: "relative",
                    fontFamily:
                      "system-ui, Avenir, Helvetica, Arial, sans-serif",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row-reverse",
                    cursor: isDropdown ? "pointer" : "default",
                    "&:hover": {
                      color: "white",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: "-8px",
                        right: "-8px",
                        bottom: "-8px",
                        height: "2.5px",
                        backgroundColor: "white",
                      },
                    },
                  }}
                >
                  {category.name}
                  {isDropdown && (
                    <ArrowDropDownIcon
                      sx={{ fontSize: "16px", marginLeft: 0.5 }}
                    />
                  )}
                </Link>

                {isDropdown && (
                  <Menu
                    anchorEl={anchorEl}
                    open={currentMenu === category.id}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": `${category.id}-button`,
                      onMouseEnter: cancelClose,
                      onMouseLeave: handleClose,
                    }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    PaperProps={{
                      sx: {
                        ml: 3,
                      },
                    }}
                    disableAutoFocusItem
                  >
                    {categoriesWithSub[category.id].subcategories.map(
                      (subcat) => (
                        <MenuItem
                          key={subcat.id}
                          component="a"
                          href={`/${subcat.id}`}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setAnchorEl(null);
                            setCurrentMenu("");
                          }}
                        >
                          {subcat.name}
                        </MenuItem>
                      )
                    )}
                  </Menu>
                )}
              </div>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import  React,{useEffect} from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {  useSelector  } from "react-redux";
import { getCategory, getBrand, deleteUser } from "../../api/todos/todos";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";





function CustomTabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
      const data = useSelector((store) => store.home.posts);
      const data1 = useSelector((store) => store.home.brands);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const dispatch = useDispatch();

  useEffect(() => {  
    dispatch(getCategory());
      dispatch(getBrand());
  }, [dispatch]) 
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <div className="grid grid-cols-4 gap-[120px] ">
          {data.map((e) => {
            return (
              <div
                className=" w-[70%] p-2 text-center shadow-lg shadow-black  "
                key={e.id}
              >
                <p
                  // onClick={() => setIdd(e.id)}
                  className="hover:bg-[white] hover:text-[#FFBE1F] overflow-auto cursor-pointer flex"
                >
                  {e.categoryName}
                </p>
                <img
                  className="m-[auto]"
                  src={`${import.meta.env.VITE_APP_FILES_URL}${
                    e.categoryImage
                  }`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="grid grid-cols-3 gap-7">
          <p className="w-[120px] font-bold cursor-pointer">+</p>
          {data1.map((el) => {
            
            return (
              <div
                className=" w-[70%] p-2 text-center shadow-sm shadow-black  "
                key={el.id}
              >
                <p className="hover:bg-[white] hover:text-[#FFBE1F] overflow-auto cursor-pointer flex">
                  {el.brandName}
                </p>
                <button onClick={() => dispatch(deleteUser(el.id))}>D</button>
              </div>
            );
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}


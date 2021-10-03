import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import "./index.css";

export default function CustomRating() {
  const [value, setValue] = React.useState(4.5);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        precision={0.5}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        emptyIcon={<StarIcon fontSize="inherit" />}
      />
    </Box>
  );
}

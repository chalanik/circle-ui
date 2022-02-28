import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./BenefitsCard.css";
import { CardActionArea } from "@mui/material";

export default function BenefitsCard({ image, title, text }) {
  //open a link in new window onclick
  const handleClick = (e) => {
    e.preventDefault();
    window.open(
      "https://www.morganstanley.com/articles/529-plans-ways-to-pay-for-college/",
      "_blank"
    );
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
        />
        <CardContent>
          <div className="benefits-card-title">{title}</div>
          <div className="benefits-card-description">{text}</div>
          <div className="learn-more">Learn more</div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

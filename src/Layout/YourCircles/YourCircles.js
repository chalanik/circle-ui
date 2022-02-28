import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import "./YourCircles.css";
import { getIconPath } from "../../Utility/Utils";

function YourCircles(props) {
  const { circles } = props;

  return (
    <Card className="your-circles">
      <CardContent>
        <div className="your-circles-heading">
          <div className="dashboard-heading">Your Circles</div>
          <div className="circle-manage-title">Manage</div>
        </div>
        {circles.map((circle) => (
          <div className="circle-name-container" key={circle._id}>
            <img src={getIconPath(circle.name)} alt={circle.name} />
            <Link className="circle-name-link" to={`/circle/${circle._id}`}>
              <div className="circle-name-title">{circle.name}</div>
            </Link>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default YourCircles;

import React from "react";
import "./Dashboard.css";
import Header from "../../Layout/Header/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Post from "../../Layout/Post/Post";
import YourCircles from "../../Layout/YourCircles/YourCircles";
import CTACard from "../../Layout/CTACard/CTACard";

const ctaProps = {
  title: "Open a 529",
  description: "Lorem ipsum lorem ipsum lorem ipsum",
  linkText: "Build a customized portfolio today",
  link: "",
};

function Dashboard() {
  return (
    <>
      <Header dashboard={"true"} />
      <div className="dashboard-container">
        <div className="dasboard-space-container"></div>
        <div className="dashboard-left-section">
          <YourCircles
            circlesArray={[
              "Education",
              "Financial planning / budgeting",
              "Nutrition",
              "Childcare",
              "Elderly Care",
              "Activities",
            ]}
          />

          <Card className="your-circles">
            <CardContent>
              <div className="dashboard-heading circle-trending-topic-header">
                Trending Topics
              </div>
              <div className="dashboard-trending-topics-subheading">
                Discover what's trending with your colleagues
              </div>
              <div className="circle-name-title circle-topics">
                Work life balance
              </div>
              <div className="circle-name-title circle-topics">Topic</div>
              <div className="circle-name-title circle-topics">Topic</div>
              <div className="circle-name-title circle-topics">Topic</div>
              <div className="circle-name-title circle-topics">Topic</div>
            </CardContent>
          </Card>
        </div>
        <div className="dashboard-right-section">
          <div className="dashboard-heading-container">
            <div className="dashboard-heading circles-conversation-heading">
              Conversations in your Circle
            </div>
            <div className="circle-sort-container">
              <span className="sort-by-text">Sort by</span>
              <Select
                className="circle-sort-select"
                value="Popular"
                // onChange={handleChange}
              >
                <MenuItem value={"Popular"}>Popular</MenuItem>
                <MenuItem value={"Latest"}>Latest</MenuItem>
              </Select>
            </div>
          </div>
          <div className="dashboard-post-container">
            <Post
              postTopic={"Education"}
              userName={"Jessica M."}
              postTimestamp={"Today 11:23 am"}
              postContent={
                "Thinking baout holding my son back from Kindergarten this year.Anyone lese doing the same?"
              }
            />

            <CTACard props={ctaProps}></CTACard>
            <div>
              <Post
                postTopic={"Nutrition"}
                userName={"Katie B."}
                postTimestamp={"Today 6 pm"}
                postContent={
                  "When did everyone start giving their baby solids?"
                }
              />
            </div>
          </div>
        </div>
        <div className="dasboard-space-container"></div>
      </div>
    </>
  );
}

export default Dashboard;

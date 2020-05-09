import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

//To fake data use faker
//semantic-ui.com styling framework
//To install use : semantic ui cdn

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="Nice blog!"
          avatar={faker.image.avatar}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Tom"
          timeAgo="Today at 1:35PM"
          comment="Cool page"
          avatar={faker.image.avatar}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Timmy"
          timeAgo="Yesterday at 5:00PM"
          comment="Amazing post!"
          avatar={faker.image.avatar}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="John"
          timeAgo="Yesterday at 3:15PM"
          comment="Niceeee"
          avatar={faker.image.avatar}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Yesterday at 1:45PM"
          comment="How did you do this?"
          avatar={faker.image.avatar}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

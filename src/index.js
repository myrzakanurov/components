import React from "react";
import ReactDOM from 'react-dom'
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from 'faker'

const App = function () {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    date="Today at 5:00AM"
                    text="This is awesome"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="John"
                    date="Today at 12:00 AM"
                    text="Some new comment"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Joan"
                    date="Yesterday at 9:00 AM"
                    text="Some great example"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
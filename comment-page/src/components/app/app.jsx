import React, {Component} from 'react';
import './app.css';
import CommentAdd from '../comment-add/comment-add';
import CommentList from '../comment-list/comment-list';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {username: '小明', commentContent: '评论语句1'},
                {username: '小华', commentContent: '评论语句2'},
                {username: '小刚', commentContent: '评论语句3'}
            ]

        }
    }

    addComment = (comment) => {
        const {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments});
    }
    deleteComment = (index) => {
        const {comments} = this.state;
        comments.splice(index, 1);
        this.setState({comments});
    }

    render() {
        return (
            <div className="outer-container">
                <CommentAdd addComment={this.addComment}/>
                <CommentList comments={this.state.comments} deleteComment={this.deleteComment}/>
            </div>
        )
    }
}
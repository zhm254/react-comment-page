import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CommentAdd extends Component {
    state = {
        username: '',
        commentContent: ''
    }
    handleSubmit = () => {
        const comment = this.state;
        this.props.addComment(comment);
        this.setState({
            username: '',
            commentContent: ''
        })
    }
    handleUsernameChange = (event) => {
        const username = event.target.value;
        this.setState({username});
    }
    handleCommentContentChange = (event) => {
        const commentContent = event.target.value;
        this.setState({commentContent});
    }

    render() {
        return (
            <div>
                <h2>请发表你的评论</h2>
                <div>用户名：</div>
                <div>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>评论：</div>
                <div>
                    <textarea cols="40" rows="10" value={this.state.commentContent}
                              onChange={this.handleCommentContentChange}></textarea>
                </div>
                <div>
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
            </div>
        )
    }
}
CommentAdd.propTypes = {
    addComment: PropTypes.func.isRequired
}
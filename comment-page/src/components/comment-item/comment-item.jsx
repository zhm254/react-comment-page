import React, {Component} from 'react';
import './comment-item.css';
import PropTypes from 'prop-types';

export default class CommentItem extends Component {
    handleDelete = () => {
        const {comment, deleteComment, index} = this.props
        if (window.confirm(`确定删除${comment.username}的评论吗？`)) {
            deleteComment(index);
        }
    }

    render() {
        return (
            <div className="comment-item">
                <div className="delete-button">
                    <button onClick={this.handleDelete}>删除</button>
                </div>
                <br/>
                <div>{this.props.comment.username}说：</div>
                <br/>
                <div>{this.props.comment.commentContent}</div>
                <br/>
            </div>
        )
    }
}
CommentItem.propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './comment-list.css';
import CommentItem from '../comment-item/comment-item';

export default class CommentList extends Component {
    render() {
        const display = this.props.comments.length === 0 ? 'block' : 'none';
        return (
            <div className="comment-list-container">
                <h2>评论列表</h2>
                <div className="comment-list">
                    <div style={{display}}>暂无评论，请通过左侧添加评论。</div>
                    {
                        this.props.comments.map((comment, index) => <CommentItem comment={comment} key={index}
                                                                                 deleteComment={this.props.deleteComment}
                                                                                 index={index}/>)
                    }
                </div>
            </div>
        )
    }
}
CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired
}
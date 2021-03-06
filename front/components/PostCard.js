import React, { useState, useCallback } from "react";
import { Card, Avatar, List, Comment, Popover, Button } from 'antd';
// import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import CommentForm from './CommentForm';
import MultiImages from "./MultiImages";
import OneTwoImages from "./OneTwoImages";
import PostCardContent from "../components/PostCardContent";
import { REMOVE_POST_REQUEST } from '../reducers/post';
import FollowButton from './FollowButton';




const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [liked, setLiked] = useState(false);

  const { me } = useSelector((state) => state.user);
  const id = me && me.id;

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    // console.log("삭제할 post id : ", post.id);

    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });

  }, []);

  return (
    <>
      <Card
        style={{ marginBottom: "20px" }}
        bodyStyle={{}}
        bordered={true}
        cover={
          post.Images.length <= 2 & post.Images.length != 0 ? (
            <OneTwoImages images={post.Images} />
          ) : <MultiImages images={post.Images} />

        }
        actions={[
          <RetweetOutlined key="retweet" />,
          // <HeartOutlined key="heart" onClick="" />,
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="message" onClick={onToggleComment} />,
          <Popover
            key="ellipsis"
            content={(
              <Button.Group>
                {id && post.User.id === id
                  ? (
                    <>
                      <Button>수정</Button>
                      <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                    </>
                  )
                  : <Button>신고</Button>}
              </Button.Group>
            )}
          >
            <EllipsisOutlined />
          </Popover>,]}
        extra={< FollowButton post={post} />}

      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>

      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          {/* 추가 */}
          <List
            header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />

        </>
      )}
    </>
  );
};

export default PostCard;

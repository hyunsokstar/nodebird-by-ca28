import React, { useState, useCallback } from "react";
import { Card, Avatar, List, Comment } from 'antd';
// import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import CommentForm from './CommentForm';
import MultiImages from "./MultiImages";
import OneTwoImages from "./OneTwoImages";


const PostCard = ({ post }) => {
  // console.log("post(PostCard) : ", post);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [liked, setLiked] = useState(false);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);


  return (
    <>
      <Card
        style={{ marginBottom: "20px" }}
        bodyStyle={{}}
        bordered={true}
        cover={
          post.Images.length <= 2 ? (
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
          <EllipsisOutlined />
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          description={post.content}
        />
      </Card>

      {commentFormOpened && (
        <>
          <CommentForm />
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

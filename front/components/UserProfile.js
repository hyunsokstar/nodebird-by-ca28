import { Avatar, Card, Button } from "antd";
import React, { useCallback } from "react";
import { LogoutButtonWrapper } from "./style/LogOutFormStyle";

// 추가 2
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';

const dummy = {
  nickname: "제로초",
  Post: [],
  Followings: [],
  Followers: [],
};

const UserProfile = ({ setIsLoggedIn }) => {
  // 추가
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);


  const onLogOut = useCallback(() => {
    // 수정
    // setIsLoggedIn(false);
    dispatch({
      type: LOG_OUT_REQUEST,
  });
  }, []);

  return (
    <div>
      <Card
        actions={[
          <div key="twit">
            짹짹
            <br />
            {me.Posts.length}
          </div>,
          <div key="following">
            팔로잉
            <br />
            {me.Followings.length}
          </div>,
          <div key="follower">
            팔로워
            <br />
            {me.Followers.length}
          </div>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{me.nickname[0]}</Avatar>}
          title={me.nickname}
        />
      </Card>
      <LogoutButtonWrapper>
        <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
      </LogoutButtonWrapper>
    </div>
  );
};

export default UserProfile;

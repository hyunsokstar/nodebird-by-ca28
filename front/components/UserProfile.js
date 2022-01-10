import { Avatar, Card, Button } from "antd";
import React, { useCallback } from "react";
import { LogoutButtonWrapper } from "./style/LogOutFormStyle";

// 추가 2
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const dummy = {
  nickname: "제로초",
  Post: [],
  Followings: [],
  Followers: [],
};

const UserProfile = ({ setIsLoggedIn }) => {
  // 추가
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    // 수정
    // setIsLoggedIn(false);
    dispatch(logoutAction());

  }, []);

  return (
    <div>
      <Card
        actions={[
          <div key="twit">
            짹짹
            <br />
            {dummy.Post.length}
          </div>,
          <div key="following">
            팔로잉
            <br />
            {dummy.Followings.length}
          </div>,
          <div key="follower">
            팔로워
            <br />
            {dummy.Followers.length}
          </div>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
          title={dummy.nickname}
        />
      </Card>
      <LogoutButtonWrapper>
        <Button onClick={onLogOut}>로그아웃</Button>
      </LogoutButtonWrapper>
    </div>
  );
};

export default UserProfile;

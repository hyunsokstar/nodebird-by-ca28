import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import profile_style from "./styles/Profile.module.css";
import FollowList from "../components/FollowList";

// 팔로잉(내가 팔로잉 하는 사람)
const followingList = [
  { nickname: "제로초" },
  { nickname: "장기효" },
  { nickname: "k덕배" },
];
// 팔로워(나를 팔로잉 하는 사람)
const followerList = [
  { nickname: "철수" },
  { nickname: "호빵맨" },
  { nickname: "이순신" },
];

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <div className={profile_style.searchInput}>
          <NicknameEditForm />
        </div>
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;

import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import Head from "next/head";
import { useSelector } from 'react-redux';
import PostCard from "../components/PostCard";


const Home = () => {
    const { mainPosts } = useSelector(state => state.post);
﻿
    return (
        <AppLayout>
            <Head>
                <title>Home</title>
            </Head>
            <PostForm />
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c.id} post={c} />
                );
            })}
            
        </AppLayout>
    );
};

export default Home;

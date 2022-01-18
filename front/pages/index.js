import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import Head from "next/head";
import { useSelector } from 'react-redux';
import PostCard from "../components/PostCard";


const Home = () => {
    const { mainPosts } = useSelector(state => state.post);
    const { me } = useSelector((state) => state.user);

    return (
        <AppLayout>
            <Head>
                <title>Home</title>
            </Head>
            {me && <PostForm />}
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c.id} post={c} />
                );
            })}
            
        </AppLayout>
    );
};

export default Home;

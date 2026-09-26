import { Card, Flex } from "antd"
import { useEffect, useState } from "react"
import cls from './PostPage.module.scss';
import { api } from '../../helpers/helpers';
import { useNavigate } from "react-router-dom";

const PostsPage = () => {

    const navigate = useNavigate()

    const [posts, setPosts] = useState([])

    const getAllPosts = async () => {
        try {
            const { data } = await api.get("/posts")

            setPosts(data?.posts)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        (async () => {
            getAllPosts()
        })()
    }, [])

    return (
        <div>
            <Flex wrap gap='24px' justify='center' align='center'>
                {posts?.slice(0, 5).map((post) => (
                    <Card key={post.id} className={cls.card} onClick={() => navigate(`/posts/${post?.id}`)}>
                        <span className={cls.span}>Card {post.id}</span>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </Card>
                ))}
        </Flex>
        </div >
    );
}

export default PostsPage;
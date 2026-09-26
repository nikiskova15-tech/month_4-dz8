import { Button, Card, Flex } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../helpers/helpers";
import NotFoundPostPage from "./NotFoundPostPage"

const PostPage = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    const [post, setPost] = useState(null)
    const [error, setError] = useState(false)

    const getSinglePost = async () => {
        try {
            const { data } = await api.get("/posts/" + id)

            setPost(data)
        } catch (e) {
            console.log(e);
            setError(true)
        }
    }

    useEffect(() => {
        (async () => {
            getSinglePost()
        })()
    }, [])

    if (error) {
        return <NotFoundPostPage />
    }

    return (
        <div>
            <h2>PostPage</h2>
            <Button onClick={() => navigate(-1)} type='primary' >Go Back</Button>
            <Card title={"Card" + post?.id}>
                <Flex justify="space-between" vertical>
                    <Flex gap='24px' justify="center" align="center">
                        {post?.tags?.map((tag) => (
                            <p key={tag}>#{tag}</p>
                        ))}</Flex>
                    <h3>Name: {post?.title}</h3>
                    <p>{post?.body}</p>
                </Flex>
            </Card>
        </div>
    );
}

export default PostPage;
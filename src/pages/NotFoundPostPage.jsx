import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFoundPostPage = () => {

    const navigate = useNavigate()

    return (
        <div style={{
                width: '300px',
                margin: '0 auto'
            }}>
            <h2>Пост не найден</h2>
            <Button onClick={() => navigate(-1)}>Go back</Button>
        </div>
    );
}

export default NotFoundPostPage;
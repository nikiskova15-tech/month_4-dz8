import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {

    const navigate = useNavigate()

    return (
        <div style={{
                width: '300px',
                margin: '0 auto'
            }}>
            <h2>404</h2>
            <Button onClick={() => navigate("/")}> To main page </Button>
        </div>
    );
}

export default NotFoundPage;
import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout.jsx"
import { lazy, Suspense } from "react"
import { Spin } from "antd"

const MainPage = lazy(() => import("./pages/MainPage.jsx"))
const AboutPage = lazy(() => import("./pages/AboutPage.jsx"))
const PostsPage = lazy(() => import("./pages/PostsPage/PostsPage"))
const PostPage = lazy(() => import("./pages/PostPage/PostPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"))


function App() {
    return (
        <Suspense fallback={
            <div className="spin">
                <Spin />
            </div>
        }>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/posts" element={<PostsPage />} />
                    <Route path="/posts/:id" element={<PostPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default App
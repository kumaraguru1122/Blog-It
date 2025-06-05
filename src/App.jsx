  import React, { useContext } from "react";
  import { Routes, Route, Navigate } from "react-router";
  import MainLayout from "./layouts/MainLayout";
  import Home from "./pages/Home";
  import About from "./pages/About";
  import Blogs from "./pages/Blogs";
  import BlogDetail from "./pages/BlogDetail";
  import Login from "./pages/Login";
  import Register from "./pages/Register";
  import BlogProvider from "./contexts/BlogContext";
  import ThemeProvider from "./contexts/ThemeContext";
  import UserProvider, { UserContext } from "./contexts/UserContext";
  import BlogEditor from "./pages/BlogEditor";
  import Profile from "./pages/Profile";

  const PrivateRoute = ({ children }) => {
    const { user,login,logout,register } = useContext(UserContext);
    console.log(user);
    
    return user ? children : <Navigate to="/login" />;
  };

  const App = () => {
    
    return (
      <ThemeProvider>
        <UserProvider>
          <BlogProvider>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<BlogDetail />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route
                  path="profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="editor"
                  element={
                    <PrivateRoute>
                      <BlogEditor />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="*"
                  element={
                    <h1 className="text-5xl font-bold text-center m-8">
                      404 not found
                    </h1>
                  }
                />
              </Route>
            </Routes>
          </BlogProvider> 
        </UserProvider>
      </ThemeProvider>
    );
  };

  export default App;

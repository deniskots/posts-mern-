import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Posts from "./pages/Posts";
import FullPost from "./pages/FullPost";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux";
import {fetchAuthMe} from "./redux/slices/auth";
import {useEffect} from "react";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAuthMe())
    }, []);

  return (
      <Layout>
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='register' element={<Register/>}/>
              <Route path='posts' element={<Posts/>}/>
              <Route path=':id' element={<FullPost/>}/>
              <Route path='new' element={<AddPost/>}/>
              <Route path=':id/edit' element={<EditPost/>}/>
          </Routes>

          <ToastContainer position='top-center'/>
      </Layout>
  )
}

export default App;

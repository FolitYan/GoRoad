import { Routes, Route, useNavigate, useLocation   } from 'react-router-dom';
import { useEffect, useState } from "react";
import Authorization from './Pages/Authorization';
import Registration from './Pages/Registration';
import Post from './Pages/Components/Post';
import PostPage from './Pages/PostPage';
import CreatePost from './Pages/CreatePost';
import ProfilePage from './Pages/ProfilePage';
import Home from './Pages/Home';
import LocationCard from './Pages/Components/LocationCard';
import SettingsPage from './Pages/SettingsPage';
import WishlistPage from './Pages/WishlistPage';
import CollectionDetail from './Pages/CollectionDetail';
import Header from './Pages/Components/Header';
import UserCard from './Pages/Components/UserCard';
import Lenta from './Pages/Lenta';
import Explore from './Pages/Explore';
import CollectionCard from './Pages/Components/CollectionCard';
import CommentCard from './Pages/Components/CommentCard';

export default function App() {

  const [auth, setAuth] = useState(false);
  
  const user = {
    avatar: 'https://img.championat.com/i/n/l/1672234512927335998.jpg',
    username: 'traveler'
  };

const checkAuth = async () => {
  try {
    const response = await fetch("https://localhost:7190/Account/isAuthorize", {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      setAuth(false);
      return; 
    }

    const text = await response.text(); 
    const result = text ? JSON.parse(text) : {};
    setAuth(true);
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
  }
};


 const navigate = useNavigate();
 const location = useLocation();

    useEffect(() => {
      checkAuth();
      if (auth && (location.pathname === "/authorization" || location.pathname === "/")) {
        navigate("/home"); 
      } 
    }, [auth, navigate]);

  const postsData = [
  {
    username: "Алексей",
    avatar: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    location: "Москва, Россия",
    locationLink: "/location/1",
    image: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    caption: "Посетил Красную площадь, невероятно красиво!",
    rating: 4.8,
    likes: 56,
    hashtags: ["travel", "moscow"],
    comments: [
      { username: "Мария", text: "Потрясающее место!" },
      { username: "Иван", text: "Тоже хочу туда поехать!" }
    ]
  },
  {
    username: "Мария",
    avatar: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    location: "Париж, Франция",
    locationLink: "/location/2",
    image: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    caption: "Эйфелева башня особенно прекрасна ночью!",
    rating: 4.6,
    likes: 74,
    hashtags: ["paris", "citylife"],
    comments: [
      { username: "Иван", text: "Хочу туда попасть!" },
      { username: "Алексей", text: "Невероятный вид!" }
    ]
  },
  {
    username: "Иван",
    avatar: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    location: "Бали, Индонезия",
    locationLink: "/location/3",
    image: "https://avatars.mds.yandex.net/i?id=b488467c51408dde3cf5f8e381d5af773e179e0e-11843429-images-thumbs&n=13",
    caption: "Лучший пляжный отдых, песок и солнце!",
    rating: 4.9,
    likes: 88,
    hashtags: ["beach", "bali"],
    comments: [
      { username: "Мария", text: "Обожаю пляжи!" },
      { username: "Андрей", text: "Выглядит потрясающе!" }
    ]
  },
  {
    username: "Ольга",
    avatar: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    location: "Рим, Италия",
    locationLink: "/location/4",
    image: "https://avatars.mds.yandex.net/i?id=c7653024dbb806bb2cd84e7fe4f1b85b2a38d06f-4944743-images-thumbs&n=13",
    caption: "Колизей впечатляет своими размерами!",
    rating: 4.7,
    likes: 65,
    hashtags: ["rome", "history"],
    comments: [
      { username: "Алексей", text: "Вдохновляющая архитектура!" },
      { username: "Иван", text: "Историческое место!" }
    ]
  },
  {
    username: "Дмитрий",
    avatar: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    location: "Нью-Йорк, США",
    locationLink: "/location/5",
    image: "https://avatars.mds.yandex.net/i?id=451adfa260c792fc2ddac886a2efa46f6ac340c7-10642623-images-thumbs&n=13",
    caption: "Таймс-сквер ночью — это волшебство!",
    rating: 4.5,
    likes: 59,
    hashtags: ["nyc", "citylife"],
    comments: [
      { username: "Мария", text: "Однажды побываю там!" },
      { username: "Ольга", text: "Город мечты!" }
    ]
  }
];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authorization" element={<Authorization setAuth = {setAuth}/>} />

        <Route path="/registration" element={<Registration />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/home" element={
          <>
          <Header user={auth.rez ? user : false} setAuth={setAuth} />
          <Lenta  posts={postsData}/>
          </>} />
        <Route path="/profile" element={
          <>
          <Header user={auth.rez ? user : false} setAuth={setAuth} />
          <ProfilePage />
          </>} />
        <Route path="/createpost" element={
          <>
          <Header user={auth.rez ? user : false} setAuth={setAuth} />
          <CreatePost />
          </>} />
        <Route path="/explore" element={
          <>
          <Header user={auth.rez ? user : false} setAuth={setAuth} />
          <Explore />
          </>} />
        <Route path="/settings" element={
          <>
          <Header user={auth.rez ? user : false} setAuth={setAuth} />
          <SettingsPage />
          </>} />
          <Route path="/location" element={<>
          <Header user={auth.rez ? user : false} setAuth={setAuth} />
          <LocationCard />
          </>} />
      </Routes>
    </div>
  );
}

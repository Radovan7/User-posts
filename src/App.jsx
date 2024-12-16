import Feed from "./components/UserPosts.jsx";
import FibonacciNumber from "./FibonacciNumber.jsx";
import Number from "./Number.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import UserPostsPage from "./pages/UserPostsPage.jsx";
import { ProbnaKomponenta } from "./components/ProbnaKomponenta.jsx";
import PostCard from "./PostCard.jsx";
import { SinglePostPage } from "./pages/SinglePostPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      {/* <ProbnaKomponenta /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:userId" element={<UserPostsPage />} />
        <Route path="/:userId/:postId" element={<SinglePostPage />} />
      </Routes>
      {/* <div>
        <Number initialNumber={10} />
        <Feed />
        {firstThousandNumbers
        .filter((staraVrednost) => {
          return staraVrednost % 2 === 0;
        })
        .map((staraVrednost) => {
          return <div>{staraVrednost}</div>;
        })}
        <FibonacciNumber arrayIndexProp={5} />
      </div> */}
    </BrowserRouter>
  );
};

export default App;

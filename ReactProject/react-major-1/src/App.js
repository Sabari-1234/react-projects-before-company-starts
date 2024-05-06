import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import './css/App.scss'
import EmojiMaker from "./pages/EmojiMaker";
import QuizApp from "./pages/QuizApp";
import WatchPage from "./pages/WatchPage";
import MultiStepForm from "./pages/MultiStepForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/Emoji Maker" element={<EmojiMaker/>} />
            <Route path="/Quiz App" element={<QuizApp/>} />
            <Route path="/Watch Page" element={<WatchPage/>} />
            <Route path="/Multi Step Form" element={<MultiStepForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

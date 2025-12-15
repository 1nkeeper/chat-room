import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥 ChatRoom</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Çıkış Yap</button>
  );
}

export default App;
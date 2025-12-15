import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className="sign-in-container">
      <button className="sign-in-btn" onClick={signInWithGoogle}>
        Google ile Giriş Yap
      </button>
      <p>Sohbet odasına katılmak için giriş yapın.</p>
    </div>
  );
}

export default SignIn;
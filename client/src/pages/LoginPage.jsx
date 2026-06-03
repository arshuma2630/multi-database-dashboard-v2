import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function LoginPage({ setUser }) {

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      setUser(result.user);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Multi Database Dashboard</h1>

      <button onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </div>
  );
}

export default LoginPage;
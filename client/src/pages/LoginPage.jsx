import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

function LoginPage({ user, setUser }) {

  const handleGoogleLogin = async () => {
    try {

      provider.setCustomParameters({
        prompt: "select_account"
      });

      const result = await signInWithPopup(
        auth,
        provider
      );

      setUser(result.user);

    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {

      await signOut(auth);

      setUser(null);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        background: "white",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "20px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      {user ? (
        <div>
          <h3>
            Welcome, {user.displayName}
          </h3>

          <p>
            {user.email}
          </p>

          <button
            onClick={handleLogout}
            style={{
              padding: "8px 15px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleGoogleLogin}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default LoginPage;
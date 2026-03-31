import { useEffect, useState } from "react";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";

import AuthForm from "./components/AuthForm";
import UserContent from "./components/UserContent";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
  <div className="container">
    {user ? <UserContent user={user} /> : <AuthForm />}
  </div>
);
}

export default App;
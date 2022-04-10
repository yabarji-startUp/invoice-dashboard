import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { supabase } from '../helpers/supabaseClient';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { createHashHistory } from 'history';

export const AuthContext = createContext({
  isLoggedIn: true,
  loginUser: ({ email, password }) => {}
});

function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(true);

  async function loginUser({ email, password }) {
    let { user, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });

    if (user) {
      setLoginStatus(true);
      navigate('/');
    } else {
      console.log(error);
    }
  }

  useEffect(() => {
    const session = supabase.auth.session();
    if (!session) {
      setLoginStatus(false);
    }

    const data = supabase.auth.onAuthStateChange(async (event, session) => {
      // console.log(event, session);
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') return;
      setLoginStatus(false);
    });
  }, [supabase.auth]);

  return (
    <AuthContext.Provider value={{ isLoggedIn: loginStatus, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
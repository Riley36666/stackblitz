import React, { useEffect, useState } from 'react';
import { AuthForm } from './components/AuthForm';
import { Dashboard } from './components/Dashboard';
import { supabase } from './lib/supabase';

function App() {
  const [session, setSession] = useState<boolean>(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(!!session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {!session ? (
        <div className="min-h-screen flex items-center justify-center px-4">
          <AuthForm onSuccess={() => setSession(true)} />
        </div>
      ) : (
        <Dashboard onSignOut={() => setSession(false)} />
      )}
    </div>
  );
}

export default App;
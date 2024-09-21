// src/hoc/withAuth.tsx
import { useEffect, useState } from 'react';

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        window.location.replace('/auth'); // Redirect to login page if not authenticated
      }
    }, []);

    if (!isLoggedIn) {
      return null; // Render nothing while redirecting
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
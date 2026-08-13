
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] =
    useState(false);
  const [authError, setAuthError] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [appPublicSettings, setAppPublicSettings] = useState(null);

  // Check login state when the application starts
  useEffect(() => {
    checkAppState();
  }, []);

  // Check whether a user is saved in localStorage
  const checkUserAuth = async () => {
    try {
      setIsLoadingAuth(true);
      setAuthError(null);

      const savedUser = localStorage.getItem("user");

      if (!savedUser) {
        setUser(null);
        setIsAuthenticated(false);
        return;
      }

      try {
        const parsedUser = JSON.parse(savedUser);

        if (parsedUser) {
          setUser(parsedUser);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (parseError) {
        console.error("Failed to parse saved user:", parseError);

        localStorage.removeItem("user");

        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("User authentication check failed:", error);

      setUser(null);
      setIsAuthenticated(false);

      setAuthError({
        type: "unknown",
        message: error.message || "Failed to check authentication",
      });
    } finally {
      setIsLoadingAuth(false);
      setAuthChecked(true);
    }
  };

  // Check the overall application state
  const checkAppState = async () => {
    try {
      setIsLoadingPublicSettings(false);
      setAuthError(null);

      await checkUserAuth();
    } catch (error) {
      console.error("Unexpected authentication error:", error);

      setAuthError({
        type: "unknown",
        message: error.message || "An unexpected error occurred",
      });

      setIsLoadingPublicSettings(false);
      setIsLoadingAuth(false);
      setAuthChecked(true);
    }
  };

  // Login helper
  const login = (userData) => {
    try {
      if (!userData) {
        throw new Error("No user data provided");
      }

      localStorage.setItem("user", JSON.stringify(userData));

      setUser(userData);
      setIsAuthenticated(true);
      setAuthError(null);
      setAuthChecked(true);

      return true;
    } catch (error) {
      console.error("Login failed:", error);

      setAuthError({
        type: "login_error",
        message: error.message || "Login failed",
      });

      return false;
    }
  };

  // Logout
  const logout = (shouldRedirect = true) => {
    try {
      localStorage.removeItem("user");

      // Also remove token if your login stores one
      localStorage.removeItem("token");
      localStorage.removeItem("authToken");

      setUser(null);
      setIsAuthenticated(false);
      setAuthError(null);
      setAuthChecked(true);

      if (shouldRedirect) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Navigate to login page
  const navigateToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,

        isAuthenticated,
        setIsAuthenticated,

        isLoadingAuth,
        isLoadingPublicSettings,

        authError,

        appPublicSettings,

        authChecked,

        login,
        logout,
        navigateToLogin,

        checkUserAuth,
        checkAppState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook for accessing authentication
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export default AuthContext;


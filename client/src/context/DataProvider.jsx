import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser.userId, "from dataProvider");
      setAccount(foundUser);
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

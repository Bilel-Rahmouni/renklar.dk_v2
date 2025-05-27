import { createContext, useState, useContext } from "react";

const SelectedServiceContext = createContext();

export const SelectedServiceProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState("home");
  return (
    <SelectedServiceContext.Provider value={{ selectedService, setSelectedService }}>
      {children}
    </SelectedServiceContext.Provider>
  );
};

export const useSelectedService = () => useContext(SelectedServiceContext); 
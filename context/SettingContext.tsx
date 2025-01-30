"use client";
import type React from "react";
import { createContext, useContext, useState } from "react";

interface SettingsContextType {
  toggled: boolean;
  setToggled: (value: boolean) => void;
  selectedLanguage: string;
  setSelectedLanguage: (value: string) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toggled, setToggled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <SettingsContext.Provider
      value={{
        toggled,
        setToggled,
        selectedLanguage,
        setSelectedLanguage,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

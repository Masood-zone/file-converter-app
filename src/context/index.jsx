import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
const FileContext = createContext();

export const useFileContext = () => useContext(FileContext);

export const FileProvider = ({ children }) => {
  const [file, setFile] = useState([]);
  const [response, setResponse] = useState(null);
  const addFile = (newFile, responseData = null) => {
    setFile([...file, { file: newFile, response: responseData }]);
  };
  const removeFile = (name) => {
    setFile(file.filter((f) => f.name !== name));
    toast.error("File removed!");
  };
  return (
    <FileContext.Provider
      value={{ file, addFile, removeFile, response, setResponse }}
    >
      {children}
    </FileContext.Provider>
  );
};

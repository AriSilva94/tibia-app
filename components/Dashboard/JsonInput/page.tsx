"use client";

import { SessionData } from "@/types/sessionData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { v4 as uuidv4 } from "uuid";

interface JsonInputProps {
  onJsonParse: (data: SessionData | null) => void;
  data: SessionData | null;
}

const JsonInput = ({ onJsonParse, data }: JsonInputProps) => {
  const [textareaValue, setTextareaValue] = useState<string>("");
  const [isDataModified, setIsDataModified] = useState<boolean>(false);
  const { user } = useAuth();

  useEffect(() => {
    if (data) {
      const jsonString = JSON.stringify(data, null, 2);
      setTextareaValue(jsonString);
    } else {
      setTextareaValue("");
    }
  }, [data]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.trim();
    setTextareaValue(value);
    setIsDataModified(value !== "");
    if (!value) {
      onJsonParse(null);
    } else {
      try {
        const parsedData: SessionData = JSON.parse(value);
        onJsonParse(parsedData);
        toast.success("JSON parsed successfully!");
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "Invalid JSON format";
        toast.error(`Error: ${errorMessage}`);
      }
    }
  };

  const handleSave = async () => {
    if (!user?.uid) {
      console.log("User is not logged in.");
      toast.error("User not logged in.");
      return;
    }

    if (textareaValue.trim() === "") {
      console.log("No data to save.");
      toast.error("No data to save.");
      return;
    }

    try {
      const parsedData: SessionData = JSON.parse(textareaValue.trim());
      const analyserId = uuidv4();
      const dataToSave = { ...parsedData, analyserId, uid: user.uid };

      const sessionRef = doc(db, "sessions", analyserId);
      await setDoc(sessionRef, dataToSave);

      toast.success("Data saved to Firestore successfully!");
      setIsDataModified(false);
    } catch (firebaseError) {
      console.log("Error during saving:", firebaseError);
      toast.error(
        "Error saving to Firestore: " +
          (firebaseError instanceof Error
            ? firebaseError.message
            : "Unknown error")
      );
    }
  };

  const handleClear = () => {
    setTextareaValue("");
    onJsonParse(null);
    setIsDataModified(false);
  };

  return (
    <div className={`${data ? "w-full" : "w-[1000px]"} mx-auto p-4`}>
      <textarea
        value={textareaValue}
        placeholder="Paste your JSON here..."
        className="text-[#000] font-mono rounded border border-[#81689D] overflow-hidden focus:overflow-visible w-full"
        onChange={handleInput}
        rows={data ? 30 : 20}
      />
      <div className="mt-4">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
          disabled={!isDataModified}
        >
          Save
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default JsonInput;

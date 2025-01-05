"use client";

import { useState, useEffect } from "react";
import JsonInput from "@/components/Dashboard/JsonInput/page";
import DataGrid from "@/components/Dashboard/DataGrid/page";
import { SessionData } from "@/types/sessionData";
import { useAuth } from "@/context/AuthContext";
import SignInPage from "@/app/auth/sign-in/page";
import { db } from "@/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Dashboard() {
  const { user } = useAuth();
  const [parsedData, setParsedData] = useState<SessionData | null>(null);

  const isValidSessionData = (data: object): data is SessionData => {
    return (
      typeof data === "object" &&
      data !== null &&
      "Balance" in data &&
      "Damage" in data
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.uid) return;

      try {
        const q = query(
          collection(db, "sessions"),
          where("uid", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        const documents = querySnapshot.docs;

        if (documents.length > 0) {
          const docData = documents[0].data();
          console.log("docData", docData);
          setParsedData(docData as SessionData);
        } else {
          setParsedData(null);
        }
      } catch (error) {
        toast.error(
          "Error fetching data from Firestore: " +
            (error instanceof Error ? error.message : "Unknown error")
        );
      }
    };

    fetchData();
  }, [user?.uid]);

  if (!user) {
    return <SignInPage />;
  }

  return (
    <div className="flex min-h-screen">
      <JsonInput
        onJsonParse={(data) => {
          if (data && isValidSessionData(data)) {
            setParsedData(data);
          } else {
            setParsedData(null);
          }
        }}
        data={parsedData}
      />
      <DataGrid data={parsedData} />
    </div>
  );
}

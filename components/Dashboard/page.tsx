"use client";

import { useState } from "react";
import JsonInput from "@/components/Dashboard/JsonInput/page";
import DataGrid from "@/components/Dashboard/DataGrid/page";
import { SessionData } from "@/types/sessionData";

export default function Dashboard() {
  const [parsedData, setParsedData] = useState<SessionData | null>(null);

  const isValidSessionData = (data: object): data is SessionData => {
    return (
      typeof data === "object" &&
      data !== null &&
      "Balance" in data &&
      "Damage" in data
    );
  };

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

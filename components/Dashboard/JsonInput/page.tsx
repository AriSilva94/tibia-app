import { SessionData } from "@/types/sessionData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface JsonInputProps {
  onJsonParse: (data: SessionData | null) => void;
  data: SessionData | null;
}

const JsonInput = ({ onJsonParse, data }: JsonInputProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.trim();

    if (!value) {
      onJsonParse(null);
      return;
    }

    try {
      const parsedData: SessionData = JSON.parse(value);
      onJsonParse(parsedData);
      toast.success("JSON parsed successfully!");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Invalid JSON format";
      toast.error(`Error: ${errorMessage}`);
    }
  };

  return (
    <div className={`${data ? "w-full" : "w-[1000px]"} mx-auto p-4`}>
      <textarea
        placeholder="Paste your JSON here..."
        className="text-[#000] font-mono rounded border border-[#81689D] overflow-hidden focus:overflow-visible w-full"
        onChange={handleInput}
        rows={data ? 30 : 20}
      />
    </div>
  );
};

export default JsonInput;

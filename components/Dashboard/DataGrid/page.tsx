import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SessionData } from "@/types/sessionData";
import Image from "next/image";

interface DataGridProps {
  data: SessionData | null;
}

const DataGrid: React.FC<DataGridProps> = ({ data }) => {
  if (!data) return null;

  const formatCreatureName = (name: string) =>
    name.toLowerCase().replace(/\s+/g, "_");

  const getCreatureImage = (name: string) => {
    const formattedName = formatCreatureName(name);
    return `/assets/creatures/${formattedName}.gif`;
  };

  const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
    title,
    children,
  }) => (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );

  const GridItem: React.FC<{
    name: string;
    count: number;
    imageUrl?: string;
    title?: string;
  }> = ({ name, count, imageUrl, title }) => (
    <div className="p-2 bg-secondary rounded-lg text-center flex flex-col items-center justify-center">
      <div className="w-auto">
        <span
          className={`${
            title === "Looted Items" ? "text-lg" : "text-3xl"
          } font-medium capitalize`}
        >
          {name}
        </span>
      </div>

      <div className="flex w-auto items-end justify-center">
        <small className="text-xs text-[#EB8317]">{count}x </small>
        {imageUrl && (
          <Image
            unoptimized
            src={imageUrl}
            alt={name}
            width={16}
            height={16}
            className="w-16 h-16 object-cover rounded-full mx-auto"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Session Info */}
      <Section title="Session Information ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Session start", "Session end", "Session length"].map((key) => (
            <div
              key={key}
              className={`rounded p-1 ${
                key === "Session length" ? "bg-[#F3C623]" : ""
              }`}
            >
              <p className="text-[#000] font-medium">{key}</p>
              {/* Corrigido o tipo de acesso ao dado */}
              <p className="font-medium">
                {data[key as keyof SessionData] as string}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section title="Combat Statistics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              key: "XP Gain",
              img: "/assets/items/experience_icon.gif",
              size: 16,
            },
            { key: "XP/h", img: "/assets/items/pld_clock.gif", size: 16 },
            { key: "Balance", img: "/assets/items/gold_coin.gif", size: 16 },
            {
              key: "Damage",
              img: "/assets/items/fist_fighting_icon.gif",
              size: 16,
            },
          ].map(({ key, img, size = 0 }) => (
            <div key={key}>
              <div className="flex items-center">
                <span className="text-muted-foreground pr-2">{key}</span>
                {img && (
                  <Image
                    unoptimized
                    src={img}
                    width={size || undefined}
                    height={size || undefined}
                    alt="creature gif"
                  />
                )}
              </div>
              <p
                className={`font-medium ${
                  key === "Balance"
                    ? parseFloat(
                        String(data[key as keyof SessionData]).replace(",", "")
                      ) > 0
                      ? "text-green-600"
                      : "text-red-600"
                    : "text-black"
                }`}
              >
                {data[key as keyof SessionData] as string}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Killed Monsters */}
      <Section title="Killed Monsters">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data["Killed Monsters"].map((monster, index) => (
            <GridItem
              key={index}
              name={monster.Name}
              count={monster.Count}
              imageUrl={getCreatureImage(monster.Name)}
            />
          ))}
        </div>
      </Section>

      {/* Looted Items */}
      <Section title="Looted Items">
        <div className="grid grid-cols-2">
          {data["Looted Items"].map((item, index) => (
            <GridItem
              key={index}
              name={item.Name}
              count={item.Count}
              title="Looted Items"
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default DataGrid;

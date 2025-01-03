import PageWithAds from "@/components/PageWithAds/page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <PageWithAds>{children}</PageWithAds>
    </div>
  );
}

import RedesignedDashboard from "@/components/RedesignedDashboard";

export default function BrandPage({ params }: { params: { brandId: string } }) {
  return <RedesignedDashboard brandId={params.brandId} />;
}

import OpenSourceHero from "@/components/open-source/Hero";
import OpenSourceContent from "@/components/open-source/Content";

export const metadata = {
  title: "Open Source - mdesk.tech",
  description:
    "We love open source projects and offer free website development for selected projects.",
};

export default function OpenSourcePage() {
  return (
    <div className="bg-background text-foreground">
      <OpenSourceHero />
      <OpenSourceContent />
    </div>
  );
}

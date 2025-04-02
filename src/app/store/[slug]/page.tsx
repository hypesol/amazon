import fs from "fs";
import path from "path";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionGridMoreExplore from "@/components/SectionGridMoreExplore/SectionGridMoreExplore";

// Generate static paths dynamically based on available JSON files
export async function generateStaticParams() {
  const directoryPath = path.join(process.cwd(), "public", "data", "coupons");

  try {
    const files = fs.readdirSync(directoryPath); // Get all filenames in the directory
    const slugs = files
      .filter((file) => file.endsWith(".json")) // Only JSON files
      .map((file) => file.replace(".json", "")); // Remove `.json` extension

    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error("Error reading slugs from directory:", error);
    return []; // Return empty array if there's an issue
  }
}

// Fetch coupons data from the local JSON file
async function getCoupons(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "public", "data", "coupons", `${slug}.json`);

    if (!fs.existsSync(filePath)) {
      return null; // File does not exist
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error fetching coupons for ${slug}:`, error);
    return null;
  }
}

// Static Page Component
export default async function PageStore({ params }: { params: { slug: string } }) {
  const coupons = await getCoupons(params.slug);

  if (!coupons) {
    return <div className="text-center text-red-500 py-10">{`No coupons found for "${params.slug}".`}</div>;
  }

  return (
    <div className="nc-PageHome relative overflow-hidden">
      {/* <div>Store Slug: {params.slug}</div> */}
      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <SectionGridMoreExplore data={coupons} />
        </div>
      </div>
    </div>
  );
}

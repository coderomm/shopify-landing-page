import { PROJECTS_DATA } from "@/data/resume";
import { NextResponse } from "next/server";

export async function GET() {
  const projectsURLs = PROJECTS_DATA.map((p) => p.link);

  return new NextResponse(
    JSON.stringify(projectsURLs, null, 2),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
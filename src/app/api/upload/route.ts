import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs";

const execAsync = promisify(exec);
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const image = formData.get("image") as Blob;
  if (!image) {
    return NextResponse.json({ message: "No image provided" }, { status: 400 });
  }
  try {
    const imagePath = "python/uploads/image.jpg";
    fs.writeFileSync(imagePath, Buffer.from(await image.arrayBuffer()));
    const { stdout } = await execAsync(`py -3.12 python/run.py`);
    console.log("Python script output:", stdout);
    return NextResponse.json(
      { message: "Image uploaded successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { message: "Error uploading image" },
      { status: 500 }
    );
  }
}

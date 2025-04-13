import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs";

const execAsync = promisify(exec);
export async function POST(req: Request) {
  const { image } = await req.json();
  if (!image) {
    return Response.json({ message: "No image provided" }, { status: 400 });
  }
  try {
    const imagePath = "python/uploads/image.jpg";
    fs.writeFileSync(imagePath, image, { encoding: "base64" });
    const { stdout } = await execAsync(`py -3.12 python/run.py`);
    return Response.json(
      { message: "Image uploaded successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading image:", error);
    return Response.json({ message: "Error uploading image" }, { status: 500 });
  }
}

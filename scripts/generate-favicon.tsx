import fs from "fs/promises";
import path from "path";
import { createCanvas, registerFont } from "canvas";

async function generateFavicon() {
  try {
    const fontPath = path.resolve(
      process.cwd(),
      "./app/fonts/Geist-Regular.ttf",
    );
    registerFont(fontPath, { family: "GeistVF" });
    console.log("✅ Registered GeistVF font");

    const size = 32;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, size, size);

    ctx.save();
    ctx.translate(size / 2, size / 2);
    ctx.rotate((45 * Math.PI) / 180);
    const gradient1 = ctx.createLinearGradient(
      -size / 3,
      -size / 3,
      size / 3,
      size / 3,
    );
    gradient1.addColorStop(0, "#6366f1");
    gradient1.addColorStop(1, "#a855f7");
    ctx.fillStyle = gradient1;
    const squareSize = size * 0.6;
    ctx.fillRect(-squareSize / 2, -squareSize / 2, squareSize, squareSize);
    ctx.restore();

    ctx.save();
    ctx.translate(size / 2, size / 2);
    ctx.rotate((12 * Math.PI) / 180);
    const gradient2 = ctx.createLinearGradient(
      -size / 3,
      size / 3,
      size / 3,
      -size / 3,
    );
    gradient2.addColorStop(0, "#6366f1");
    gradient2.addColorStop(1, "#a855f7");
    ctx.fillStyle = gradient2;
    ctx.globalAlpha = 0.7;
    ctx.fillRect(-squareSize / 2, -squareSize / 2, squareSize, squareSize);
    ctx.restore();

    ctx.fillStyle = "#000000";
    ctx.globalAlpha = 1;
    const innerSize = size * 0.4;
    ctx.fillRect(
      size / 2 - innerSize / 2,
      size / 2 - innerSize / 2,
      innerSize,
      innerSize,
    );

    ctx.fillStyle = "#FFFFFF";
    ctx.font = `bold ${innerSize * 0.6}px GeistVF`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("m", size / 2, size / 2 + 1);

    const publicDir = path.resolve(process.cwd(), "public");
    await fs.mkdir(publicDir, { recursive: true });

    const buffer = canvas.toBuffer("image/png");
    await fs.writeFile(path.join(publicDir, "favicon.png"), buffer);

    console.log("✅ Favicon generated successfully at public/favicon.png");

    const appleSize = 180;
    const appleCanvas = createCanvas(appleSize, appleSize);
    const appleCtx = appleCanvas.getContext("2d");

    appleCtx.fillStyle = "#000000";
    appleCtx.fillRect(0, 0, appleSize, appleSize);

    appleCtx.save();
    appleCtx.translate(appleSize / 2, appleSize / 2);
    appleCtx.rotate((45 * Math.PI) / 180);
    const appleGradient1 = appleCtx.createLinearGradient(
      -appleSize / 3,
      -appleSize / 3,
      appleSize / 3,
      appleSize / 3,
    );
    appleGradient1.addColorStop(0, "#6366f1");
    appleGradient1.addColorStop(1, "#a855f7");
    appleCtx.fillStyle = appleGradient1;
    const appleSquareSize = appleSize * 0.6;
    appleCtx.fillRect(
      -appleSquareSize / 2,
      -appleSquareSize / 2,
      appleSquareSize,
      appleSquareSize,
    );
    appleCtx.restore();

    appleCtx.save();
    appleCtx.translate(appleSize / 2, appleSize / 2);
    appleCtx.rotate((12 * Math.PI) / 180);
    const appleGradient2 = appleCtx.createLinearGradient(
      -appleSize / 3,
      appleSize / 3,
      appleSize / 3,
      -appleSize / 3,
    );
    appleGradient2.addColorStop(0, "#6366f1");
    appleGradient2.addColorStop(1, "#a855f7");
    appleCtx.fillStyle = appleGradient2;
    appleCtx.globalAlpha = 0.7;
    appleCtx.fillRect(
      -appleSquareSize / 2,
      -appleSquareSize / 2,
      appleSquareSize,
      appleSquareSize,
    );
    appleCtx.restore();

    appleCtx.fillStyle = "#000000";
    appleCtx.globalAlpha = 1;
    const appleInnerSize = appleSize * 0.4;
    appleCtx.fillRect(
      appleSize / 2 - appleInnerSize / 2,
      appleSize / 2 - appleInnerSize / 2,
      appleInnerSize,
      appleInnerSize,
    );

    appleCtx.fillStyle = "#FFFFFF";
    appleCtx.font = `bold ${appleInnerSize * 0.6}px GeistVF`;
    appleCtx.textAlign = "center";
    appleCtx.textBaseline = "middle";
    appleCtx.fillText("m", appleSize / 2, appleSize / 2 + 5);

    const appleBuffer = appleCanvas.toBuffer("image/png");
    await fs.writeFile(
      path.join(publicDir, "apple-touch-icon.png"),
      appleBuffer,
    );

    console.log(
      "✅ Apple touch icon generated successfully at public/apple-touch-icon.png",
    );

    const icoSizes = [16, 24, 32, 48, 64];

    for (const icoSize of icoSizes) {
      const icoCanvas = createCanvas(icoSize, icoSize);
      const icoCtx = icoCanvas.getContext("2d");

      icoCtx.fillStyle = "#000000";
      icoCtx.fillRect(0, 0, icoSize, icoSize);

      icoCtx.save();
      icoCtx.translate(icoSize / 2, icoSize / 2);
      icoCtx.rotate((45 * Math.PI) / 180);
      const icoGradient1 = icoCtx.createLinearGradient(
        -icoSize / 3,
        -icoSize / 3,
        icoSize / 3,
        icoSize / 3,
      );
      icoGradient1.addColorStop(0, "#6366f1");
      icoGradient1.addColorStop(1, "#a855f7");
      icoCtx.fillStyle = icoGradient1;
      const icoSquareSize = icoSize * 0.6;
      icoCtx.fillRect(
        -icoSquareSize / 2,
        -icoSquareSize / 2,
        icoSquareSize,
        icoSquareSize,
      );
      icoCtx.restore();

      icoCtx.save();
      icoCtx.translate(icoSize / 2, icoSize / 2);
      icoCtx.rotate((12 * Math.PI) / 180);
      const icoGradient2 = icoCtx.createLinearGradient(
        -icoSize / 3,
        icoSize / 3,
        icoSize / 3,
        -icoSize / 3,
      );
      icoGradient2.addColorStop(0, "#6366f1");
      icoGradient2.addColorStop(1, "#a855f7");
      icoCtx.fillStyle = icoGradient2;
      icoCtx.globalAlpha = 0.7;
      icoCtx.fillRect(
        -icoSquareSize / 2,
        -icoSquareSize / 2,
        icoSquareSize,
        icoSquareSize,
      );
      icoCtx.restore();

      icoCtx.fillStyle = "#000000";
      icoCtx.globalAlpha = 1;
      const icoInnerSize = icoSize * 0.4;
      icoCtx.fillRect(
        icoSize / 2 - icoInnerSize / 2,
        icoSize / 2 - icoInnerSize / 2,
        icoInnerSize,
        icoInnerSize,
      );

      icoCtx.fillStyle = "#FFFFFF";
      icoCtx.font = `bold ${icoInnerSize * 0.6}px GeistVF`;
      icoCtx.textAlign = "center";
      icoCtx.textBaseline = "middle";
      const yOffset = icoSize <= 24 ? 1 : icoSize <= 48 ? 2 : 3;
      icoCtx.fillText("m", icoSize / 2, icoSize / 2 + yOffset);

      const icoBuffer = icoCanvas.toBuffer("image/png");
      await fs.writeFile(
        path.join(publicDir, `favicon-${icoSize}.png`),
        icoBuffer,
      );
    }

    console.log("✅ Multiple favicon sizes generated");

    const ogWidth = 1200;
    const ogHeight = 630;
    const ogCanvas = createCanvas(ogWidth, ogHeight);
    const ogCtx = ogCanvas.getContext("2d");

    ogCtx.fillStyle = "#0f1117";
    ogCtx.fillRect(0, 0, ogWidth, ogHeight);

    ogCtx.fillStyle = "rgba(99, 102, 241, 0.15)";
    for (let x = 0; x < ogWidth; x += 100) {
      for (let y = 0; y < ogHeight; y += 100) {
        ogCtx.beginPath();
        ogCtx.arc(x + 25, y + 25, 2, 0, Math.PI * 2);
        ogCtx.fill();
      }
    }

    ogCtx.fillStyle = "rgba(168, 85, 247, 0.15)";
    for (let x = 0; x < ogWidth; x += 100) {
      for (let y = 0; y < ogHeight; y += 100) {
        ogCtx.beginPath();
        ogCtx.arc(x + 75, y + 75, 2, 0, Math.PI * 2);
        ogCtx.fill();
      }
    }

    ogCtx.save();
    const orb1 = ogCtx.createRadialGradient(
      ogWidth * 0.3,
      ogHeight * 0.5,
      0,
      ogWidth * 0.3,
      ogHeight * 0.5,
      400,
    );
    orb1.addColorStop(0, "rgba(99, 102, 241, 0.2)");
    orb1.addColorStop(0.5, "rgba(168, 85, 247, 0.1)");
    orb1.addColorStop(0.8, "transparent");

    ogCtx.fillStyle = orb1;
    ogCtx.globalAlpha = 0.6;
    ogCtx.beginPath();
    ogCtx.arc(ogWidth * 0.3, ogHeight * 0.5, 400, 0, Math.PI * 2);
    ogCtx.fill();
    ogCtx.restore();

    ogCtx.save();
    const orb2 = ogCtx.createRadialGradient(
      ogWidth * 0.8,
      ogHeight * 0.8,
      0,
      ogWidth * 0.8,
      ogHeight * 0.8,
      300,
    );
    orb2.addColorStop(0, "rgba(168, 85, 247, 0.2)");
    orb2.addColorStop(0.5, "rgba(99, 102, 241, 0.1)");
    orb2.addColorStop(0.8, "transparent");

    ogCtx.fillStyle = orb2;
    ogCtx.globalAlpha = 0.5;
    ogCtx.beginPath();
    ogCtx.arc(ogWidth * 0.8, ogHeight * 0.8, 300, 0, Math.PI * 2);
    ogCtx.fill();
    ogCtx.restore();

    const logoSize = 80;

    ogCtx.save();
    ogCtx.translate(ogWidth * 0.5 - 100, ogHeight * 0.5 - 150);
    ogCtx.rotate((45 * Math.PI) / 180);
    const logoGradient1 = ogCtx.createLinearGradient(
      -logoSize / 2,
      -logoSize / 2,
      logoSize / 2,
      logoSize / 2,
    );
    logoGradient1.addColorStop(0, "#6366f1");
    logoGradient1.addColorStop(1, "#a855f7");
    ogCtx.fillStyle = logoGradient1;
    ogCtx.fillRect(-logoSize / 2, -logoSize / 2, logoSize, logoSize);
    ogCtx.restore();

    ogCtx.save();
    ogCtx.translate(ogWidth * 0.5 - 100, ogHeight * 0.5 - 150);
    ogCtx.rotate((12 * Math.PI) / 180);
    const logoGradient2 = ogCtx.createLinearGradient(
      -logoSize / 2,
      logoSize / 2,
      logoSize / 2,
      -logoSize / 2,
    );
    logoGradient2.addColorStop(0, "#6366f1");
    logoGradient2.addColorStop(1, "#a855f7");
    ogCtx.fillStyle = logoGradient2;
    ogCtx.globalAlpha = 0.7;
    ogCtx.fillRect(-logoSize / 2, -logoSize / 2, logoSize, logoSize);
    ogCtx.restore();

    ogCtx.fillStyle = "#0f1117";
    ogCtx.globalAlpha = 1;
    const logoInnerSize = logoSize * 0.8;
    ogCtx.fillRect(
      ogWidth * 0.5 - 100 - logoInnerSize / 2,
      ogHeight * 0.5 - 150 - logoInnerSize / 2,
      logoInnerSize,
      logoInnerSize,
    );

    ogCtx.fillStyle = "#FFFFFF";
    ogCtx.font = `bold ${logoInnerSize * 0.6}px GeistVF`;
    ogCtx.textAlign = "center";
    ogCtx.textBaseline = "middle";
    ogCtx.fillText("m", ogWidth * 0.5 - 100, ogHeight * 0.5 - 150 + 5);

    const gradient = ogCtx.createLinearGradient(
      ogWidth * 0.5 - 50,
      ogHeight * 0.5 - 150,
      ogWidth * 0.5 + 150,
      ogHeight * 0.5 - 150,
    );
    gradient.addColorStop(0, "#6366f1");
    gradient.addColorStop(1, "#a855f7");

    ogCtx.fillStyle = gradient;
    ogCtx.font = `bold 48px GeistVF`;
    ogCtx.textAlign = "left";
    ogCtx.textBaseline = "middle";
    ogCtx.fillText("mdesk.tech", ogWidth * 0.5 - 50, ogHeight * 0.5 - 150);

    ogCtx.fillStyle = "#FFFFFF";
    ogCtx.font = `bold 64px GeistVF`;
    ogCtx.textAlign = "center";
    ogCtx.textBaseline = "middle";
    ogCtx.fillText("Designing Your", ogWidth * 0.5, ogHeight * 0.5 - 30);

    const headlineGradient = ogCtx.createLinearGradient(
      ogWidth * 0.5 - 200,
      ogHeight * 0.5 + 40,
      ogWidth * 0.5 + 200,
      ogHeight * 0.5 + 40,
    );
    headlineGradient.addColorStop(0, "#6366f1");
    headlineGradient.addColorStop(1, "#a855f7");

    ogCtx.fillStyle = headlineGradient;
    ogCtx.font = `bold 64px GeistVF`;
    ogCtx.textAlign = "center";
    ogCtx.textBaseline = "middle";
    ogCtx.fillText("Digital Future", ogWidth * 0.5, ogHeight * 0.5 + 40);

    ogCtx.fillStyle = "#a1a1aa";
    ogCtx.font = `24px GeistVF`;
    ogCtx.textAlign = "center";
    ogCtx.textBaseline = "middle";
    ogCtx.fillText(
      "Cutting-edge web design and reliable hosting solutions for businesses that want to stand out",
      ogWidth * 0.5,
      ogHeight * 0.5 + 100,
    );

    const ogBuffer = ogCanvas.toBuffer("image/png");
    await fs.writeFile(path.join(publicDir, "og-image.png"), ogBuffer);

    console.log("✅ OG image generated successfully at public/og-image.png");
  } catch (error) {
    console.error("Error generating assets:", error);
  }
}

generateFavicon();

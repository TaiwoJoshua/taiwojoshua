const fs = require("fs");
const path = require("path");
const projects = require("./public/projects.json");

const proj = {};

function getFiles(folderPath) {
  return fs
    .readdirSync(folderPath)
    .filter((f) => /\.(png|jpe?g|gif|webp)$/i.test(f));
}

function renameFiles(files, folderPath, getNewNameFn) {
  files.forEach((file, index) => {
    const ext = path.extname(file);
    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, getNewNameFn(index, ext));

    if (oldPath !== newPath) fs.renameSync(oldPath, newPath);
  });
}

projects.forEach((project) => {
  const folderPath = path.join("./public/images", project.folder);

  if (!fs.existsSync(folderPath)) {
    console.warn(`Folder missing: ${folderPath}`);
    return;
  }

  // 1️⃣ READ ALL CURRENT FILES
  let files = getFiles(folderPath);

  // 2️⃣ FIRST PASS — rename to tmp_X.ext
  renameFiles(files, folderPath, (i, ext) => `tmp_${i}${ext}`);

  // 3️⃣ SECOND PASS — rename tmp_X.ext → 1.ext, 2.ext, ...
  const tmpFiles = getFiles(folderPath)
    .filter((f) => f.startsWith("tmp_"))
    .sort((a, b) => {
      const numA = parseInt(a.split("_")[1]);
      const numB = parseInt(b.split("_")[1]);
      return numA - numB;
    });

  renameFiles(tmpFiles, folderPath, (i, ext) => `${i + 1}${ext}`);

  // 4️⃣ FINAL SORTED LIST
  const finalImages = getFiles(folderPath).sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0], 10);
    const numB = parseInt(b.match(/\d+/)[0], 10);
    return numA - numB;
  });

  proj[project.folder] = finalImages;
});

// 5️⃣ SAVE OUTPUT JSON
fs.writeFileSync("./public/images.json", JSON.stringify(proj, null, 2));

console.log("Image processing complete!");

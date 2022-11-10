import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { existsSync, mkdirSync, writeFileSync } from "fs";
const __dirname = fileURLToPath(dirname(import.meta.url));

const views = [
  "9d14c9773bbfc0760a68f2879091acfa",
  "0e380c7e7bb1178ca434122bca5ba0b9",
  "10b8a577d5ccf544cb371db2dc827bf4",
  "ed3ce004536b755025fbd19526fc1483",
  "c35cc58b56aa56aca26529a557e5b87b",
  "448ba934ffd677adbeeb24ade0c0acbe",
  "99e77c27589aa8f3d14f48716e4e6c89",
  "9015b0f4cf0f2edc50b0c8a3a4fce88b]",
];

const targetFolder = join(__dirname, "html/views");

for (let view of views) {
  console.log(view);
  const viewFolder = join(targetFolder, view);
  if (!existsSync(viewFolder)) {
    mkdirSync(viewFolder);
  }
  const uploadFolder = join(targetFolder, view, "upload");
  if (!existsSync(uploadFolder)) {
    mkdirSync(uploadFolder);
  }

  const viewResponse = await fetch(
    `https://couch.cheminfo.org/cheminfo-public/${view}`
  );
  const viewJSON = await viewResponse.json();
  const attachments = viewJSON._attachments;

  for (let attachment in attachments) {
    console.log(attachment);
    const response = await fetch(
      `https://couch.cheminfo.org/cheminfo-public/${view}/` + attachment
    );
    if (response.content_type === "application/json") {
      const json = await response.json();
      writeFileSync(join(viewFolder, attachment), JSON.stringify(json), "utf8");
    } else {
      const data = await response.arrayBuffer();
      writeFileSync(join(viewFolder, attachment), Buffer.from(data), "binary");
    }
  }
}

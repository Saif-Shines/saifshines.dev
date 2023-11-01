import { portfolioCollection } from "./squid";
import { Profile, Thoughts, Work } from "./types";

export const profile: Profile = {
  platform: "",
  url: "",
};

export const thoughts: Thoughts = {
  platform: "",
  thought_id: "",
};

export const work: Work = {
  title: "",
  work_url: "",
};

export async function pushInPath({ docRefName, docProp, valueToPush }) {
  let docRef = portfolioCollection.doc(docRefName);
  let current = await docRef.snapshot();
  var tempDocProps = { ...current };

  if (typeof current[docProp] === "string") {
    tempDocProps[docRefName] = valueToPush;
    await docRef.update(tempDocProps);
  }

  if (Array.isArray(current[docProp])) {
    console.log("working...");
    let temp = tempDocProps[String(docProp)];
    temp.push(valueToPush);
    tempDocProps[String(docProp)] = temp;
    await docRef.update(tempDocProps);
  }

  console.info("[After]", await docRef.snapshot());
}

import { selectCollection } from "./squid";
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

export async function pushInPath({
  docRefName,
  docProp,
  valueToPush,
  collectionName,
}) {
  let portfolioCollection = selectCollection(collectionName);
  let docRef = portfolioCollection.doc(docRefName);
  let current = await docRef.snapshot();
  var tempDocProps = { ...current };

  if (typeof current[docProp] === "string") {
    tempDocProps[docRefName] = valueToPush;
    await docRef.update(tempDocProps);
  }

  if (Array.isArray(current[docProp])) {
    let temp = tempDocProps[String(docProp)];
    temp.push(valueToPush);
    tempDocProps[String(docProp)] = temp;
    await docRef.update(tempDocProps);
  }

  console.info("[After]", await docRef.snapshot());
}

export async function updateLocalStorageAndRead({
  docRefName,
  collectionName,
  refresh,
}) {
  let portfolioCollection = selectCollection(collectionName);
  if (!localStorage.getItem("cacheResponse") || refresh) {
    let docRef = portfolioCollection.doc(docRefName);
    let current = await docRef.snapshot();
    localStorage.setItem("cacheResponse", JSON.stringify(current));
  }
  let storedData = localStorage.getItem("cacheResponse");
  return JSON.parse(storedData);
}

import { Squid } from "@squidcloud/client";

export const squid = new Squid({
  appId: "tjg7td8ufquwauqdbm",
  region: "us-east-1.aws",
  environmentId: "dev",
  squidDeveloperId: "ed8to3pt631467edrx",
});

export const portfolioCollection = squid.collection("portfolio");

export const selectCollection = squid.collection;

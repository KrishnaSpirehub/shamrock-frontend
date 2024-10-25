import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion: apiVersion || "2024-02-20",
  dataset: dataset || "production",
  projectId: projectId,
  useCdn: useCdn,
});

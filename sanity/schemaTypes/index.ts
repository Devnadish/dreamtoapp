import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { jobs } from "./jobs";
import { jobsType } from "./jobsType";
import { departmentType } from "./departmentType";
import { arabicPostType } from "./arPostType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    jobs,
    jobsType,
    departmentType,
    arabicPostType,
  ],
};

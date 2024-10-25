// import schemaTypes from 'all:part:@sanity/base/schema-type';
import { type SchemaTypeDefinition } from "sanity";
// import homepage from "./lib/homepage";
import newHomePage from "./lib/newHomePage";
import pricingPage from "./lib/pricingPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types:[
    newHomePage,
    pricingPage,
  ],
};

/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query launchesPast($limit: Int!, $offset: Int, $missionName: String, $rocketName: String) {\n    launchesPast(limit: $limit, offset: $offset, find: {mission_name: $missionName, rocket_name: $rocketName}) {\n      mission_name\n      id\n      launch_date_local\n      launch_site {\n        site_name_long\n      }\n      links {\n        article_link\n        video_link\n      }\n      rocket {\n        rocket_name\n        second_stage {\n          payloads {\n            payload_type\n            payload_mass_kg\n            payload_mass_lbs\n          }\n        }\n      }\n      ships {\n        name\n        home_port\n        image\n      }\n    }\n  }\n": types.LaunchesPastDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query launchesPast($limit: Int!, $offset: Int, $missionName: String, $rocketName: String) {\n    launchesPast(limit: $limit, offset: $offset, find: {mission_name: $missionName, rocket_name: $rocketName}) {\n      mission_name\n      id\n      launch_date_local\n      launch_site {\n        site_name_long\n      }\n      links {\n        article_link\n        video_link\n      }\n      rocket {\n        rocket_name\n        second_stage {\n          payloads {\n            payload_type\n            payload_mass_kg\n            payload_mass_lbs\n          }\n        }\n      }\n      ships {\n        name\n        home_port\n        image\n      }\n    }\n  }\n"): (typeof documents)["\n  query launchesPast($limit: Int!, $offset: Int, $missionName: String, $rocketName: String) {\n    launchesPast(limit: $limit, offset: $offset, find: {mission_name: $missionName, rocket_name: $rocketName}) {\n      mission_name\n      id\n      launch_date_local\n      launch_site {\n        site_name_long\n      }\n      links {\n        article_link\n        video_link\n      }\n      rocket {\n        rocket_name\n        second_stage {\n          payloads {\n            payload_type\n            payload_mass_kg\n            payload_mass_lbs\n          }\n        }\n      }\n      ships {\n        name\n        home_port\n        image\n      }\n    }\n  }\n"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
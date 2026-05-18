type DataObject = {
  [key: string]: any;
};
type StrapiGraphqlVariables = {
  [key: string]: any;
};

export async function apiCall(
  query: string,
  returnObject?: string,
  variables: StrapiGraphqlVariables = {},
): Promise<any> {
  const data: DataObject = await $fetch("/api/graphql", {
    method: "POST",
    body: { query, variables },
  });
  if (data && returnObject) {
    return data[returnObject];
  }
  return data;
}

import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloClientOptions,
} from "@apollo/client";

const makeApolloClient = (
  apolloIntialState: NormalizedCacheObject,
): ApolloClient<NormalizedCacheObject> => {
  const cache: InMemoryCache = new InMemoryCache().restore(apolloIntialState);
  const options: ApolloClientOptions<NormalizedCacheObject> = {
    uri: "https://countries.trevorblades.com",
    cache,
  };
  return new ApolloClient(options);
};

export { makeApolloClient };

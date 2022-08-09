import type { TypedDocumentNode } from '@urql/svelte';
import { writable, type Writable } from 'svelte/store';
import { getFoxcasts } from './foxcasts';

export type Query<T> = {
  fetching: boolean;
  data: T;
  error: any;
};

export function query<TResponse, TVariables>(
  query: TypedDocumentNode<TResponse, TVariables>,
  variables?: TVariables
): Writable<Query<TResponse>> {
  const result = writable({
    fetching: true,
    data: undefined,
    error: undefined,
  });

  getFoxcasts()
    .then((client) => client.graph.query(query as any, variables as any))
    .then((res) => {
      result.set({
        fetching: false,
        data: res.data,
        error: res.error,
      });
    })
    .catch((err) => {
      console.log('query error', err);
      result.set({
        fetching: false,
        data: undefined,
        error: err.message,
      });
    });

  return result;
}

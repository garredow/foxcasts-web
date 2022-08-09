import type { TypedDocumentNode } from '@urql/svelte';
import { writable, type Writable } from 'svelte/store';
import { getFoxcasts } from './foxcasts';

export type Mutation<T> = {
  fetching: boolean;
  data: T;
  error: any;
};

export function mutation<TResponse, TVariables>(
  mutation: TypedDocumentNode<TResponse, TVariables>,
  variables?: TVariables
): Writable<Mutation<TResponse>> {
  const result = writable({
    fetching: true,
    data: undefined,
    error: undefined,
  });

  getFoxcasts()
    .then((client) => client.graph.mutation(mutation as any, variables as any))
    .then((res) => {
      result.set({
        fetching: false,
        data: res.data,
        error: res.error,
      });
    })
    .catch((err) => {
      console.log('mutation error', err);
      result.set({
        fetching: false,
        data: undefined,
        error: err.message,
      });
    });

  return result;
}

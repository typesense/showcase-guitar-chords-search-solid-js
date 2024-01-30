import { createEffect } from 'solid-js';
import { typesenseInstantsearchAdapter } from '../utils/typesense';
import instantsearch from 'instantsearch.js';
import {
  configure,
  infiniteHits,
  refinementList,
} from 'instantsearch.js/es/widgets';
import RenderChord from '../utils/reactChords';

export default function createInstantsearch() {
  const search = instantsearch({
    indexName: 'guitar-chords',
    searchClient: typesenseInstantsearchAdapter.searchClient,
    future: {
      preserveSharedStateOnUnmount: true,
    },
  });

  createEffect(() => {
    search.addWidgets([
      configure({
        hitsPerPage: 12,
        enablePersonalization: true,
      }),
      infiniteHits({
        container: '#infiniteHits',
        templates: {
          item(hit, { html, components }) {
            // @ts-ignore
            const chord = html([RenderChord(hit.positions[0])]);
            const positionCount = hit.positions.length;

            return html`
              <h2 class="chord_name">
                ${components.Highlight({ attribute: 'key', hit })}${hit.suffix}
              </h2>
              ${chord}
              <span class="posCount"
                >${positionCount > 1
                  ? positionCount + ' positions'
                  : '1 position'}</span
              >
            `;
          },
        },
      }),
      // Refinement lists
      refinementList({
        container: '#key_refinementList',
        attribute: 'key',
        sortBy: ['name'],
        limit: 7,
        showMore: true,
        showMoreLimit: 100,
      }),
      refinementList({
        container: '#suffix_refinementList',
        attribute: 'suffix',
        limit: 8,
        showMore: true,
        showMoreLimit: 100,
        searchable: true,
        searchablePlaceholder: 'Search suffixes...',
      }),
      refinementList({
        container: '#capo_refinementList',
        attribute: 'positions.capo',
      }),
    ]);
    search.start();
  });
}

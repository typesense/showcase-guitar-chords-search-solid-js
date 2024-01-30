import { type Component } from 'solid-js';

import s from './App.module.css';
import Heading from './components/Heading/Heading';
import createInstantsearch from './hooks/createInstantsearch';

const App: Component = () => {
  createInstantsearch();
  return (
    <div class={s.App}>
      <Heading />
      <div id={s.flex_row}>
        <aside class='SearchAndFilter'>
          <h3>Key</h3>
          <div id='key_refinementList'></div>
          <h3>Suffix</h3>
          <div id='suffix_refinementList'></div>
          <h3>Capo</h3>
          <div id='capo_refinementList'></div>
        </aside>
        <div id='infiniteHits'></div>
      </div>
    </div>
  );
};

export default App;

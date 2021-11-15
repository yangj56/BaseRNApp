import React, {useEffect, useState, useCallback} from 'react';
import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

const exampleInstance = axios.create({
  baseURL: ITEMS_API_URL,
  timeout: 10000,
});

export const fetchData = async queryString => {
  const result = await exampleInstance.get('', {
    params: queryString,
  });
  return result.data;
};

export default function Autocomplete() {
  const [query, setQuery] = useState('');
  const [data, isloading, error] = useQueryItem(query);

  const handleInputChange = event => {
    const inputVal = event.target.value;
    setQuery(inputVal);
  };

  const onSelectItem = value => {
    // eslint-disable-next-line no-undef
    window.alert(`Selected: ${value}`);
  };

  return (
    <div className="wrapper">
      <div className={`control ${isloading && 'is-loading'}`}>
        <input type="text" className="input" onChange={handleInputChange} />
      </div>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <div className="list is-hoverable">
        {query &&
          data &&
          data.map(item => {
            return (
              <a
                className="list-item"
                onClick={() => {
                  onSelectItem(item);
                }}>
                {item}
              </a>
            );
          })}
      </div>
    </div>
  );
}

const useQueryItem = query => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetchData(query);
        setData(response);
        setLoading(false);
      } catch (err) {
        setError('Unable to load data');
        setLoading(false);
      }
    };
    if (query) {
      setLoading(true);
      fetchAPI();
      // lodash.debounce(fetchAPI,1000);
    } else {
      setData();
    }
  }, [query]);
  return [data, loading, error];
};

import { useState } from 'react';
import { QueryBuilder, formatQuery } from 'react-querybuilder';
import './style.scss';

const fields = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
];

const initialQuery = {
  combinator: 'and',
  rules: [
    { field: 'firstName', operator: 'beginsWith', value: 'Ezgi' },
    { field: 'lastName', operator: 'in', value: 'K,Korkmaz' },
  ],
};
const QueryBuilderPage = () => {
  const [query, setQuery] = useState(initialQuery);

  return (
    <div className='query-container'>
        <div className='query-builder'>
            <QueryBuilder
                fields={fields}
                query={query}
                onQueryChange={q => setQuery(q)}
            />
        </div>
      <h4>Query</h4>
      <pre>
        <code>{formatQuery(query, 'json')}</code>
      </pre>
    </div>
  );
};

export default QueryBuilderPage;

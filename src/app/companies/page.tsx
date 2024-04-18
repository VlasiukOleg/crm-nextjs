import * as React from 'react';

import Header from '../components/header';
import SearchInput from '../components/search-input';

export interface PageProps {}

export default function CompaniesPage({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <SearchInput />
    </>
  );
}

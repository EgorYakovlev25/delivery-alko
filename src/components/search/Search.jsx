import { Input } from '@mantine/core';
import { useState } from 'react';

export default function Search({search, setSearch}){
  return (
    <Input
      w={'100%'}
      placeholder="Поиск товара"
      value={search}
      onChange={(event) => setSearch(event.currentTarget.value)}
      rightSection={search !== '' ? <Input.ClearButton onClick={() => setSearch('')} /> : undefined}
      rightSectionPointerEvents="auto"
      size="sm"
    />
  );
}
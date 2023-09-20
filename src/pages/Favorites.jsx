import React from 'react';
import { useSelector } from 'react-redux';
import { CatalogList } from '../components/CatalogList/CatalogList';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { selectFavorite } from 'redux/selectors';

const Favorites = () => {
  const favoriteCars = useSelector(selectFavorite);

  return (
    <Container>
      <Filter />
      <CatalogList cars={favoriteCars} />
    </Container>
  );
};

export default Favorites;

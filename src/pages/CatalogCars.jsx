import React, { useEffect } from 'react';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import { selectCars } from 'redux/selectors';

const CatalogCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo({
      top: -80,
      behavior: 'smooth',
    });
  };
  scrollToTop();
  // window.scrollBy({
  //   top: cardHeight * -100,
  //   behavior: 'smooth',
  // });

  return (
    <Container>
      <Filter />
      {cars?.length > 0 && <CatalogList cars={cars} />}
    </Container>
  );
};

export default CatalogCars;

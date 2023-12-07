import React, { useEffect, useState } from 'react';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import { selectCars } from 'redux/selectors';

const COUNT_CARS = 8;

const CatalogCars = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (!cars) return <Loader />;
  const aginatedCars = cars.slice(0, page * COUNT_CARS);
  const getPage = () => setPage(page + 1);
  const totalPages = Math.ceil(cars.length / COUNT_CARS);

  const scrollToTop = () => {
    window.scrollTo({
      top: -80,
      behavior: 'smooth',
    });
  };
  scrollToTop();

  return (
    <Container>
      <Filter />
      {cars?.length > 0 && <CatalogList cars={aginatedCars} />}
      {totalPages !== page && <ButtonLoadMore onClick={getPage} />}
    </Container>
  );
};

export default CatalogCars;

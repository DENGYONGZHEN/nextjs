import getCurrentUser from '../actions/getCurrentUser';
import getFavoriteListings from '../actions/getFavoriteListings';
import Container from '../components/Container';
import EmptyState from '../components/EmptyState';
import Heading from '../components/Heading';
import FavoriteClient from './FavoriteClient';

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const favorites = await getFavoriteListings();
  if (favorites.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings"
      />
    );
  }

  return <FavoriteClient favorites={favorites} currentUser={currentUser} />;
};

export default FavoritesPage;

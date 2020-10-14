import Orphanages from '../models/Orphanages';
import imageView from './images_view';

export default {
  render(orphanage: Orphanages) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      opens_at_weekends: orphanage.opens_at_weekends,
      images: imageView.renderMany(orphanage.images),
    };
  },
  renderMany(orphanages: Array<Orphanages>) {
    return orphanages.map(orphanage => this.render(orphanage));
  }
};

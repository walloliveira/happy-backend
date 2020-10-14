import Images from '../models/Images';

export default {
  render(image: Images) {
    return {
      id: image.id,
      url: `${process.env.API_UPLOAD_PATH}/${image.path}`
    };
  },
  renderMany(images: Array<Images>) {
    return images.map(image => this.render(image));
  }
};

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanages from '../models/Orphanages';
import orphanageView from '../views/orphanges_view';
import * as Yup from 'yup';

export default {
  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      opens_at_weekends
    } = request.body;

    const orphanagesRepository = getRepository(Orphanages);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return {
        path: image.filename,
      };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      opens_at_weekends,
      images,
    };

    const schema = Yup
      .object()
      .shape({
        name: Yup.string().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        about: Yup.string().required().max(300),
        instructions: Yup.string().required(),
        opening_hours: Yup.string().required(),
        opens_at_weekends: Yup.boolean().required(),
        images: Yup.array(
          Yup.object().shape({
            path: Yup.string().required(),
          })),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = orphanagesRepository.create(data);

    await orphanagesRepository.save(orphanage);

    return response
      .status(201)
      .json(orphanageView.render(orphanage));
  }
}

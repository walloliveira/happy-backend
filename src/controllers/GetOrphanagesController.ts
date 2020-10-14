import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanages from '../models/Orphanages';

import orphanageView from '../views/orphanges_view';

export default {
  async list(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanages);

    const orphanages = await orphanagesRepository.find();
    return response.json(orphanageView.renderMany(orphanages));
  },
  async show(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanages);
    const { id } = request.params;

    const orphanage = await orphanagesRepository.findOneOrFail(id);
    return response.json(orphanageView.render(orphanage));
  }
}

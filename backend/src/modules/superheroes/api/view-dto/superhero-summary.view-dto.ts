import { Superhero } from '../../domain/superhero.entity';
import { SuperheroSummaryDocumentType } from '../../infrastructure/types/sumerhero-summary.document.type';

export class SuperheroSummaryViewDto {
  id: number;
  nickname: string;
  imageUrl: string;

  constructor({ id, nickname, image_url }: SuperheroSummaryDocumentType) {
    this.id = id;
    this.nickname = nickname;
    this.imageUrl = image_url;
  }
}

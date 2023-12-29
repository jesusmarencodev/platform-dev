import { uuid } from 'uuidv4';

export type SyllabusProperties = {
  readonly scheduleId: string;
  readonly text: string;
};

export class Syllabus {
  private readonly syllabusId: string;
  private readonly scheduleId: string;
  private readonly text: string;

  constructor(properties: SyllabusProperties) {
    Object.assign(this, properties);
    this.syllabusId = uuid();
  }

  properties() {
    return {
      SyllabusId: this.syllabusId,
      scheduleId: this.scheduleId,
      text: this.text,
    };
  }
}

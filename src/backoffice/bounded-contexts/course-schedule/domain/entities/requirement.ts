import { uuid } from 'uuidv4';

export type RequirementProperties = {
  readonly scheduleId: string;
  readonly text: string;
};

export class Requirement {
  private readonly requirementId: string;
  private readonly scheduleId: string;
  private readonly text: string;

  constructor(properties: RequirementProperties) {
    Object.assign(this, properties);
    this.requirementId = uuid();
  }

  properties() {
    return {
      requirementId: this.requirementId,
      sheduleId: this.scheduleId,
      text: this.text,
    };
  }
}

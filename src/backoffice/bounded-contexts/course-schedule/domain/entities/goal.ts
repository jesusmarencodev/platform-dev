import { uuid } from 'uuidv4';

export type GoalProperties = {
  readonly scheduleId: string;
  readonly text: string;
};

export class Goal {
  private readonly goalId: string;
  private readonly scheduleId: string;
  private readonly text: string;

  constructor(properties: GoalProperties) {
    Object.assign(this, properties);
    this.goalId = uuid();
  }

  properties() {
    return {
      GoalId: this.goalId,
      scheduleId: this.scheduleId,
      text: this.text,
    };
  }
}

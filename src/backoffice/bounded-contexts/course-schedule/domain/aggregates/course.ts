import { AggregateRoot } from '@nestjs/cqrs';

export type CourseEssential = {
  readonly id: string;
  readonly name: string;
};

export type CourseOptional = {
  readonly summary: string;
};

export type CourseUpdate = {
  readonly name: string;
  readonly summary: string;
};

export type CourseProperties = Required<CourseEssential> &
  Partial<CourseOptional>;

export class Course extends AggregateRoot {
  private readonly id: string;
  private name: string;
  private active: boolean;
  private summary: string;
  private readonly createdAt: Date;
  private updatedAt: Date;
  private deleteAt: Date;

  constructor(properties: CourseProperties) {
    super();
    Object.assign(this, properties);
    this.createdAt = new Date();
    this.active = true;
  }

  properties() {
    return {
      id: this.id,
      name: this.name,
      active: this.active,
      summary: this.summary,
      createdAt: this.createdAt,
      deleteAt: this.deleteAt,
    };
  }

  update(fields: Partial<CourseUpdate>) {
    Object.assign(this, fields);
    this.updatedAt = new Date();
  }

  delete() {
    this.active = false;
    this.deleteAt = new Date();
  }
}

const properties: CourseProperties = {
  id: 'abc',
  name: 'course 1',
  summary: 'updated 1',
};

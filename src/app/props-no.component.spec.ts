import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PropsNoAppComponent } from '../app/props-no.component';

beforeEachProviders(() => [PropsNoAppComponent]);

describe('App: PropsNo', () => {
  it('should create the app',
      inject([PropsNoAppComponent], (app: PropsNoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'props-no works!\'',
      inject([PropsNoAppComponent], (app: PropsNoAppComponent) => {
    expect(app.title).toEqual('props-no works!');
  }));
});

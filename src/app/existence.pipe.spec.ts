import { ExistencePipe } from './existence.pipe';

describe('ExistencePipe', () => {
  it('create an instance', () => {
    const pipe = new ExistencePipe();
    expect(pipe).toBeTruthy();
  });
});

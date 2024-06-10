import { CreditsToStringPipe } from './credits-to-string.pipe';

describe('CreditsToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditsToStringPipe();
    expect(pipe).toBeTruthy();
  });
});

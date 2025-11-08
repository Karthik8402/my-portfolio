import Typewriter from 'typewriter-effect';
import { SITE } from '../data/site';

export default function TypewriterRole() {
  return (
    <span className="text-brand-500">
      <Typewriter
        options={{
          strings: SITE.roles,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 80,
        }}
      />
    </span>
  );
}

import { useTransition, animated } from 'react-spring';
import { useState } from 'react';
import { config } from 'react-spring';
import image from '../pics/impostor.png'
import image2 from '../pics/me.png'

function Toggle() {
    const [toggle, set] = useState(false)
    const transitions = useTransition(toggle, {
      from: { position: 'absolute', opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: toggle,
      delay: 200,
      config: config.molasses,
      onRest: () => set(!toggle),
    })
    return transitions(({ opacity }, item) =>
      item ? (
        <animated.div
          style={{
            position: 'absolute',
            opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
          }}>
             <div id="myself"><img id="picture" src={image2}/></div>
        </animated.div>
      ) : (
        <animated.div
          style={{
            position: 'absolute',
            opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
          }}>
        <div id="myself"><img id="picture" src={image}/></div>
        </animated.div>
      )
    )
  }
  export default Toggle;
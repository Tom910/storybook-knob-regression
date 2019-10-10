import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, object, text, } from '@storybook/addon-knobs';


const stories = storiesOf('Storybook Knobs', module);

stories.addDecorator(withKnobs);


stories.add('as dynamic variables', () => {
  const props = object('properties', {
    children: text('children', 'Cool text', 'options'),
    className: text('className', 'active', 'options')
  }, 'properties');

  return (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
    </span>
      <div {...props} />
    </Button>
  )
});

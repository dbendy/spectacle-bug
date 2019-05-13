// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  GoToAction,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        theme={theme}
      >
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Bug
          </Heading>
        </Slide>
        <Slide id='toc'>
          <Heading size={6} textColor="primary" caps>
            Table of Contents
          </Heading>
          <div><GoToAction slide={"yellow"} bgColor="yellow">Yellow Slides</GoToAction></div>
          <div><GoToAction slide={"green"} bgColor="green">Green Slides</GoToAction></div>
          <div><GoToAction slide={"blue"} bgColor="blue">Blue Slides</GoToAction></div>
        </Slide>
        <Slide id="yellow" bgColor="yellow"><Text>Yellow Slides</Text></Slide>
        <Slide bgColor="yellow"><Text>Yellow 1</Text><GoToAction slide="toc">Table of Contents</GoToAction></Slide>
        <Slide bgColor="yellow"><Text>Yellow 2</Text><GoToAction slide="toc">Table of Contents</GoToAction></Slide>
        <Slide bgColor="yellow"><Text>Yellow 3</Text><GoToAction slide="toc">Table of Contents</GoToAction></Slide>
        <Slide id="green" bgColor="green"><Text>Green Slides</Text></Slide>
        <Slide bgColor="green"><Text>Green 1</Text><GoToAction slide="toc">Table of Contents</GoToAction></Slide>
        <Slide bgColor="green"><Text>Green 2</Text><GoToAction slide="toc">Table of Contents</GoToAction></Slide>
        <Slide bgColor="green"><Text>Green 3</Text><GoToAction slide="toc">Table of Contents</GoToAction></Slide>
        <Slide id="blue" bgColor="blue"><Text>Blue Slides</Text></Slide>
        <Slide bgColor="blue"><Text>Blue 1</Text><GoToAction slide="toc">Table of Contents</GoToAction></Slide>
        <Slide bgColor="blue"><Text>Blue 2</Text><GoToAction slide="toc">Table of Contents</GoToAction></Slide>
        <Slide bgColor="blue"><Text>Blue 3</Text><GoToAction slide="toc">Table of Contents</GoToAction></Slide>
      </Deck>
    );
  }
}

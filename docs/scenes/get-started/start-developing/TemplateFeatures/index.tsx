import { mergeClasses } from '@expo/styleguide';
import { useState } from 'react';

import { HEADLINE } from '~/ui/components/Text';

import { Content } from './Content';
import { Tab } from './Tab';
import Animations from './features/animations.mdx';
import Fonts from './features/fonts.mdx';
import Images from './features/images.mdx';
import Navigation from './features/navigation.mdx';
import Platforms from './features/platforms.mdx';
import Themes from './features/themes.mdx';

export function TemplateFeatures() {
  const [selected, setSelected] = useState('navigation');

  return (
    <div className="overflow-hidden rounded-md border border-default text-default">
      <div className="flex border-b border-default bg-subtle p-3 pl-4">
        <HEADLINE>Default project</HEADLINE>
      </div>
      <div className="grid grid-cols-[250px_minmax(0,_1fr)] max-md-gutters:grid-cols-1">
        <div
          className={mergeClasses(
            'flex flex-col gap-1 border-r border-default p-3',
            'max-md-gutters:border-b max-md-gutters:border-r-0'
          )}>
          <Tab
            title="File-based routing"
            onClick={() => {
              setSelected('navigation');
            }}
            isSelected={selected === 'navigation'}
          />
          <Tab
            title="Android, iOS, and web support"
            onClick={() => {
              setSelected('platforms');
            }}
            isSelected={selected === 'platforms'}
          />
          <Tab
            title="Images"
            onClick={() => {
              setSelected('images');
            }}
            isSelected={selected === 'images'}
          />
          <Tab
            title="Custom fonts"
            onClick={() => {
              setSelected('fonts');
            }}
            isSelected={selected === 'fonts'}
          />
          <Tab
            title="Light and dark modes"
            onClick={() => {
              setSelected('themes');
            }}
            isSelected={selected === 'themes'}
          />
          <Tab
            title="Animations"
            onClick={() => {
              setSelected('animations');
            }}
            isSelected={selected === 'animations'}
          />
        </div>
        <div className="bg-default">
          {selected === 'navigation' ? (
            <Content
              imgSrc="/static/images/get-started/navigation.png"
              darkImgSrc="/static/images/get-started/navigation-dark.png"
              alt="Two tabs in an Expo app"
              content={<Navigation />}
              href="/router/introduction"
            />
          ) : null}
          {selected === 'platforms' ? (
            <Content
              imgSrc="/static/images/get-started/platforms.png"
              darkImgSrc="/static/images/get-started/platforms-dark.png"
              alt="Android, iOS, and web logos"
              content={<Platforms />}
            />
          ) : null}
          {selected === 'images' ? (
            <Content
              imgSrc="/static/images/get-started/images.png"
              darkImgSrc="/static/images/get-started/images-dark.png"
              alt="React image in a header component"
              content={<Images />}
              href="/versions/latest/sdk/image"
            />
          ) : null}
          {selected === 'fonts' ? (
            <Content
              imgSrc="/static/images/get-started/fonts.png"
              darkImgSrc="/static/images/get-started/fonts-dark.png"
              alt="Various fonts on a screen"
              content={<Fonts />}
              href="/develop/user-interface/fonts"
            />
          ) : null}
          {selected === 'themes' ? (
            <Content
              imgSrc="/static/images/get-started/themes.png"
              alt="An app with light and dark mode UIs"
              content={<Themes />}
              href="/develop/user-interface/color-themes"
            />
          ) : null}
          {selected === 'animations' ? (
            <Content
              imgSrc="/static/images/get-started/animations.png"
              darkImgSrc="/static/images/get-started/animations-dark.png"
              alt="Waving hand and a welcome message"
              content={<Animations />}
              href="/develop/user-interface/animation"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

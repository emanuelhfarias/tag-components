import React, { useEffect } from 'react'
const HtmlToReactParser = require('html-to-react').Parser;
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const registerComponents = require('../../component-polyfill');

export default function LoadExample({ file }) {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    registerComponents()
  })

  const htmlInput = siteConfig.customFields.componentsSources[file];

  let htmlToReactParser = new HtmlToReactParser();
  let reactElement = htmlToReactParser.parse(htmlInput);

  return reactElement;
}
import React, { useEffect } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const registerComponents = require('../../component-polyfill');

export default function LoadExample({ file }) {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    registerComponents()
  })

  const htmlInput = siteConfig.customFields.componentsSources[file];

  return (
    <span dangerouslySetInnerHTML={{__html: htmlInput}} />
  );
}
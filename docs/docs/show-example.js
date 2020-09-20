import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext';
// import theme from 'prism-react-renderer/themes/palenight';

export default function ShowExample({ file }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={siteConfig.customFields.componentsSources[file]}
      language="html"
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>  
      )}
    </Highlight>
  );
}
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Carousel from './Carousel';

export default () => {
  return (
    <div className="HW27Carousel container">
        <div className="hint" style={{ textAlign: 'left'}}>
          <ReactMarkdown source={`
  ### usage case
  \`\`\`
  <Carousel>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Carousel>
  \`\`\`
  ### props
  - time: 每次輪播的時間間隔，預設 \`1500\`
  - showDots: 布林，是否出現點點，預設 \`false\`
          `}
          />        
        </div>
      <Carousel time={1500} showDots>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Carousel>
    </div>
  )
}

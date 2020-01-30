import React from 'react';
import ReactMarkdown from 'react-markdown';
import Tooltip from './Tooltip';
import './style.scss';

export default () => {
  return (
    <div className="HW26Tooltip container">
      <div className="mx-auto block">
        <div className="hint" style={{ textAlign: 'left'}}>
          <ReactMarkdown source={`
  ### usage case
  \`\`\`
  <Tooltip at="top" text="我在上面">
    <button className="btn btn-primary">top</button>
  </Tooltip>
  \`\`\`
  ### props
  - at: 決定方向: \`top\` or \`right\` or \`bottom\` or \`left\`
  - text: 提示內文字
          `}
          />        
        </div>
        <Tooltip at="top" text="我在上面"><button className="btn btn-primary">top</button></Tooltip>&nbsp;
        <Tooltip at="right"><button className="btn btn-primary">right</button></Tooltip><br/><br/>
        <Tooltip at="left"><button className="btn btn-primary">left</button></Tooltip>&nbsp;
        <Tooltip at="bottom"><button className="btn btn-primary">bottom</button></Tooltip>&nbsp;
        <div>
          Lorem <Tooltip at="top">ipsum</Tooltip> dolor sit amet consectetur adipisicing elit. Repellat fuga excepturi expedita, velit nam minus, beatae eius quos eum accusamus harum repudiandae suscipit libero nemo nihil distinctio incidunt in ducimus.
          In, nulla fddll <Tooltip at="left">nostrum</Tooltip> minus esse quidem quae unde culpa quas repellat ut vitae beatae nobis doloremque totam voluptas excepturi! Cupiditate fuga velit deserunt ratione nisi ipsa tenetur quam est voluptatum.
          Modi, placeat suscipit at velit reprehenderit, repellendus laboriosam ipsa laudantium nesciunt id fuga magni cum nihil voluptatibus libero quia tempore sed ratione inventore nisi quaerat necessitatibus ab tempora. Omnis, voluptas!
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Modal from './Modal';

import './style.scss';

export default () => {

  const [isShow, setIsShow] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const handleShow = props => {
    setModalProps(props);
    setIsShow(true);
  }

  return (
    <div className="HW25Modal">
      {isShow && (
        <Modal {...modalProps} onClose={() => setIsShow(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iure rerum consequatur! Vitae aspernatur ad iste nesciunt alias! Molestias, enim. Beatae in, exercitationem quaerat laborum eligendi explicabo sint eius. Iure?
        </Modal>
      )}
      <div className="mx-auto block text-center">
      <div className="hint" style={{ textAlign: 'left'}}>
        <ReactMarkdown source={`
### usage case
\`\`\`js
<Modal>我是內容</Modal>
\`\`\`
### in modal component
可以使用 \`this.props.children\` 來取得「我是內容」
        `}
        />        
      </div>
        <button className="btn btn-primary" onClick={() => handleShow()}>modal</button> &nbsp;
        <button className="btn btn-primary" onClick={() => handleShow({
          near: 'top'
        })}>top</button> &nbsp;
        <button className="btn btn-primary" onClick={() => handleShow({
          header: 'Header'
        })}>header</button> &nbsp;
        <button className="btn btn-primary" onClick={() => handleShow({
          near: 'top',
          animation: true,
        })}>top + animation</button> &nbsp;
      </div>
    </div>
  )
}

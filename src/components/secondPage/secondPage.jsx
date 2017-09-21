import React from 'react'


class SecondPage extends React.Component {

  render() {
    return (<div>
      <h1>H1 Proxima Nova шрифт</h1>
      <h2>H2 header</h2>
      <h3>H3 header</h3>
      <h4>p header</h4>
      <h5>H5 header</h5>
      <h6>H6 header</h6>
      <h1>Museo шрифт</h1>
      <p>Second Page Paragraph!</p>
      <a>Link</a>
      <p style={{fontWeight: 300}}>Нрмальный текст</p>
      <p style={{fontWeight: 500}}>Жирный текст</p>
      <p style={{fontWeight: 700}}>Совсем жирный текст</p>
      <p style={{fontWeight: 900}}>Омг какой жирный текст</p>
    </div>
    )
  }
}

export default SecondPage

import React from 'react'

const Contact = (props) => {
  setTimeout(() => {
    props.history.push('/about')
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio consequatur blanditiis perferendis, laboriosam nobis numquam, sapiente error libero voluptatum explicabo facilis rerum adipisci nostrum nesciunt qui eos suscipit? Rerum.</p>
    </div>
  )
}

export default Contact

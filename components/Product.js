const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div className='product'>
        <h1>Name: {this.props.name}</h1>
        <h2>Producer: {this.props.producer}</h2>
        <h2>Has Watermark: {this.props.hasWatermark}</h2>
        <h2>Color: {this.props.color}</h2>
        <h2>Weight: {this.props.weight}</h2>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }
      const validWeight = weight > 80 && weight < 300;

      if (!validWeight) {
        return new Error('The `weight` prop should range between 80 and 300.');
      }
  },
};


module.exports = Product;

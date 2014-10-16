/** @jsx React.DOM */

/**
 * Created by ngrebenshikov on 16/10/14.
 */

var Text = React.createClass({displayName: 'Text',
    render: function() {
        var transform = "translate(" + this.props.x + " " + this.props.y + ")";
        return (React.DOM.text({transform: transform, fill: "#000000"}, React.DOM.tspan(null, this.props.text)));
    }
});
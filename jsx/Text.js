/** @jsx React.DOM */

/**
 * Created by ngrebenshikov on 16/10/14.
 */

var Text = React.createClass({
    render: function() {
        var transform = "translate(" + this.props.x + " " + this.props.y + ")";
        return (<text transform={transform} fill="#000000"><tspan>{this.props.text}</tspan></text>);
    }
});
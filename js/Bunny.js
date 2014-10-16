/** @jsx React.DOM */

/**
 * Created by ngrebenshikov on 16/10/14.
 */

var Bunny = React.createClass({displayName: 'Bunny',
    render: function() {
        var transform =
            "translate(" + this.props.x + " " + this.props.y + ") scale(" + this.props.scale + ")"  +
            "rotate(" + this.props.rotation + " " +
                ~~(13.5835 * this.props.scale + ~~this.props.x) + " " +
                ~~(19.0735 * this.props.scale + ~~this.props.y) +
            ")";
        return (React.DOM.g({opacity: this.props.opacity, transform: transform}, 
        React.DOM.g(null, 
                React.DOM.path({fill: "#C06F29", stroke: "#000000", 'stroke-miterlimit': "10", d: "M5.958,37.583c-0.417-0.833,0-17.833,0-17.833" + ' ' +
		"s-0.198-1.253-0.833-1.167s-3.166,0.5-3.833,0s-0.75-2.5,0-3s2.75,0,3.833,0s1.333-1.167,1.333-1.167s-0.25-12.167,0-12.667" + ' ' +
		"s5.167-0.5,5.5,0s-0.125,3.833,0,4.5s0.917,1.5,1.667,1.583s1.043-0.334,1.334-1.417s-0.416-4.167,0-4.667s5.25-0.5,6,0" + ' ' +
		"s-0.048,13.669,0,12.833s-0.084,0.833,1.166,1.167s3.5-0.667,4-0.083s0.604,2.622,0.011,3.103s-3.468,0.112-3.844,0.147" + ' ' +
		"s-0.875,0.333-1.167,0.833s0.75,17.166,0.167,17.833s-2.084,0.5-2.667,0s-0.597-4.376-0.5-3.666s-0.582-1-1.166-1.5" + ' ' +
		"s-6.417-0.625-6.834,0s-1,1.5-1,1.5s0.417,2.999-0.167,3.666S6.375,38.416,5.958,37.583z"}), 
                React.DOM.path({fill: "#FBB040", d: "M7.622,14.417c0,0-0.944-10.93,0.086-11.667c1.167-0.833,2.693-0.459,3,0" + ' ' +
		"c0.306,0.459,0.125,3.291,0.5,4.167s1.644,1.757,2.333,1.833s1.666-0.5,2.333-1.667s0.224-3.874,0.606-4.333" + ' ' +
		"c0.382-0.459,2.704-0.459,3.394,0s0.04,12.185,0.084,11.417s-0.232,1.777,0.916,2.083c1.149,0.307,4.159,0.071,4.618,0.608" + ' ' +
		"c0.46,0.536,0.345,0.971-0.324,1.265s-1.925-0.018-3.533,0.136c-1.609,0.153-0.975-0.248-1.511,0.825s0.786,13.553,0.25,14.167" + ' ' +
		"c-0.535,0.612-0.547,0.792-1.083,0.333c-0.536-0.46-0.839-2.485-0.75-1.833s0.166-1.167-1.167-1.667s-7.5,1.584-8.667-0.5" + ' ' +
		"S7.622,14.417,7.622,14.417z"})
            ), 
        React.DOM.g(null, 
            React.DOM.path({fill: "#A75E26", stroke: "#FECC84", 'stroke-miterlimit': "10", d: "M17.042,25.832c0,1.565-1.27,2.835-2.835,2.835h-1.165" + ' ' +
		"c-1.565,0-2.834-1.27-2.834-2.835v-2.83c0-1.565,1.269-2.835,2.834-2.835h1.165c1.565,0,2.835,1.27,2.835,2.835V25.832z"}), 
            React.DOM.ellipse({fill: "#923E1F", cx: "10.605", cy: "12.507", rx: "0.852", ry: "1.173"}), 
                React.DOM.ellipse({fill: "#9F4322", cx: "17.292", cy: "12.417", rx: "0.583", ry: "1.083"}), 
                React.DOM.path({fill: "#FFE2C2", d: "M14.709,15.857c0,0.553-0.448,1-1,1l0,0c-0.553,0-1-0.448-1-1v-0.19c0-0.553,0.448-1,1-1l0,0" + ' ' +
                "c0.552,0,1,0.448,1,1V15.857z"}), 
            React.DOM.path({fill: "#8E4920", d: "M15.875,14.667c0,0.276-0.224,0.5-0.5,0.5h-3.667c-0.276,0-0.5-0.224-0.5-0.5l0,0" + ' ' +
            "c0-0.276,0.224-0.5,0.5-0.5h3.667C15.651,14.167,15.875,14.39,15.875,14.667L15.875,14.667z"})
            )
        ));
    }
});


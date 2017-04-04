// var React = require('react')
// var ReactDOM = require('react-dom')
//
// var Hello = React.createClass ({
//     render: function() {
//         return (
//             <h1>
//             Hello, React!
//             </h1>
//         )
//     }
// })
//
// ReactDOM.render(<Hello />, document.getElementById('container'))


var React = require('react')
var ReactDOM = require('react-dom')

var CarsList = React.createClass({
    loadCarsFromServer: function(){
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        })
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadCarsFromServer();
        setInterval(this.loadCarsFromServer,
                    this.props.pollInterval)
    },
    render: function() {
        if (this.state.data) {
            console.log('DATA!')
            var carNodes = this.state.data.map(function(car){
                return <li> {car.model} </li>
            })
        }
        return (
            <div>
                <h1>Hello React!</h1>
                <ul>
                    {carNodes}
                </ul>
            </div>
        )
    }
})

ReactDOM.render(<CarsList url='/api/' pollInterval={1000} />,
    document.getElementById('container'))

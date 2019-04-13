"use strict";

/* component start */ // These comments are for generating handouts!
class Hello extends React.Component {
  render() {
    return <p>Hi {this.props.to} from {this.props.from}</p>;
  }
}

class TodoItem extends React.Component {
    render() {
        if(this.props.important) {
            return <li><b>{this.props.item}</b></li>;
        } else {
            return <li>{this.props.item}</li>;
        }
    }
}

class TodoList extends React.Component {
    render() {
        return (<div>
            <p>Here is a todo list</p>
            <TodoItem item="laundry" important/>
            <TodoItem item="take out trash" important={false}/>
            <TodoItem item="do dishes" important={true}/>
        </div>);
    }
}

/* component end */

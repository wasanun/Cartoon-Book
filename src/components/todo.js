import React, {Component} from 'react';//เอาโค๊ดมากจาก Githubของอาจารย์วโรดม

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {list: ['หนังสือโดเรม่อน', 'หนังสือชินจัง','นิยาย',]};
    }
    add = (e) => {
        let item = this.refs.todo.value;
        console.log('todo',item);
        this.setState( {list: [...this.state.list, item] });

    }
    renderList = () => {
        return (
            this.state.list.map((item,index) => {
                return ( <li key={index}> {index+1} : {item} </li>)
            })
        )
    }
    render() {
        return (
            <div className="App">
                    <div className="App-title App-header">
                        <h2> {this.props.head} </h2>
                    </div>
             
                    <div className="row">
                        <div className="col75">
                            <input type="text" ref="todo"  />
                            <button onClick={this.add}>Add</button>
                         
                        </div>

                    </div>

                    <div>
                        {this.renderList()}
                    </div>
                </div>
            
        )
    }
}

export default Todo;
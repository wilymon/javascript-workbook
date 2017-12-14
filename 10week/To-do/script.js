'use strict';

class Hack extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      completed: []
    }
    this.removeItem = this.removeItem.bind(this);
    this.updateList = this.updateList.bind(this);
  }

//Function called whenever you type a task into the input field and click the plus button, adding a new item to the list
  updateList(event){
    let todoItem = document.getElementById("newTodo").value;
    let todoLength = this.state.todo.length;
    let temp = this.state.todo;

    console.log(temp);
//if statement allows new to-do items to be added, as long as the input field isn't blank and you have less than 10 items
    if((todoLength < 10) && (todoItem != "")){
//using unshift so new to-do items remain at the top of the list
      temp.unshift(todoItem)
      document.getElementById("newTodo").value = ""
      this.setState({
        todo: temp
      });
    }
  }

//function called whenever you click on an item to complete. It removes it from the list and puts it in the completed item
  removeItem(event){
    let arrayPosition = event.target.getAttribute("data-stack")
    let temp2 = this.state.todo
    let spliced = temp2.splice(arrayPosition, 1)
    let completedArray = this.state.completed

//the completedArray keeps track of completed items and updated this.state.completed, right now I'm not using it, but it could be useful in a future version
    if (spliced.length == 1){
      completedArray.unshift(spliced[0])
    }

    console.log(completedArray)

    this.setState({
      todo: temp2,
      completed: completedArray
    });

  }

  render(){

    function convertToDivs(numbers, index){
//catNumber generates random numbers, 1-6, which is then used in the img tag to generate a random cat image for each to-do item
      let catNumber = Math.floor((Math.random() * 6) + 1);
      return <button onClick={this.removeItem} className="text-left m-2 list-group-item list-group-item-success" key={index} data-stack={index}><img className="mr-2" width="50" src={"/cats/cat_"+catNumber+".png"} alt="mycat" />{numbers}</button>;
    }

    let ca = this.state.todo.map(convertToDivs, this)

    return(
      <div>
        <h1 className="text-center m-3 display-3">My Cat Tasks</h1>
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group">
              <span className="input-group-btn">
                <button onClick={this.updateList} className="btn btn-danger" type="button"> + </button>
              </span>
              <input type="text" className="form-control" id="newTodo" placeholder="Example: Go to Work..."></input>
            </div>
          </div>
        </div>
        <ul className="list-group">
          {ca}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Hack />, document.getElementById('to-do'));

'use strict';

class Hack extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      filtered: []
    }
    this.filteredList = this.filteredList.bind(this);
    this.clearValue = this.clearValue.bind(this);
  }

  componentWillMount(){
    const top50 = [];
//first fetch grabs the top 500 stories id's
    fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`).then((result)=>{
      return result.json();
    }).then((response)=>{
      for(let i = 0; i < 50; i++){
//second fetch uses a for-loop to plug the first 50 id's from the previous fetch into the url below
        fetch(`https://hacker-news.firebaseio.com/v0/item/${response[i]}.json?print=pretty`).then((result)=>{
          return result.json();
        }).then((response)=>{
          console.log(response);
//the 50 responses are pushed into the "top50" array, which is used to set the states and print the stories on the screen
          top50.push(response);
          this.setState({
//the items state always holds the top50 array. The filtered state holds the top50 at first, but can be filtered by the filteredList() function below
            items: top50,
            filtered: top50
          })
        });
      }
    })
  }

  filteredList(){
// searchText holds the value from the input field in the render() function. toLowerCase is used to make it all lowercase
    let searchText = document.getElementById("search").value.toLowerCase();
    console.log(searchText);
//the filter function is run on the searchText function to see if that text appears in the article titles. If it does, a new list of arrays is returned into the foundArticle variable
    let foundArticle = this.state.items.filter(itemFinder);
    function itemFinder(allArticles){
      return allArticles.title.toLowerCase().indexOf(searchText) !== -1
    }
    console.log(foundArticle);
//The new array in the foundArticle variable is used to reset the this.state.filtered, which redraws the page.
    this.setState({
      filtered: foundArticle
    })
  };

//I had to add a second button to clear the search. The "Clear Search" button clears the input value and calls filteredList() again. Since the input value is blank, all 50 articles are put into the foundArticle variable, which redraws the page with all 50 articles again
  clearValue(){
    document.getElementById("search").value = "";
    this.filteredList();
  };


  render(){
    let ca = this.state.filtered.map(convertToDivs)

    function convertToDivs(numbers){
      return <li key={numbers.id}><a href={numbers.url} target="_blank">{numbers.title}</a></li>
    }

    return(
      <div>
        <div className="form-group">
          <label>Search</label>
          <input id="search"></input>
          <button onClick={this.filteredList}>Submit</button>
          <button onClick={this.clearValue}>Clear Search</button>
        </div>
        <ul>
          {ca}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Hack />, document.getElementById('hacker-news'));

function fetchData(){

};

var TwinFactsTable = React.createClass({
  // propTypes: {
  //   data: PropTypes.array
  // },
  getInitialState: function(){
    return {
      records: []
    }
  },
  handleClickId: function(event){
    var thiz = this;
    event.preventDefault();
    $.ajax({
      url: "/transactions?col=id&sort_order=desc"
    }).done(function (data){
      var records = data.records;
      thiz.setState({records: records});
    });
  },
  render: function(){
    return (
      <table>
        <thead>
          <tr>
            <th onClick={this.handleClickId}>id</th>
            <th>first name</th>
            <th>last name  </th>
            <th>email </th>
          </tr>
        </thead>
        <tbody>
        {this.buildTableRows()}
        </tbody>
      </table>
    )
  },
  componentDidMount: function(){
    var thiz = this;
    $.ajax({
      url: "/transactions"
    }).done(function (data){
      var records = data.records;
      thiz.setState({records: records});
    });
  },
  buildTableRows: function(){
    return this.state.records.map(function(element){
      return (
        <tr>
          <td>{element.id}</td>
          <td>{element.first_name}</td>
          <td>{element.last_name}</td>
          <td>{element.email}</td>
        </tr>
      )
    })
  }
});

$( document ).ready(function() {
  ReactDOM.render(<TwinFactsTable/>, document.getElementById('app'));
});

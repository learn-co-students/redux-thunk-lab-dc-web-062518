import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import { fetchCats } from '../redux/actions/catActions'
import CatList from './CatList'

class App extends Component {

  componentDidMount = ()=>{
    this.props.fetchCats()
  }


  render() {
    
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              {this.props.catPics.length > 0 ?
                 <CatList catPics={this.props.catPics} />
                 :null}
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state=>{
  return { catPics: state.cats }
}

export default connect(mapStateToProps, { fetchCats })(App)

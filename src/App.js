import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import fetchID from './action';
import './App.css';

class App extends Component {
  initialState = {
    selectedDepartment: '',
    selectedId: '',
    data: {
      'hr': [1, 2, 3, 4, 5],
      'engineering': [6, 7, 8, 9, 10],
    },
  }
  state = { ...this.initialState };
  handleSubmit = async event => {
    event.preventDefault();
    const { selectedId } = this.state;
    this.props.fetchID(selectedId);
  };
  handleReset = () => {
    this.setState({ ...this.initialState });
  };
  render() {
    const { selectedDepartment, selectedId, data } = this.state;
    const { loading, error, response } = this.props;
    if (error) {
      console.error(error);
    }
    return (
      <div>
        <form className='grid' onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <Dropdown
            placeholder='Select a departments'
            selectedKey={selectedDepartment}
            onChange={(event, item) => this.setState({ selectedDepartment: item.key })}
            options={Object.keys(data).map(d => ({ key: d, text: d }))}
          />
          <Dropdown
            placeholder='Select an employee ID'
            selectedKey={selectedId}
            onChange={(event, item) => this.setState({ selectedId: item.key })}
            options={selectedDepartment ? data[selectedDepartment].map(d => ({ key: d, text: d })) : []}
          />
          <PrimaryButton type='submit' text='Get details' onClick={this.handleSubmit} disabled={!selectedId} />
          <DefaultButton type='reset' text='Clear' onClick={this.handleReset} />
        </form>
        {
          loading ?
            <Spinner size={SpinnerSize.large} label='Loading...' /> :
            (selectedId && response && response.id === selectedId) ?
              <div className='card'>
                <img src={response.avatar} alt={`${response.first_name} ${response.last_name}`} />
                <div className='grid'>
                  <span>ID: {response.id}</span>
                  <span>Name: {response.first_name} {response.last_name}</span>
                </div>
              </div> :
              null
        }
      </div>
    );
  }
}

const mapStateToProps = ({ loading, error, response }) => ({
  loading,
  error,
  response,
});

const mapDispatchToProps = dispatch => ({
  fetchID: (...args) => dispatch(fetchID(...args)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);

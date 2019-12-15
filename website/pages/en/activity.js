const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Activity(props) {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <h1>Machine Learning for Begineers!について</h1>
        <p>This is my first page!</p>
      </Container>
    </div>
  );
}

module.exports = Activity;
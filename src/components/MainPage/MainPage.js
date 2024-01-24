import React, { useEffect } from "react";
import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import './MainPage.css';


function MainPage(props) {
  const { searchField, onSearchChange, robots, onRequestRobots, isPending, error } = props;

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filterRobots = () => {
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
  }

  return isPending ?
    <h1 className = "f1 abs-centered" id="loading-screen">Loading</h1> :
      (
        <div className="tc" data-testid="mainpage">
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary error={error}>
              <CardList robots={filterRobots()} />
            </ErrorBoundary>
          </Scroll>
        </div>
      ) 
  }

export default MainPage;

import React from 'react';
import styles from './Sidebar.module.css'
import { Link ,withRouter } from "react-router-dom";
import logo from "../../images/logo.png"
import news from "../../images/news.png"
import near from "../../images/nearme.png"
import graph from "../../images/graph.png"


class SideNav extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          activePath: props.location.pathname,//this prop is got by with router import and Routersidenav wrapping
          items: [
            {
              path: '/', /* path is used as id to check which NavItem is active basically */
              name: 'Tracker',
              css: 'fa fa-fw fa-home',
              image: graph,
              key: 1 /* Key is required, else console throws error */
            },
            {
              path: '/nearme',
              name: 'About',
              css: 'fa fa-fw fa-clock',
              image: near,
              key: 2
            },
            {
              path: '/news',
              name: 'NoMatch',
              css: 'fas fa-hashtag',
              image: news,
              key: 3
            },
          ]
        }
      }
      onItemClick = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
      } 

    render() {
        const { items, activePath } = this.state;
        return (
          <div className={styles.sidenav}>
            <img className={styles.logo} src={logo} alt="My logo" />

            {items.map((item) => {
              /* Return however many NavItems in array to be rendered */
              return (
                <NavItem
                  path={item.path}
                  name={item.name}
                  css={item.css}
                  image={item.image}
                  onItemClick={this.onItemClick}
                  active={item.path === activePath}
                  key={item.key}
                />
              )
            })}
          </div>
        );
    }
}
const RouterSideNav = withRouter(SideNav);

class NavItem extends React.Component {
    render() {
        const { active } = this.props;
        const handleClick = () => {
            const { path, onItemClick } = this.props;
            onItemClick(path);
          }
        return (   
            <div className={styles.navitem}>
            <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
            <img className={styles.navicon} src={this.props.image} alt={this.props.path}/>
            </Link>
            </div>
            );
    }
  }

class Sidebar extends React.Component {
    render() {
      return (
            <RouterSideNav />
      );
    }
 }
 export default Sidebar;
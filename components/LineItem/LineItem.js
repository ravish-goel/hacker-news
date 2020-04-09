import React from 'react';
import styles from './LineItem.module.css';
import TimeAgo from 'react-timeago';

class LineItem extends React.Component{
    constructor(props){
        super(props);
        this.state = { upvoteValue: 0 };
    }

    upvote(id){ 
        var newVal = parseInt(localStorage.getItem(id)) + 1;
        localStorage.setItem(id, newVal.toString());
        this.setState({upvoteValue: localStorage.getItem(id)});
    }

    componentDidMount(){
        if(!localStorage.getItem(this.props.objectID)){
            localStorage.setItem(this.props.objectID, 0);
        }
        this.setState({upvoteValue: localStorage.getItem(this.props.objectID)});
    }

    render(){
        return(
            <li className={styles.item}>
                <p className={styles.index}>{this.props.index}.</p>
                <p className={styles.comments}>{this.props.num_comments}</p>
                <p className={styles.upvote}>{this.state.upvoteValue}</p>
                <a onClick={(e)=>{this.upvote(this.props.objectID)}} className={styles.arrowUp}></a>
                <h4>{this.props.title} <span className={styles.url}>({this.props.url}) by <strong className={styles.author}>{this.props.author}</strong> <TimeAgo date={this.props.created_at} /></span></h4>
            </li>
        )
    }
}
export default LineItem;
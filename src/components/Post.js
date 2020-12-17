import React,{ Component } from 'react'
//we automatically get props in class based comp
//import axios from 'axios'
import {connect } from 'react-redux'
import {deletePost} from '../actions/postActions' 




class Post extends Component {

handleClick = () =>
{
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
}
//  state = {
//      post : null
//     // id :null

//  }
//     componentDidMount()
//     {
//        // console.log(this.props)
//         let id = this.props.match.params.post_id;
//         axios.get('https://jsonplaceholder.typicode.com/posts/'+ id  )
//         .then(res => {
//             this.setState({post : res.data})
//            // console.log(res)
//         })    
        
//          // this.setState({id : id})
//     }

 render(){

    // const post = this.state.post ? 
    console.log(this.props)
    const post = this.props.post ? (
        <div className="post">
            <h4 className="center">{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
            <div className="center">
                <button className="btn grey" onClick={this.handleClick}>
                    Delete Post
                </button>
            </div>
        </div>
    ) : (
        <div className="center">Loading post...... </div>
    )
 return (
     <div className="container">
         {/* <h4>{this.state.id}</h4> */}
         {post}
     </div>
 )
 }
}



const mapStateToProps = (state,ownProps) =>
{
    let id = ownProps.match.params.post_id;
    return {
        post : state.posts.find(post => post.id === id)
    }
}


const mapDispatchToProps = (dispatch) =>
{
//dispatch({})
return {
    deletePost : (id) => { 
       dispatch(deletePost(id))
        // dispatch({type : 'DELETE_POST',id : id})
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Post) 
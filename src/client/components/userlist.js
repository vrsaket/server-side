import { connect } from "react-redux"
import { fetchUsers } from "../actions"
import React, { Component } from "react"


class UserList extends Component {
     componentDidMount() {
        this.props.fetchUsers()
     }

     renderUsers() {
        return this.props.users.map(user => {
            return   <li key={user.id}>{user.name}</li>
        })
     }

     render() {
         return (
           <div>
            Here is the list of users .....
            <ul>
               {this.renderUsers()}
            </ul>
        </div>
    )
                }
}

function mapStateToProps(state){
    return {users : state.users}
} 

function loadData(store){ // store coming from server
   return store.dispatch(fetchUsers())
}

export {loadData};

export default connect(mapStateToProps,  {fetchUsers})(UserList)
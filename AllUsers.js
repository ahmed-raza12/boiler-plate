import React, { Component } from 'react';
import { connect } from 'react-redux';
import {allUsers} from '../store/action' 
import * as firebase from 'firebase';
import { rootRef } from '../database';
import EditButton from 'react-icons/lib/fa/pencil';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './form.css';




class UsersList extends Component {

    
    componentWillMount(){
        this.props.allUsers()
    }
    
    render() {
        this.props.allUsers()
        const listStyle = {
            fontSize: 20,
        }
        // console.log('all student', this.props.users)
        return (
            <div>
                <h1>Hello users</h1>

                <Card className="form">
                    <CardHeader
                        title="All Users Data"
                    />
                    <List >
                        {
                            
                            this.props.users.map((user, index) => {
                                return (
                                    <div>
                                    <ListItem  style={{cursor: 'default'}} primaryText={user.name} secondaryText={`ID   ${user.id}`} key={index} style={listStyle} rightIconButton={<EditButton />} />
                                    <hr />
                                    </div>
                                )
                            })
                        }
                    </List>
                </Card>                                        
        </div>
        )
}

}


// function mapDispatchToProps(dispatch) {
//     return({
//         changeRecUID: (data) => {
//             dispatch(recieUid(data))
//         }
//     })
// }

function mapStateToProps(state) {
    // console.log(state)
    return {
        users: state.reducer.allUsers
    }
}

export default connect(mapStateToProps, {allUsers}) (UsersList);
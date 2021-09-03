import React from 'react'
import uuid from 'uuid'
 import {compose} from 'redux'
/*
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
 */
import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

const App = ({LaneActions, lanes}) => {
    const addLane = () => {
        LaneActions.create({
            id:uuid.v4(),
            name:'New lane'
        });
    };
    return(
        <div>
            <button className="add-lane" onClick={addLane}>+</button>
            <Lanes lanes={lanes} />
        </div>
    );
};




export default connect(({ lanes }) => ({
    lanes
}), {
    LaneActions
})(App)
/* 
class App extends React.Component {
    render() {
        const { notes } = this.props;
        return (
            <div>
                <button className="add-note" onClick={this.addNote}>+</button>
                <Notes
                    notes={notes}
                    onNoteClick={this.activateNoteEdit}
                    onEdit={this.editNote}
                    onDelete={this.deleteNote} />
                {/*  <Lanes lanes={this.props.lanes} /> }
            </div>
        );
    }
    addLane = () => {
        this.props.laneActions.create({ name: 'New lane' });
    }
    addNote = () => {
        this.props.NoteActions.create({
            id: uuid.v4(),
            task: 'New task'
        });
    }
    deleteNote = (id, e) => {
        e.stopPropagation();
        this.props.NoteActions.delete(id);
    }
    activateNoteEdit = (id) => {
        this.props.NoteActions.update({ id, editing: true })

    }
    editNote = (id, task) => {
        this.props.NoteActions.update({ id, task, editing: false });
    }
}
 */
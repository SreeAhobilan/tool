import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  ViewState, GroupingState, IntegratedGrouping, IntegratedEditing, EditingState,
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  Appointments,
  AppointmentTooltip,
  GroupingPanel,
  WeekView,
  DragDropProvider,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';
import {
  teal, indigo,
} from '@mui/material/colors';

const appointments = [{
  id: 0,
  title: 'Watercolor Landscape',
  members: [1, 2],
  roomId: 1,
  startDate: new Date(2022, 5, 28, 9, 30),
  endDate: new Date(2022, 5, 28, 12, 0),
}, {
  id: 1,
  title: 'Oil Painting for Beginners',
  members: [1],
  roomId: 2,
  startDate: new Date(2017, 4, 28, 12, 30),
  endDate: new Date(2017, 4, 28, 14, 30),
}, {
  id: 2,
  title: 'Testing',
  members: [1, 2],
  roomId: 1,
  startDate: new Date(2017, 4, 29, 12, 30),
  endDate: new Date(2017, 4, 29, 14, 30),
}, {
  id: 3,
  title: 'Final exams',
  members: [1, 2],
  roomId: 2,
  startDate: new Date(2017, 4, 29, 9, 30),
  endDate: new Date(2017, 4, 29, 12, 0),
}];

const owners = [{
  text: 'Andrew Glover',
  id: 1,
  color: indigo,
}, {
  text: 'Arnie Schwartz',
  id: 2,
  color: teal,
}];

const locations = [
  { text: 'Project 1', id: 1 },
  { text: 'Project 2', id: 2 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      resources: [{
        fieldName: 'members',
        title: 'Members',
        instances: owners,
        allowMultiple: true,
      }, {
        fieldName: 'roomId',
        title: 'Location',
        instances: locations,
      }],
      grouping: [{
        resourceName: 'roomId',
      }, {
        resourceName: 'members',
      }],
    };

    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data, resources, grouping } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate="2022-05-01"
          />
          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <GroupingState
            grouping={grouping}
          />

          <WeekView
            startDayHour={9}
            endDayHour={19}
            // intervalCount={2}
          />
          <Appointments />
          <Resources
            data={resources}
            mainResourceName="members"
          />

          <IntegratedGrouping />
          <IntegratedEditing />

          <AppointmentTooltip showOpenButton />
          <AppointmentForm />
          <GroupingPanel />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}

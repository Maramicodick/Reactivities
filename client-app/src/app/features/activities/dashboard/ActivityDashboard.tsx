import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../layout/LoadingComponent";


export default observer (function ActivityDashboard() {

    const {activityStore} = useStore();

    useEffect(() => {
      activityStore.loadActivities();
    }, [activityStore])
  
    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>
  
    const {selectedActivity, editMode} = activityStore;
    
    return (
        <Grid>
            <Grid.Column width = '10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails />}
                {editMode &&
                <ActivityForm />}
            </Grid.Column>
        </Grid>
    )
})
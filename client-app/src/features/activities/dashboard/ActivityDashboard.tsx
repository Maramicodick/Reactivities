import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityFilters from "./ActivityFilters";


export default observer (function ActivityDashboard() {

    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
      if (activityRegistry.size === 0) loadActivities();
    }, [loadActivities, activityRegistry.size])
  
    if (activityStore.loadingInitial) return <LoadingComponent content='Loadinging activities'/>
    
    return (
        <Grid>
            <Grid.Column width = '10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters />
            </Grid.Column>
        </Grid>
    )
})
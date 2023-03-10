import * as TaskManager from 'expo-task-manager';
import * as TaskManager from 'expo-task-manager';
export class GeoFencing {
    constructor(){

        const GEOFENCE_REGION = {
            latitude: 37.7895,
            longitude: -122.4208,
            radius: 200, // meters
            notifyOnEnter: true,
            notifyOnExit: false,
        };
        
        // Define the name of the geofencing task
        const GEOFENCING_TASK = 'GEOFENCING_TASK';
        
        // Define the geofencing task
        TaskManager.defineTask(GEOFENCING_TASK, ({ data, error }) => {
            if (error) {
                console.error(error);
                return;
            }
            if (data) {
                const { eventType, region } = data;
                if (eventType === Location.GeofencingEventType.Enter) {
                    Alert.alert('You entered the geofenced region!');
                }
            }
        });
    }
}
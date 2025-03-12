import { log } from 'console';
import { 
    addUser,logWorkout,getAllWorkoutsOf,getAllWorkoutsByType,getUsers,getUser,updateUser } from './tracker';

addUser("U001","yogI",24,59,5.2);
addUser("U0022","manu",20,70,5.7);
addUser("U003","raghu",30,45,6.1);

logWorkout("U001", { type: "running", duration: 30, caloriesBurned: 300, date: new Date() });
logWorkout("U002", { type: "yoga", duration: 45, caloriesBurned: 150, date: new Date() });
logWorkout("U003", { type: "cycling", duration: 60, caloriesBurned: 500, date: new Date() });
logWorkout("U003", { type: "gym", duration: 60, caloriesBurned: 800, date: new Date() });
logWorkout("U001", { type: "yoga", duration: 45, caloriesBurned: 150, date: new Date() });
logWorkout("U002", { type: "gym", duration: 45, caloriesBurned: 150, date: new Date() });

console.log(getUser("U003")); 

console.log(getUsers()); 

console.log(getAllWorkoutsOf("U003")); 

console.log(getAllWorkoutsByType("U003", "gym")); 

updateUser("U001", { weight: 64, height: 169 });
console.log(getUser("US001"));

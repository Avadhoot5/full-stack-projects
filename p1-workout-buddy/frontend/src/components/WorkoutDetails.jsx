import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({workout}) => {

    const { dispatch } = useWorkoutsContext();

    const handleDeleteClick = async () => {
        const repsonse = await fetch('/api/workouts/' + workout._id, {
            method : 'DELETE'
        })

        const json = await repsonse.json()

        if (repsonse.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }

    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p><strong>Weight: </strong>{workout.weight}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleDeleteClick}>delete </span>
        </div>
    )
}

export default WorkoutDetails;
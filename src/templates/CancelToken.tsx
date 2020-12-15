import React, { useEffect } from 'react';
// import { useHistory, useRouteMatch } from 'react-router-dom';

// import Axios from 'axios';
// import { getEventFromServer, approveEvent, refuseEvent } from '../redux"
// import { useDispatch, useSelector } from 'react-redux';


// interface MatchParams {
// 	activityId: string;
// }
// const EventContainer = () => {
// 	const history = useHistory()
// 	const dispatch = useDispatch()

// 	const routeMatch = useRouteMatch<MatchParams>()
// 	const activityId = routeMatch.params.activityId

// 	useEffect(() => {
// 		let source = Axios.CancelToken.source()

// 		dispatch(getEventFromServer(+activityId, source.token))

// 		return () => { source.cancel() }
// 	}, [activityId])


// 	const approveEventDispatch = async (id: number) => {
// 		dispatch(approveEvent(id, () => {
// 			history.push(`/`)
// 		}))
// 	}
// 	const refuseEventDispatch = (id: number) => {
// 		dispatch(refuseEvent(id, () => {
// 			history.push(`/`)
// 		}))
// 	}


// 	return (
//         <div></div>
//     )
// }
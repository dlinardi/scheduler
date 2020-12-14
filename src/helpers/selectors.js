function getAppointmentsForDay(state, day) {
  let appointments = []
  const results = [];
  
  state.days.forEach((days) => {
    if (days.name === day) {
      appointments = days.appointments;
    }
  })

  appointments.forEach((appointment) => {
    for (const key in state.appointments) {
      if (appointment === state.appointments[key].id) {
        results.push(state.appointments[key]);
      }
    }
  });

  return results;
};

function getInterviewersForDay(state, day) {
  let interviewers = []
  const results = [];
  
  state.days.forEach((days) => {
    if (days.name === day) {
      interviewers = days.interviewers;
    }
  })

  interviewers.forEach((interviewer) => {
    for (const key in state.interviewers) {
      if (interviewer === state.interviewers[key].id) {
        results.push(state.interviewers[key]);
      }
    }
  });

  return results;
};

function getInterview(state, interview) {
  if (interview) { 
    const result = {};

    const id = interview.interviewer;
    result.student = interview.student;
    result.interviewer = state.interviewers[id];
    return result;
  }

  return null;
};


export { getAppointmentsForDay, getInterviewersForDay, getInterview };